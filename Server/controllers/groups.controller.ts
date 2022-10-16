import { NextFunction, Request, Response } from 'express';
import { CreateGroupDto } from '@dtos/groups.dto';
import { Group } from '@interfaces/groups.interface';
import groupModel from '@models/groups.models'; 
import groupService from '@services/groups.service';
import { Message } from '@interfaces/messages.interface';
import userService from '@services/users.service';

class GroupsController {
    public groupService = new groupService();
    public userService = new userService();

    public initiate = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const groupInfo : CreateGroupDto = req.body;
            const group = await this.groupService.initiateGroup(groupInfo.userIds);
            return res.status(200).json({success:true, group});
        } catch (error) {
            next(error);
        }
    };

    public postMessage = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {groupId} = req.params;
            const message = {
                messageText: req.body.messageText,
            };
            const currentUser : string = req.user?._id!;
            const post : Message = await this.groupService.createPostInGroup(groupId, message, currentUser);
            global.io.sockets.in(groupId).emit('new message', {message: post});
            return res.status(200).json({success: true, post});
        } catch (error) {
            return res.status(500).json({success: false, error: error});
        }
    };

    public getConversationByGroupId = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {groupId} = req.params;
            const group : Group = await this.groupService.getGroupById(groupId);
            if (!group) {
                return res.status(400).json({
                    success: false,
                    message: 'No group exists for this id'
                });
            }
            const users = await this.userService.getUserByIds(group.userIds);
            const options = {
                page: parseInt(req.query.page as any) || 0,
                limit: parseInt(req.query.limit as any) || 10,
            };
            const conversation = await this.groupService.getConversationById(groupId, options);
            return res.status(200).json({
                success: true,
                conversation,
                users,
            })
        } catch (error) {
            return res.status(500).json({success: false, error});
        }
    }   
}

export default GroupsController