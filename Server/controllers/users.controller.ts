import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { User } from '@interfaces/users.interface';
import userService from '@services/users.service';

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

    public createUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userData: CreateUserDto = req.body;
            const createUserData: User = await this.userService.createUser(userData);
    
          res.status(201).json({ data: createUserData, message: 'created' });
        } catch (error) {
          next(error);
        }
      };
    
    public updateUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId: string = req.params.id;
            const userData: CreateUserDto = req.body;
            const updateUserData: User = await this.userService.updateUser(userId, userData);

            res.status(200).json({ data: updateUserData, message: 'updated' });
        } catch (error) {
            next(error);
        }
    };

    public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId: string = req.params.id;
            const deleteUserData: User = await this.userService.deleteUser(userId);

            res.status(200).json({ data: deleteUserData, message: 'deleted' });
        } catch (error) {
            next(error);
        }
    };

    public addUserPref = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const currentUser : string = req.user?._id!;
            const userId: string = req.params.id;
            if (currentUser != userId) return res.status(403).json({success:false, error:"User not authorized"});
            const prefArray : string[] = req.body.preferences;
            const newPrefs: string[] = await this.userService.addPreference(currentUser, prefArray);
            res.status(200).json({success: true, prefs: newPrefs});
        } catch(error) {
            return res.status(500).json({success: false, error: error});
        }
    };

    public removeUserPref = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const currentUser : string = req.user?._id!;
            const userId: string = req.params.id;
            if (currentUser != userId) return res.status(403).json({success:false, error:"User not authorized"});
            const prefArray : string[] = req.body.preferences;
            const newPrefs: string[] = await this.userService.removePreference(currentUser, prefArray);
            res.status(200).json({success: true, prefs: newPrefs});
        } catch(error) {
            return res.status(500).json({success: false, error: error});
        }
    };

    public getUserPref = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const currentUser : string = req.user?._id!;
            const userId: string = req.params.id;
            if (currentUser != userId) return res.status(403).json({success:false, error:"User not authorized"});
            const userPrefs: string[] = await this.userService.getPreference(currentUser);
            res.status(200).json({success: true, prefs: userPrefs});
        } catch(error) {
            return res.status(500).json({success: false, error: error});
        }
    };
}

export default UsersController;