import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useUserAuth} from '../context/useAuthContext';
import {SIZES} from '../constants/theme';
import {useNavigation} from '@react-navigation/native';
import {getDatabase, ref, onValue} from 'firebase/database';
// import firebase from 'firebase';
// import {getDatabase} from 'firebase/database';
// import database from '@react-native-firebase/database';

const HomeScreen = () => {
  const {logOut, user} = useUserAuth();
  const navigation = useNavigation();
  const [datas, setDatas] = React.useState([]);
  const [ids, setIds] = React.useState('');
  const db = getDatabase();
  // const users = user.uid;

  // const getdatabases = uid => {
  //   const db = getDatabase();

  //   const CountRef = ref(db, 'users/' + uid);

  //   CountRef.once('value', snap => {
  //     console.log(snap.val());
  //   });
  // };

  const getdatabases = () => {
    // var userId = user.uid;
    if (user.uid !== null) {
      return onValue(ref(db, '/users/' + user.uid), snapshot => {
        const username = snapshot.val();
        console.log('The username is', username);
      });
    } else {
      return console.log('The user id is empty');
    }
  };

  const loggedInUser = async () => {
    const db = getDatabase();
    const CountRef = ref(db, 'users/');
    onValue(CountRef, snapshot => {
      snapshot => {
        console.log('The id does not match');
      };
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map(details => {
          setDatas(olddata => [...olddata, details]);
        });
      }

      // setDatas(data);
      // console.log('The new Data is', user.email);
      // if (user.uid == data.uid) {
      //   console.log('The user Id is', user.uid, 'The data uid is ', data.uid);
      // } else {
      //   console.log('The id does not match', data.uid);
      // }
    });
  };

  React.useEffect(() => {
    // loggedInUser();
    // console.log('The Data is', datas);
    getdatabases();
  }, []);

  // const handleBack = () => {
  //   navigation.navigate('drawer');
  // };

  const handleLogout = async () => {
    try {
      await logOut();
      navigation.replace('login');
    } catch (error) {
      console.log(error.message);
    }
  };

  const loggedInUserData = () => {
    // if (user.uid === datas.userId) {
    //   setIds(user.uid);
    //   console.log('The IDs Are', ids);
    // }
    // return console.log('The UID does not match', datas.userId);
  };

  return (
    <View>
      {/* <TouchableOpacity
        onPress={handleBack}
        style={{
          padding: SIZES.base,
        }}>
        <Image source={require('../Assests/menu.png')} />
      </TouchableOpacity> */}

      <Text>Welcome j{user && user.email}</Text>
      <View style={{width: '100%'}}>
        {/* <Text
          style={([styles.textBody], {alignSelf: 'flex-end'})}
          onPress={handleLogout}>
          logOut
        </Text> */}
        <Text
          style={([styles.textBody], {alignSelf: 'flex-end'})}
          onPress={loggedInUserData}></Text>

        {/* <Text
          style={([styles.textBody], {alignSelf: 'flex-end'})}
          onPress={getdatabases(user.uid)}>
          GEtdata
        </Text> */}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBody: {
    fontFamily: 'Foundation',
    fontSize: 16,
  },
  image: {
    width: SIZES.width,
    height: SIZES.height * 0.3,
    marginVertical: 10,
  },
  texttitle: {fontFamily: 'Foundation', fontSize: 40, marginVertical: 10},
});
