import { NextFunction, Request, Response } from 'express';
import { CreateGroupDto } from '@dtos/groups.dto';
import { Group } from '@interfaces/groups.interface';
import groupModel from '@models/groups.models'; 
import groupService from '@services/groups.service';
import { Message } from '@interfaces/messages.interface';
import userService from '@services/users.service';
import { Preferences } from '@/interfaces/preferences.interface';

class GroupsController {
    public groupService = new groupService();
    public userService = new userService();

    public initiate = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const currentUser : string = req.user?._id!;
            const groupInfo : CreateGroupDto = req.body;

            let inviteCode = this.groupService.makeid(6);
            let codeExists = await this.groupService.getGroupByInviteCode(inviteCode);

            while (codeExists) {
                inviteCode = this.groupService.makeid(6);
                codeExists = await this.groupService.getGroupByInviteCode(inviteCode);
            }
            groupInfo.userIds.push(currentUser);

            const group = await this.groupService.initiateGroup(groupInfo.userIds, inviteCode, groupInfo.name);
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
    };

    public getGroups = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const currentUser : string = req.user?._id!;
            const options = {
                page: parseInt(req.query.page as any) || 0,
                limit: parseInt(req.query.limit as any) || 10,
            };
            const groups : Group[] = await this.groupService.getGroupsByUserId(currentUser);
            const groupIds = groups.map(group => group._id);
            return res.status(200).json({success: true, groups: groupIds, names: groups.map(group => group.name)});
        } catch(error) {
            return res.status(500).json({success: false, error: error});
        }
    };

    public getRecentConversation = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const currentUser : string = req.user?._id!;
            const options = {
                page: parseInt(req.query.page as any) || 0,
                limit: parseInt(req.query.limit as any) || 10,
            };
            const groups : Group[] = await this.groupService.getGroupsByUserId(currentUser);
            const groupIds = groups.map(group => group._id);
            const recentConversation = await this.groupService.getRecentConversation(groupIds, options, currentUser);
            return res.status(200).json({success: true, conversation: recentConversation});
        } catch(error) {
            return res.status(500).json({success: false, error: error});
        }
    };

    public addPreference = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const currentUser : string = req.user?._id!;
            const {groupId} = req.params;
            const prefArray : string[] = req.body.preferences;
            const userPrefs : Preferences = await this.groupService.addPreference(currentUser, groupId, prefArray);
            res.status(200).json({success: true, prefs: userPrefs});
        } catch(error) {
            return res.status(500).json({success: false, error: error});
        }
    };

    public removePreference = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const currentUser : string = req.user?._id!;
            const {groupId} = req.params;
            const prefArray : string[] = req.body.preferences;
            const userPrefs : Preferences = await this.groupService.removePreference(currentUser, groupId, prefArray);
            res.status(200).json({success: true, prefs: userPrefs});
        } catch(error) {
            return res.status(500).json({success: false, error: error});
        }
    };

    public getPreference = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const currentUser : string = req.user?._id!;
            const {groupId} = req.params;
            const userPrefs : Preferences = await this.groupService.getPreference(currentUser, groupId);
            res.status(200).json({success: true, prefs: userPrefs});
        } catch(error) {
            return res.status(500).json({success: false, error: error});
        }
    };

    public getGroupPrefs = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {groupId} = req.params;
            const groupPrefs : string [] = await this.groupService.getGroupPrefs(groupId);
            res.status(200).json({success: true, groupPrefs});
        } catch(error) {
            next(error);
        }
    }
}

export default GroupsController