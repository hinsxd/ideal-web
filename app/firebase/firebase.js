import firebase from 'firebase';
import { reactReduxFirebase } from 'react-redux-firebase';
const prodConfig = {
  apiKey: 'AIzaSyDYxVhi_3iqBVekZwSa4XmLFIpIUaf63Pc',
  authDomain: 'idealauth.firebaseapp.com',
  databaseURL: 'https://idealauth.firebaseio.com',
  projectId: 'idealauth',
  storageBucket: '',
  messagingSenderId: '122058807878',
};
const devConfig = {
  apiKey: 'AIzaSyDYxVhi_3iqBVekZwSa4XmLFIpIUaf63Pc',
  authDomain: 'idealauth.firebaseapp.com',
  databaseURL: 'https://idealauth.firebaseio.com',
  projectId: 'idealauth',
  storageBucket: '',
  messagingSenderId: '122058807878',
};
const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

// react-redux-firebase options
const rrfConfig = {
  userProfile: 'users', // firebase root where user profiles are stored
  enableLogging: false, // enable/disable Firebase's database logging
  profileParamsToPopulate: [
    ['role:roles'], // populates user's role with matching role object from roles
  ],
};

firebase.initializeApp(config);
export const rrf = reactReduxFirebase(firebase, rrfConfig);
// const roles = {
//   admin: {
//     manageOrder: true,
//     manageUser: true,
//     addOrder: true,
//     takeOrder: true,
//   },
//   student: {
//     manageOrder: false,
//     manageUser: false,
//     addOrder: true,
//     takeOrder: true,
//   },
//   author: {
//     manageOrder: false,
//     manageUser: false,
//     addOrder: false,
//     takeOrder: true,
//   },
// };
// Object.keys(roles).map(role =>
//   firebase
//     .database()
//     .ref(`/${role}`)
//     .set(roles[role]),
// );
