import { model, Schema, Document } from 'mongoose';
import { User } from '@/interfaces/users.interface';
import passportLocalMongoose from 'passport-local-mongoose'

const userSchema: Schema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});


userSchema.plugin(passportLocalMongoose);
const userModel: any = model<User & Document>('User', userSchema);
export default userModel;