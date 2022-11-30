import { Router } from 'express';
import UsersController from '@controllers/users.controller';
import { Routes } from '@interfaces/routes.interface';
import { loggedIn, hasRole, logginInWithUserId } from '@middlewares/auth.middleware';

class UsersRoute implements Routes {
    public path = '/users';
    public router = Router();
    public usersController = new UsersController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, loggedIn, this.usersController.getUsers);
        this.router.get(`${this.path}/:id`, loggedIn, this.usersController.getUserById);
        this.router.get(`${this.path}/email/:email`, loggedIn, this.usersController.getUserByEmail);
        this.router.post(`${this.path}`, this.usersController.createUser);
        this.router.put(`${this.path}/:id`, logginInWithUserId, this.usersController.updateUser);
        this.router.post(`${this.path}/:id/prefs`, loggedIn, this.usersController.addUserPref);
        this.router.delete(`${this.path}/:id/prefs`, loggedIn, this.usersController.removeUserPref);
        this.router.get(`${this.path}/:id/prefs`, loggedIn, this.usersController.getUserPref);
    }
}

export default UsersRoute;