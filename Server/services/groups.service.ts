import { hash, compare } from 'bcrypt';
import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { Group } from '@interfaces/groups.interface';
import { isEmpty } from '@utils/util';
import passport from 'passport';
import userService from './users.service';
import groupModel from '@models/groups.models';
import messageModel from '@models/messages.models';
import { Message } from '@interfaces/messages.interface';
import mongoose from 'mongoose';

class GroupService {
    public groups = groupModel;
    public messages = messageModel;

    public async initiateGroup(userIds : string[]) : Promise<Group> {
        try {
            const availableGroup = await this.groups.findOne({
                userIds: {
                    $size: userIds.length,
                    $all: [...userIds],
                }
            });
            if (availableGroup) {
                return availableGroup;
            }
            const newGroup = await this.groups.create({userIds});
            return newGroup;
        } catch (error) {
            console.log('error on create group', error);
            throw error;
        }
    }

    public async createPostInGroup(groupId : string, message : object, postedByUser : string) {
        try {
            const post : Message = await this.messages.create({
                groupId,
                message,
                postedByUser,
                readByRecipients: {readByUserId: postedByUser}
            });
            const ObjectId = mongoose.Types.ObjectId
            const aggregate : Message[] = await this.messages.aggregate([
                // get post where _id = post._id
                { $match: { _id: post._id } },
                // do a join on another table called users, and 
                // get me a user whose _id = postedByUser
                {
                    $lookup: {
                    from: 'users',
                    localField: 'postedByUser',
                    foreignField: '_id',
                    as: 'postedByUser',
                    }
                },
                { $unset : [ 'postedByUser.salt','postedByUser.hash' ] },
                { $unwind: '$postedByUser' },
                {
                    $lookup: {
                    from: 'groups',
                    localField: 'groupId',
                    foreignField: '_id',
                    as: 'groupInfo',
                    }
                },
                { $unwind: '$groupInfo' },
                { $unwind: '$groupInfo.userIds' },
                {
                    $lookup: {
                    from: 'users',
                    localField: 'groupInfo.userIds',
                    foreignField: '_id',
                    as: 'groupInfo.userProfile',
                    }
                },
                { $unset : [ 'groupInfo.userProfile.salt','groupInfo.userProfile.hash' ] },
                { $unwind: '$groupInfo.userProfile' },
                // group data
                {
                    $group: {
                    _id: '$groupInfo._id',
                    postId: { $last: '$_id' },
                    groupId: { $last: '$groupInfo._id' },
                    message: { $last: '$message' },
                    type: { $last: '$type' },
                    postedByUser: { $last: '$postedByUser' },
                    readByRecipients: { $last: '$readByRecipients' },
                    groupInfo: { $addToSet: '$groupInfo.userProfile' },
                    createdAt: { $last: '$createdAt' },
                    updatedAt: { $last: '$updatedAt' },
                    }
                }
            ]);
            return aggregate[0];
        } catch (error) {
            throw error;
        }
    }

    public async getGroupById(groupId : string) : Promise<Group> {
        try {
            const group = await this.groups.findOne({_id: groupId})
            return group;
        } catch (error) {
            throw error;
        }
    }

    public async getConversationById(groupId: string, options: { page: number; limit: number; }) {
        try {
            return this.messages.aggregate([
                { $match: { groupId } },
                { $sort: { createdAt: -1 } },
                {
                    $lookup: {
                        from: 'users',
                        localField: 'postedByUser',
                        foreignField: '_id',
                        as: 'postedByUser',
                      }
                },
                { $unset : [ 'postedByUser.salt','postedByUser.hash' ] },
                { $unwind: "$postedByUser" },
                { $skip: options.page * options.limit },
                { $limit: options.limit },
                { $sort: { createdAt: 1 } },
            ]);
        } catch (error) {
            throw error;
        }
    }

}
export default GroupService;