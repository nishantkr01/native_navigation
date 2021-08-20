
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { TextInput, Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';


// function Login(navigation) {
//   const Stack = createStackNavigator();

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>This is Login Page</Text>

//     </View>
//   );
// }
// export default Login;

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, TouchableOpacity, TriggeringView } from 'react-native';
import React,{ ElementType } from 'react';
// import * as React from 'react';
// import ImageHeaderScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import { ImageHeaderScrollView } from "react-native-image-header-scroll-view";

// import { createStackNavigator } from '@react-navigation/stack';
// import { render } from 'react-dom';

// import indianflag from '../assets/indianflag.jpeg';

// ../assets/indianflag.jpeg


const Admin = () => {

  const Stack = createStackNavigator();




    return (
      <ImageHeaderScrollView
        maxHeight={400}
        minHeight={200}
        headerImage={require("../assets/indianflag.jpeg")}
        renderForeground={() => (
          <View style={{ height: 450, justifyContent: "center", alignItems: "center" }} >
            <TouchableOpacity onPress={() => console.log("tap!!")}>
              <Text style={{ backgroundColor: "transparent" }}>Tap Me!</Text>
            </TouchableOpacity>
          </View>
        )}
      > 
        <View style={{ height: 1000 }}>
          <TouchableOpacity onHide={() => console.log("text hidden")}>
            <Text>Scroll Me!</Text>
          </TouchableOpacity>
        </View>
      </ImageHeaderScrollView> 
    );
  }


  
  
  

  
  export  default Admin