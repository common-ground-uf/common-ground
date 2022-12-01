export type Restaurant = {
  name: string;
  thumbnail: string;
  address: Address;
  priceRating: number;
  starRating?: number;
  reviews: ReviewProps[];
  description: string;
  distanceMiles?: number;
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

export type Group = {
  id: string;
  members: Profile[];
};

export type Profile = Contact & {
  preferences: string[];
  pastPicks: Restaurant[];
  recentContacts: Contact[];
  email: string;
  location: string;
  role: string;
  groups: Group[];
};
