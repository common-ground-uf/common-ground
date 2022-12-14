import { model, Schema, Document } from 'mongoose';
import { User } from '@interfaces/users.interface'
import passportLocalMongoose from 'passport-local-mongoose'
import { v4 as uuidv4} from 'uuid';

const userSchema: Schema = new Schema({
    _id: {
        type: String,
        default: () => uuidv4().replace(/\-/g, ""),
      },
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstname: {
        type: String,
        required: true,
        unique: false
    },
    lastname: {
        type: String,
        required: true,
        unique: false
    },
    profilePic: {
        type: String,
        required: false,
        unique: false
    },
    pastPicks: {
        type: [String],
        required: false,
        unique: false
    },
    recentContacts: {
        type: [String],
        required: false,
        unique: false
    },
    role: {
        type: String,
        required: true,
        unique: false
    }
});


userSchema.plugin(passportLocalMongoose, {"usernameField": "email"});
const userModel: any = model<User & Document>('User', userSchema);
export default userModel;