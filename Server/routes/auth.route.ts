import { Router } from 'express';
import AuthController from '@controllers/auth.controller';
import { Routes } from '@interfaces/routes.interface';
import passport from 'passport';

class AuthRoute implements Routes {
    public path = '/';
    public router = Router();
    public authController = new AuthController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(`${this.path}login`, passport.authenticate('local', { successRedirect: '/', failureRedirect:'/users'}));
    }
}

export default AuthRoute;