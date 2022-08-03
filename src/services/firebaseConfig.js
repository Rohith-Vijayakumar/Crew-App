// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';
// import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB2VBmbafcdJR4QOxwbdhu4-Wr6Qz4wK88',
  authDomain: 'crew-ad9e7.firebaseapp.com',
  projectId: 'crew-ad9e7',
  storageBucket: 'crew-ad9e7.appspot.com',
  messagingSenderId: '684266181735',
  appId: '1:684266181735:web:c7efc87137c37330aa70c2',
  databaseURL: 'https://crew-ad9e7-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
// export const Firebase = firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
export default app;
