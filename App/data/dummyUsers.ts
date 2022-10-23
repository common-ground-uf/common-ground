import { Contact, Profile } from '../commonTypes';
import {losPollosHermanos, tacoSal, loyolasFamilyRestaurant} from './dummyRestaurants';


export const FingerContact: Contact = {
  id: '1',
  firstName: 'Finger',
  lastName: '',
  profilePic: 'https://compote.slate.com/images/fb69a16d-7f35-4103-98c1-62d466196b9a.jpg?width=1200',
};

export const GusContact: Contact = {
  id: '2',
  firstName: 'Gus',
  lastName: 'Fring',
  profilePic: 'https://static.wikia.nocookie.net/breakingbad/images/5/54/BCS_S3_GusFring.jpg/revision/latest?cb=20170327185354',
};

export const WalterContact: Contact = {
  id: '3',
  firstName: 'Walter',
  lastName: 'White',
  profilePic: 'data:image/jpeg;base64,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',
};

export const Finger: Profile = {
  ...FingerContact,
  preferences: ['BBQ', '$-$$', 'American', 'Mexican'],
  pastPicks: [],
  recentContacts: [],
  email: 'finger@gmail.com',
  location: 'Albuquerque',
};

export const Gus: Profile = {
  ...GusContact,
  preferences: ['BBQ', '$-$$', 'American', 'Mexican'],
  pastPicks: [losPollosHermanos, tacoSal, loyolasFamilyRestaurant],
  recentContacts: [],
  email: 'gus@lospolloshermanos.com',
  location: 'Albuquerque',
};

export const Walter: Profile = {
  ...WalterContact,
  preferences: ['BBQ', '$-$$', 'American', 'Mexican'],
  pastPicks: [losPollosHermanos, tacoSal, loyolasFamilyRestaurant],
  recentContacts: [],
  email: 'theonethatknocks@hotmail.com',
  location: 'Albuquerque',
};

export const StanEdgarContact = {
  id: '5',
  firstName: 'Stan',
  lastName: 'Edgar',
  profilePic: 'https://static.wikia.nocookie.net/villains/images/3/38/740full-stan-edgar.jpg/revision/latest/scale-to-width-down/250?cb=20190925225050',
};

export const stanEdgar: Profile = {
    ...StanEdgarContact,
    preferences: ['BBQ', '$-$$', 'American', 'Mexican'],
    pastPicks: [losPollosHermanos, tacoSal, loyolasFamilyRestaurant],
    recentContacts: [GusContact],
    email: 'stan.edgar@vought.com',
    location: 'New York City',
};

export const recentContacts = [FingerContact, GusContact, WalterContact, stanEdgar];

export const saulProfile: Profile = {
    id: '4',
    firstName: 'Saul',
    lastName: 'Goodman',
    profilePic: 'https://external-preview.redd.it/Af65FrXSGlwOobPUnC3MNOI1D3xCCERFWoVFfhzpgio.png?format=pjpg&auto=webp&s=ed7b1feb0f8356ba51ea70f5b26b81c1868bc005',
    preferences: ['BBQ', '$-$$', 'American', 'Mexican'],
    pastPicks: [losPollosHermanos, tacoSal, loyolasFamilyRestaurant],
    recentContacts: recentContacts,
    email: 'saul@bettercallsaul.net',
    location: 'Albuquerque',
};

export const allUsers: Profile[] = [Gus, Walter, saulProfile, Finger, stanEdgar];

const members = [Gus, Walter, Finger];

export const parties = [
  {
    name: 'The boys',
    members: members,
  },
  {
    name: 'SSDrink&Drive',
    members: members,
  },
  {
    name: 'My bitch family',
    members: members,
  },
  {
    name: 'Whiskey Wednesday Gang',
    members: members,
  },
];
