import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
// import Home from '../screens/homescreen';
import AboutScreen from '../screens/aboutScreen';
import ProfileScreen from '../screens/profieScreen';
import CustomDrawer from '../components/customDrawer';
import BottomNavigator from './bottomNavigator';
// import DashBoard from '../screens/Dashboard/dashBoard';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}
      //   initialRouteName="onboarding"
    >
      <Drawer.Screen
        name="Home"
        component={BottomNavigator}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons
              name="information-circle-outline"
              size={22}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
