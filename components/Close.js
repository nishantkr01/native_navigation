import * as React from 'react';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {  Text, TextInput, View, Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import {MyDrawer} from '../App'


const  Close = () => {
  const Stack = createStackNavigator();

  return (
    <>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is Close Page</Text>
    </View>
    </>
  );
}
export default Close;