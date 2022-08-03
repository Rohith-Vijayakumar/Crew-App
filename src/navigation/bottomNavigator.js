import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import DashBoard from '../screens/Dashboard/dashBoard';
import Notifications from '../screens/Notifications/notifications';
import Reports from '../screens/Reports/Reports';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {Image} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {backgroundColor: 'white'},
        tabBarInactiveTintColor: 'black',
        tabBarActiveTintColor: 'green',
        // borde,
        // showIcon: true,
      }}>
      <Tab.Screen
        name="dashboard"
        component={DashBoard}
        options={{
          tabBarLabel: 'SCHEDULE',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="crewpass"
        component={DashBoard}
        options={{
          tabBarLabel: 'CREW PASS',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="drivers-license" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="sale"
        component={DashBoard}
        options={{
          tabBarLabel: 'SALE',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="line-chart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="reports"
        component={Reports}
        options={{
          tabBarLabel: 'REPORTS',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="list-alt" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'NOTIFICATIONS',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="notifications" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="more"
        component={Reports}
        options={{
          tabBarLabel: 'MORE',
          tabBarIcon: ({color, size}) => (
            <Feather name="more-horizontal" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
