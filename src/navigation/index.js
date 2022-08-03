import React from 'react';
import StackNavigation from './stackNavigation';
import DrawerStack from './drawerStack';
import {useUserAuth} from '../context/useAuthContext';
import {NavigationContainer} from '@react-navigation/native';

const AppContainer = () => {
  const {user} = useUserAuth();

  return (
    <NavigationContainer>
      {user ? <DrawerStack /> : <StackNavigation />}
    </NavigationContainer>
  );
};

export default AppContainer;
