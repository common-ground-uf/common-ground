import { model, Schema, Document } from 'mongoose';
import { Preferences } from '@interfaces/preferences.interface';
import passportLocalMongoose from 'passport-local-mongoose'
import { v4 as uuidv4} from 'uuid';

const preferencesSchema: Schema = new Schema({
    groupId: {
        type: String,
        ref: 'Group',
        required: true,
        unique: false
    },
    userId: {
        type: String,
        ref: 'User',
        required: true,
        unique: false
    },
    preferences: {
        type: [String],
        unique: false
    }

});


const preferencesModel : any = model<Preferences & Document>('Preferences', preferencesSchema);
export default preferencesModel;