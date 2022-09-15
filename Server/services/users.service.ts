import { hash } from 'bcrypt';
import { CreateUserDto } from '@dtos/users.dto';
import { User } from '@/interfaces/users.interface'
import userModel from '@/models/users.models';

class UserService {
    public users = userModel;

    public async findAllUser(): Promise<User[]> {
        const users: User[] = await this.users.find();
        return users;
    }

    public async findUserById(userId: string): Promise<User> {
    }
    
    public async findUserByEmail(userEmail: string): Promise<User> {
        
    }

    public async createUser(userData: CreateUserDto): Promise<User> {

    }

    public async deleteUser(userId: string): Promise<User> {

    }

}

export default userService;
