import { Contact, Profile } from "./commonTypes";
import { allUsers } from "./data/dummyUsers";

export function mapContactToProfile(contact: Contact): Profile {
    const result: Profile = allUsers.filter((user) => user.id === contact.id)[0];
    return result;
}