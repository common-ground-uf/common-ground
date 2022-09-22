import { hash, compare } from 'bcrypt';
import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { User } from '@interfaces/users.interface';
import userModel from '@/models/users.models';
import { isEmpty } from '@utils/util';
import passport from 'passport';
import userService from './users.service';

class AuthService {
    public users = userModel;
    public userService = new userService();

    // public async login(userData: CreateUserDto): Promise<{findUser: User}> {
        
    // }
}
export default AuthService;