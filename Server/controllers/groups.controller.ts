import { NextFunction, Request, Response } from 'express';
import { CreateGroupDto } from '@dtos/groups.dto';
import { Group } from '@interfaces/groups.interface';
import groupModel from '@models/groups.models'; 
import groupService from '@services/groups.service';

class GroupsController {
    public groupService = new groupService();

    public initiate = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const group : CreateGroupDto = req.body;
            const room = await this.groupService.initiateGroup(group.userIds);
            return res.status(200).json({success:true, room});
        } catch (error) {
            next(error);
        }
    };

    public postMessage = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {roomId} = req.params;
            const message = {
                messageText: req.body.messageText,
            };
            const currentUser : string = req.user?._id!;
            const post = await this.groupService.createPostInGroup(roomId, message, currentUser);
            global.io.sockets.in(roomId).emit('new message', {message: post});
            return res.status(200).json({success: true, post});
        } catch (error) {
            return res.status(500).json({success: false, error: error});
        }
    };
}

export default GroupsController