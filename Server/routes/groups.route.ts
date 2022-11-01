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
        this.router.get(`${this.path}`, loggedIn, this.groupsController.getRecentConversation);
        //this.router.get(`${this.path}`, loggedIn, this.groupsController.getRecentConversation);
        this.router.post(`${this.path}/:groupId`, loggedIn, this.groupsController.getConversationByGroupId);
        this.router.post(`${this.path}/:groupId/message`, loggedIn, this.groupsController.postMessage);
        this.router.post(`${this.path}/:groupId/prefs`, loggedIn, this.groupsController.addPreference);
        this.router.delete(`${this.path}/:groupId/prefs`, loggedIn, this.groupsController.removePreference);
        this.router.get(`${this.path}/:groupId/prefs`, loggedIn, this.groupsController.getPreference);
        this.router.get(`${this.path}/:groupId/groupPrefs`, loggedIn, this.groupsController.getGroupPrefs);
        //this.router.put(`${this.path}/:roomId/mark-read`)
    }
}

export default GroupsRoute;