import firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';
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
const rsf = new ReduxSagaFirebase(firebase.initializeApp(config));
export default rsf;
