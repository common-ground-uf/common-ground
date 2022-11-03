import { Contact, Profile } from '../commonTypes'
import {
  losPollosHermanos,
  tacoSal,
  loyolasFamilyRestaurant,
} from './dummyRestaurants'

export const fingerContact: Contact = {
  id: '1',
  firstName: 'Finger',
  lastName: '',
  profilePic:
    'https://compote.slate.com/images/fb69a16d-7f35-4103-98c1-62d466196b9a.jpg?width=1200',
}

export const gusContact: Contact = {
  id: '2',
  firstName: 'Gus',
  lastName: 'Fring',
  profilePic:
    'https://static.wikia.nocookie.net/breakingbad/images/5/54/BCS_S3_GusFring.jpg/revision/latest?cb=20170327185354',
}

export const walterContact: Contact = {
  id: '3',
  firstName: 'Walter',
  lastName: 'White',
  profilePic:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7_zsiM5wfE2uac1B7Xk-jdVGpCKzrQqEwOaK9ak60O1iI4Don3BcWR_sOsumMQetlSw&usqp=CAU',
}

export const saulContact: Contact = {
  id: '4',
  firstName: 'Saul',
  lastName: 'Goodman',
  profilePic:
    'https://external-preview.redd.it/Af65FrXSGlwOobPUnC3MNOI1D3xCCERFWoVFfhzpgio.png?format=pjpg&auto=webp&s=ed7b1feb0f8356ba51ea70f5b26b81c1868bc005',
}

export const stanEdgarContact = {
  id: '5',
  firstName: 'Stan',
  lastName: 'Edgar',
  profilePic:
    'https://static.wikia.nocookie.net/villains/images/3/38/740full-stan-edgar.jpg/revision/latest/scale-to-width-down/250?cb=20190925225050',
}

export const skylerContact: Contact = {
  id: '6',
  firstName: 'Skyler',
  lastName: 'White',
  profilePic:
    'https://static.wikia.nocookie.net/breakingbad/images/4/40/Season_2_-_Skyler.jpg/revision/latest?cb=20090617160516',
}

export const recentContacts = [
  fingerContact,
  gusContact,
  walterContact,
  stanEdgarContact,
]

export const fingerProfile: Profile = {
  ...fingerContact,
  preferences: ['BBQ', '$-$$', 'American', 'Mexican'],
  pastPicks: [],
  recentContacts: [],
  email: 'finger@gmail.com',
  location: 'Albuquerque',
}

export const gusProfile: Profile = {
  ...gusContact,
  preferences: ['BBQ', '$-$$', 'American', 'Mexican'],
  pastPicks: [losPollosHermanos, tacoSal, loyolasFamilyRestaurant],
  recentContacts: [],
  email: 'gus@lospolloshermanos.com',
  location: 'Albuquerque',
}

export const walterProfile: Profile = {
  ...walterContact,
  preferences: ['BBQ', '$-$$', 'American', 'Mexican'],
  pastPicks: [losPollosHermanos, tacoSal, loyolasFamilyRestaurant],
  recentContacts: [],
  email: 'theonethatknocks@hotmail.com',
  location: 'Albuquerque',
}

export const saulProfile: Profile = {
  ...saulContact,
  preferences: ['BBQ', '$-$$', 'American', 'Mexican'],
  pastPicks: [losPollosHermanos, tacoSal, loyolasFamilyRestaurant],
  recentContacts: recentContacts,
  email: 'saul@bettercallsaul.net',
  location: 'Albuquerque',
}

export const stanEdgarProfile: Profile = {
  ...stanEdgarContact,
  preferences: ['BBQ', '$-$$', 'American', 'Mexican'],
  pastPicks: [losPollosHermanos, tacoSal, loyolasFamilyRestaurant],
  recentContacts: [gusContact],
  email: 'stan.edgar@vought.com',
  location: 'New York City',
}

export const skylerProfile = {
  ...skylerContact,
  preferences: ['American'],
  pastPicks: [],
  recentContacts: [],
  email: 'skyler@gmail.com',
  location: 'Albuquerque',
}

export const allUsers: Profile[] = [
  gusProfile,
  walterProfile,
  saulProfile,
  fingerProfile,
  stanEdgarProfile,
  skylerProfile,
]

export const parties = [
  {
    name: 'The boys',
    members: [gusContact, walterContact, fingerContact],
  },
  {
    name: 'SSDrink&Drive',
    members: [walterContact, saulProfile, gusContact, stanEdgarContact],
  },
  {
    name: 'My family',
    members: [walterContact, skylerContact],
  },
  {
    name: 'Whiskey Wednesday Gang',
    members: [saulProfile, walterContact],
  },
]
