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
import mongoose, { Document } from 'mongoose';
import preferencesModel from '@models/preferences.models';
import { Preferences } from '@/interfaces/preferences.interface';

class GroupService {
    public groups = groupModel;
    public messages = messageModel;
    public preferences = preferencesModel;

    public async initiateGroup(userIds : string[], inviteCode : string, groupName : string) : Promise<Group> {
        try {
            const newGroup = await this.groups.create({
                userIds: [...userIds],
                inviteCode: inviteCode,
                name: groupName
            });
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

    public async getGroupsByUserId(userId : string) : Promise<Group[]> {
        try {
            const groups : Group[] = await this.groups.find({ userIds: { $all: [userId] } });
            return groups;
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

    public async getLastMessage(groupId: string, options : {page : number, limit : number} , currentUserId : string) {
        try {
            return this.messages.aggregate([
                { $match: { groupId: groupId  } },
                {
                    $group: {
                      _id: '$groupId',
                      messageId: { $last: '$_id' },
                      chatRoomId: { $last: '$groupId' },
                      message: { $last: '$message' },
                      type: { $last: '$type' },
                      postedByUser: { $last: '$postedByUser' },
                      createdAt: { $last: '$createdAt' },
                      readByRecipients: { $last: '$readByRecipients' },
                    }
                },
                { $sort: { createdAt: -1 } },
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
                { $unwind: "$postedByUser" },
                // do a join on another table called groups, and 
                // get me room details
                {
                    $lookup: {
                    from: 'groups',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'groupInfo',
                    }
                },
                { $unwind: "$groupInfo" },
                { $unwind: "$groupInfo.userIds" },
                // do a join on another table called users
                {
                    $lookup: {
                    from: 'users',
                    localField: 'groupInfo.userIds',
                    foreignField: '_id',
                    as: 'groupInfo.userProfile',
                    }
                },
                { $unset : [ 'groupInfo.userProfile.salt','groupInfo.userProfile.hash' ] },
                { $unwind: "$readByRecipients" },
                {
                    $lookup: {
                      from: 'users',
                      localField: 'readByRecipients.readByUserId',
                      foreignField: '_id',
                      as: 'readByRecipients.readByUser',
                    }
                },
                { $unset : [ 'readByRecipients.readByUser.salt','readByRecipients.readByUser.hash' ] },
                {
                $group: {
                    _id: '$groupInfo._id',
                    messageId: { $last: '$messageId' },
                    groupId: { $last: '$groupId' },
                    message: { $last: '$message' },
                    type: { $last: '$type' },
                    postedByUser: { $last: '$postedByUser' },
                    readByRecipients: { $addToSet: '$readByRecipients' },
                    groupInfo: { $addToSet: '$groupInfo.userProfile' },
                    createdAt: { $last: '$createdAt' },
                },
                },
                // apply pagination
                { $skip: options.page * options.limit },
                { $limit: options.limit },
            ]);
        } catch (error) {
            throw error;
        }
    }

    public async addPreference(currentUserId: string, groupId: string, prefs : string[]) {
        try {
            const validGroup = await this.groups.exists({
                groupId: groupId,
                userIds: currentUserId,
            });
            if(validGroup) {
                // const pref : Document = await this.preferences.exists({
                //     groupId: groupId,
                //     userId: currentUserId
                // });
                // if (pref) {
                    
                // }
                // else {
                //     // const newPref = await this.preferences.create({
                //     //     groupId: groupId,
                //     //     userId: currentUserId,
                //     //     preferences: prefs
                //     // });
                //     // return newPref;
                // }
                const pref = await this.preferences.findOneAndUpdate(
                    {groupId: groupId, userId: currentUserId},
                    {$addToSet: {preferences: prefs}},
                    {upsert: true, new:true}
                );
                return pref;
            }
            else {
                throw new HttpException(400, "Bad Request");
            }
        } catch(error) {
            throw error;
        }
    }

    public async removePreference(currentUserId: string, groupId: string, prefs : string[]) {
        try {
            const validGroup = await this.groups.exists({
                groupId: groupId,
                userIds: currentUserId,
            });
            if(validGroup) {
                const pref : Document = await this.preferences.exists({
                    groupId: groupId,
                    userId: currentUserId
                });
                if (pref) {
                    const dpref = await this.preferences.findOneAndUpdate(
                        {groupId: groupId, userId: currentUserId},
                        {$pull: {preferences: { $in: prefs}}},
                        {new:true}
                    );
                    return dpref;
                }
                else {
                    throw new HttpException(400, "No prefs to remove");
                }
            }
            else {
                throw new HttpException(400, "Invalid group/user combo");
            }
        } catch(error) {
            throw error;
        }
    }

    public async getPreference(currentUserId: string, groupId: string) {
        try {
            const validGroup = await this.groups.exists({
                groupId: groupId,
                userIds: currentUserId,
            });
            if(validGroup) {
                const pref : Preferences = await this.preferences.findOne({
                    groupId: groupId,
                    userId: currentUserId
                });
                if (pref) {
                    return pref;
                }
                else {
                    throw new HttpException(400, "No prefs to get");
                }
            }
            else {
                throw new HttpException(400, "Invalid group/user combo");
            }
        } catch(error) {
            throw error;
        }
    }

    public async getGroupPrefs(groupId: string) {
        try {
            return this.preferences.aggregate([
                { $match: { groupId: groupId } },
                { $unwind: "$preferences" },
                { $group: {_id: null, prefs: { $push: "$preferences"}} },
                { $project: {_id:0, groupPrefs: "$prefs"}}
            ]);
        } catch(error) {
            throw error;
        }
    }

    public async getGroupByInviteCode(inviteCode: string) {
        try {
            return await this.groups.findOne({inviteCode: inviteCode});
        } catch(error) {
            throw error;
        }
    }

    public async joinGroupByInviteCode(userId: string, inviteCode: string) {
        try {
            const updatedGroup = await this.groups.findOneAndUpdate(
                {
                    inviteCode: {
                        $regex: new RegExp(inviteCode, "i")
                    }
                },
                {$addToSet: {userIds: userId}}
            );
            
            if (updatedGroup) {
                return updatedGroup;
            }
            else {
                throw new HttpException(400, "Invalid invite code");
            }
        } catch(error) {
            throw error;
        }
    }

    public makeid(length: number) {
        let result = '';
        const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

}
export default GroupService;