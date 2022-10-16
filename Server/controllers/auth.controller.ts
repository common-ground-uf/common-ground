import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { User } from '@interfaces/users.interface';
import AuthService from '@services/auth.service';
import userModel from '@/models/users.models';

class AuthController {
    public authService = new AuthService();


    public logInFailure = async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.status(401).json({message:"login failed"});
        } catch (error) {
            next(error);
        }
    }

    
    public logOut = async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.logOut((err: Error) => {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            });
        } catch (error) {
            next(error);
        }
    }


}

export default AuthController