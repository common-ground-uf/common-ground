export interface Message {
    _id: string,
    groupId: string,
    message: string,
    type: string,
    postedByUser : string,
    readByRecipients: Array<any>
}