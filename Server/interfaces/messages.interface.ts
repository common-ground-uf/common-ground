export interface Message {
    _id: String,
    groupId: String,
    message: String,
    type: String,
    postedByUser : String,
    readByRecipients: Array<any>
}