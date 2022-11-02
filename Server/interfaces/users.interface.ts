export interface User {
    _id: string;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    profilePic: string;
    pastPicks: string[];
    recentContacts: string[];
    role: string;
}