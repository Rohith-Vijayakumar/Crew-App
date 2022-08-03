import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../screens/onBoarding';
import Login from '../screens/login';
import Signup from '../screens/signup';
import ForgotPassword from '../screens/forgotPassword';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from '../screens/homescreen';
import AboutScreen from '../screens/aboutScreen';
import ProfieScreen from '../screens/profieScreen';
import DrawerStack from './drawerStack';
import DashBoard from '../screens/Dashboard/dashBoard';
import BottomNavigator from './bottomNavigator';
import FlightScheduleDetails from '../screens/FlightScheduleDetails/FlightScheduleDetails';
import ProcessCompliance from '../screens/ProcesCompliance/ProcessCompliance';

const ScreenStack = createNativeStackNavigator();

const StackNavigation = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);

  React.useEffect(() => {
    firstLaunch();
  }, []);

  const firstLaunch = async () => {
    const appData = await AsyncStorage.getItem('isAppFirstLaunched');
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('isAppFirstLaunched', 'false');
    } else {
      setIsAppFirstLaunched(false);
    }
  };
  return (
    isAppFirstLaunched != null && (
      <NavigationContainer>
        {
          <ScreenStack.Navigator initialRouteName="onboarding">
            {isAppFirstLaunched && (
              <ScreenStack.Screen
                name="onboarding"
                component={Onboarding}
                options={{
                  headerShown: false,
                }}
              />
            )}

            <ScreenStack.Screen
              name="drawer"
              component={DrawerStack}
              options={{headerShown: false}}
            />

            <ScreenStack.Screen
              name="login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
            <ScreenStack.Screen
              name="signup"
              component={Signup}
              options={{
                headerShown: true,
              }}
            />
            <ScreenStack.Screen
              name="forgotpassword"
              component={ForgotPassword}
              options={{
                headerShown: true,
              }}
            />
            <ScreenStack.Screen
              name="Schedule Details"
              component={FlightScheduleDetails}
              options={{
                headerShown: true,
                gestureEnabled: true,
              }}
            />
            <ScreenStack.Screen
              name="Process Compliance"
              component={ProcessCompliance}
              options={{
                headerShown: true,
                gestureEnabled: true,
              }}
            />
            <ScreenStack.Screen
              name="homescreen"
              component={BottomNavigator}
              options={{
                headerShown: false,
                gestureEnabled: true,
              }}
            />
            <ScreenStack.Screen
              name="aboutscreen1"
              component={AboutScreen}
              options={{
                headerShown: true,
              }}
            />
            <ScreenStack.Screen
              name="profilecreen"
              component={ProfieScreen}
              options={{
                headerShown: true,
              }}
            />
            {/* <MyDrawer /> */}
          </ScreenStack.Navigator>
        }
        {/* <DrawerStack /> */}
      </NavigationContainer>
    )
  );
};

export default StackNavigation;
