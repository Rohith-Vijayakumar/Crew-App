import {createContext, useContext, useEffect, useState} from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import {auth} from '../services/firebaseConfig';
import React from 'react';
// import db from '../services/firebaseConfig';
import {ref, set, onValue, getDatabase} from 'firebase/database';
import {useNavigation} from '@react-navigation/native';

// import {getDatabase} from 'firebase/database';
// import { async } from '@firebase/util';
// import Firebase from '../services/firebaseConfig';

const userAuthContext = createContext();

export function UserAuthContextProvider({children}) {
  const [user, setUser] = useState({});
  const [loggedInUserDetails, setLoggedInUserDetails] = useState({});
  const [error, setError] = useState('');
  // const navigation = useNavigation();

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  function addUsers(firstname, lastname, email, password, userId) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      firstnam: firstname,
      lastname: lastname,
      password: password,
      email: email,
      uid: userId,
      // profile_picture : imageUrl
    });
  }

  const getdatabases = () => {
    const db = getDatabase();
    return onValue(ref(db, '/users/' + user.uid), snapshot => {
      console.log(snapshot.val());
      const username = snapshot.val();
      // setIsLoading(false);
      setLoggedInUserDetails(username);
      // setIsLoading(false);
      console.log('The logged in details');
    });
  };

  useEffect(() => {
    // getdatabases();

    const subscribe = onAuthStateChanged(auth, currentuser => {
      // console.log('Auth', currentuser);
      if (currentuser !== null) {
        console.log('The user is logged IN');
        setUser(currentuser);
        // getdatabases();
        // getdatabases();

        console.log('Auth email is', currentuser.email);
      } else {
        console.log('the user is loggout');
        setUser('loggedout');
        // getdatabases();
      }

      // if (user !== null) {
      //   user.providerData.forEach(profile => {
      //     // console.log("Sign-in provider: " + profile.providerId);
      //     console.log('  Provider-specific UID: ' + profile.uid);
      //     // console.log("  Name: " + profile.displayName);
      //     console.log('  Email: ' + profile.email);
      //     // console.log("  Photo URL: " + profile.photoURL);
      //   });
    });

    return () => {
      subscribe();
      // getDatabase();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        user,
        logIn,
        signUp,
        logOut,
        googleSignIn,
        addUsers,
        loggedInUserDetails,
      }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
