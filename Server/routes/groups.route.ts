import { Router } from 'express';
import GroupsController from '@controllers/groups.controller';
import { Routes } from '@interfaces/routes.interface';
import { loggedIn, hasRole } from '@middlewares/auth.middleware';

class GroupsRoute implements Routes {
    public path = '/groups';
    public router = Router();
    public groupsController = new GroupsController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(`${this.path}`, loggedIn, this.groupsController.initiate);
        //this.router.get(`${this.path}`, loggedIn, this.groupsController.getRecentConversation);
        //this.router.post(`${this.path}/:roomId`, loggedIn, this.groupsController.getRecentConversationByRoomId);
        this.router.post(`${this.path}/:roomId/message`, loggedIn, this.groupsController.postMessage);
        //this.router.put(`${this.path}/:roomId/mark-read`)
    }
}

export default GroupsRoute;