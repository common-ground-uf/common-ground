import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { User } from '@/interfaces/users.interface';
import userService from '@/services/users.service';

class UsersController {
    public userService = new userService();

    public getUsers = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllUsersData: User[] = await this.userService.findAllUser();

            res.status(200).json({ data: findAllUsersData, message: 'findAll'})
        } catch (error) {
            next(error);
        }
    }

    public getUserById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId: string = req.params.id;
            const findOneUserData: User = await this.userService.findUserById(userId);

            res.status(200).json({ data: findOneUserData, message: 'findOneId' });
        } catch (error) {
            next(error);
        }
    }

    public getUserByEmail = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userEmail: string = req.params.email;
            const findOneUserData: User = await this.userService.findUserByEmail(userEmail);

            res.status(200).json({ data: findOneUserData, message: 'findOneEmail' });
        } catch (error) {
            next(error);
        }
    }

    // TODO: create, update, delete user
}

export default UsersController;