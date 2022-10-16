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
    }
}

export default GroupsRoute;