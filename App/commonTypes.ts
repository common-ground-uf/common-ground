export type Restaurant = {
  name: string;
  thumbnail: string;
  address: Address;
  priceRating: number;
  starRating?: number;
  reviews: ReviewProps[];
  description: string;
  distanceMiles?: number;
  photos?: string[];
};

type Address = {
  line1: string;
  line2: string;
};

export type ReviewProps = {
  starRating: number;
  bodyText: string;
};

export type Contact = {
  id: string;
  firstName: string;
  lastName: string;
  profilePic: string;
};

export type GroupInfo = {
  id: string;
  name: string;
  members?: Profile[];
  lastMessage: string;
  inviteCode: string;
};

export type Profile = Contact & {
  preferences: string[];
  pastPicks: string[]; // past picks is preferences and not restaurants
  recentContacts: Contact[];
  email: string;
  location: string;
  role: string;
  groups: GroupInfo[];
};
