import { model, Schema, Document } from 'mongoose';
import { Group } from '@interfaces/groups.interface';

const groupSchema : Schema = new Schema({
    userIds: Array
});

const groupModel : any = model<Group & Document>('Group', groupSchema);

groupModel.statics.initiateGroup = async function(userIds : Array<string>) 
{
    try {
        const availableGroup = await this.findOne({
            userIds: {
                $size: userIds.length,
                $all: [...userIds],
            }
        });
        if (availableGroup) {
            return {
                isNew: false,
                message: 'retrieving an old group',
                groupId: availableGroup._doc._id
            };
        }

        const newGroup = await this.create({userIds});
        return {
            isNew: true,
            message: 'creating a new group',
            groupId: newGroup._doc._id,
        };
    } catch (error) {
        console.log('error on create group', error);
        throw error;
    }
}

export default groupModel;