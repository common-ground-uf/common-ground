import { hash, compare } from 'bcrypt';
import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { Group } from '@interfaces/groups.interface';
import { isEmpty } from '@utils/util';
import passport from 'passport';
import userService from './users.service';
import groupModel from '@models/groups.models';

class GroupService {
    public groups = groupModel;

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
}
export default GroupService;