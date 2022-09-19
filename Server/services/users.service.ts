import { hash } from 'bcrypt';
import { CreateUserDto } from '@dtos/users.dto';
import { User } from '@/interfaces/users.interface'
import userModel from '@/models/users.models';
import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';

class UserService {
    public users = userModel;

    public async findAllUser(): Promise<User[]> {
        const users: User[] = await this.users.find();
        return users;
    }

    public async findUserById(userId: string): Promise<User> {
        if (isEmpty(userId)) throw new HttpException(400, "UserId is empty");

        const findUser : User = await this.users.findOne({ _id: userId });
        if (!findUser) throw new HttpException(409, "User doesn't exist");

        return findUser;
    }
    
    public async findUserByEmail(userEmail: string): Promise<User> {
        if (isEmpty(userEmail)) throw new HttpException(400, "UserEmail is empty");

        const findUser : User = await this.users.findOne({ email: userEmail });
        if (!findUser) throw new HttpException(409, "User doesn't exist");

        return findUser;
    }

    public async createUser(userData: CreateUserDto): Promise<User> {
        if (isEmpty(userData)) throw new HttpException(400, "userData is empty");

        const findUser: User = await this.users.findOne({ email: userData.email });
        if (findUser) throw new HttpException(409, `This email ${userData.email} already exists`);

        this.users.register(new userModel({username: userData.email, email: userData.email}), userData.password, (err: Error, user : User) => {
            if(err)
            {
                throw new HttpException(409, "Your account could not be saved. Error: " + err);
            }
        });

        const createdUser : User = await this.users.findOne({ email: userData.email });
        return createdUser;
    }

    public async deleteUser(userId: string): Promise<User> {
        return null;
    }

}

export default UserService;
