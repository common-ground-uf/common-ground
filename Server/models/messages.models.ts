import  { model, Schema, Document } from 'mongoose';
import { Message } from '@interfaces/messages.interface';

const MESSAGE_TYPES = {
    TYPE_TEXT: "text",
}

const readByRecipientSchema = new Schema(
    {
        readByUserId: String,
        readAt: {
            type: Date,
            default: Date.now(),
        },
    },
    {
      timestamps: false,
      _id: false
    }
  );

const messageSchema : Schema = new Schema(
    {
        groupId: String,
        message: Schema.Types.Mixed,
        type: {
            type: String,
            default: () => MESSAGE_TYPES.TYPE_TEXT,
        },
        postedByUser: String,
        readByRecipients: [readByRecipientSchema],

    },
    {
        timestamps: true
    }
    );

const messageModel : any = model<Message & Document>('Message', messageSchema);


export default messageModel;