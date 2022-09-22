import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { User } from '@interfaces/users.interface';
import AuthService from '@services/auth.service';
import userModel from '@/models/users.models';

class AuthController {
    public authService = new AuthService();

    public logIn = userModel.authenticate();

    public logInFailure = async (req: Request, res: Response, next: NextFunction) => {

    }


}

export default AuthController