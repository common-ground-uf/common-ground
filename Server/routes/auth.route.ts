import { Router } from 'express';
import AuthController from '@controllers/auth.controller';
import { Routes } from '@interfaces/routes.interface';
import passport from 'passport';
import {loggedIn} from '@middlewares/auth.middleware';

class AuthRoute implements Routes {
    public path = '/';
    public router = Router();
    public authController = new AuthController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}loginFail`, this.authController.logInFailure);
        this.router.post(`${this.path}login`, passport.authenticate('local', { successRedirect: '/auth', failureRedirect:'/loginFail'}));
        this.router.post(`${this.path}logout`, this.authController.logOut);
        this.router.get(`${this.path}auth`, loggedIn, this.authController.authUser);
    }
}

export default AuthRoute;