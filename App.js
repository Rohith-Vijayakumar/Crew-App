// In App.js in a new project

import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {UserAuthContextProvider} from './src/context/useAuthContext';
import DrawerStack from './src/navigation/drawerStack';

import Navigation from './src/navigation/stackNavigation';

function App() {
  return (
    <SafeAreaView style={styles.root}>
      <UserAuthContextProvider>
        <Navigation />
        {/* 
        <NavigationContainer>
          <DrawerStack />
        </NavigationContainer> */}
      </UserAuthContextProvider>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
