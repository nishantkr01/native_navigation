import * as React from 'react';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {  Text, TextInput, View, Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';


const  SettingsScreen = () => {
  const Stack = createStackNavigator();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is Settings Page</Text>
      
    </View>
  );
}
export default SettingsScreen;