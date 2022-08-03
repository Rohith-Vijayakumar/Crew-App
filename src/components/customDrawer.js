import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useUserAuth} from '../context/useAuthContext';
import {useNavigation} from '@react-navigation/native';
import {getDatabase, ref, onValue} from 'firebase/database';

const CustomDrawer = props => {
  const {logOut, user, loggedInUserDetails} = useUserAuth();
  let [isLoading, setIsLoading] = React.useState(true);
  let [error, setError] = React.useState();
  let [response, setResponse] = React.useState();
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await logOut();
      navigation.replace('login');
    } catch (error) {
      console.log(error.message);
    }
  };

  const getdatabases = () => {
    const db = getDatabase();
    return onValue(ref(db, '/users/' + user.uid), snapshot => {
      console.log(snapshot.val());
      const username = snapshot.val();
      setIsLoading(false);
      setResponse(username);
      setIsLoading(false);
      console.log('The username from Dashboard', response);
    });
  };

  React.useEffect(() => {
    // fetch('https://crew-ad9e7-default-rtdb.firebaseio.com/users.json')
    //   .then(res => res.json())
    //   .then(
    //     result => {
    //       setIsLoading(false);
    //       setResponse(result);
    //     },
    //     error => {
    //       setIsLoading(false);
    //       setError(error);
    //     },
    //   );
    getdatabases();
  }, []);

  const getContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" />;
    }

    if (error) {
      return <Text>{error}</Text>;
    }

    console.log(response);
    return (
      <View>
        <ImageBackground style={{padding: 30}}>
          <Image
            source={require('../Assests/userProfile.png')}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
            {/* {response.firstnam} */}
          </Text>
          <View style={{flexDirection: 'row'}}></View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
        <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
          <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="share-social-outline" size={22} />
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Roboto-Medium',
                  marginLeft: 5,
                }}>
                Tell a Friend
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleLogout}
            style={{paddingVertical: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="exit-outline" size={22} />
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Roboto-Medium',
                  marginLeft: 5,
                }}>
                Sign Out
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* <Text>{response.email}</Text> */}
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#ffff'}}>
        {getContent()}
      </DrawerContentScrollView>
      {/* <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#8200d6'}}>
        <ImageBackground style={{padding: 30}}>
          <Image
            source={require('../Assests/userProfile.png')}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
            {user.email}
          </Text>
          <View style={{flexDirection: 'row'}}></View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View> */}
      {/* {getContent()} */}
    </View>
  );
};

export default CustomDrawer;
