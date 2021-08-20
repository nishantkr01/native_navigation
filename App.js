import * as React from 'react';
import { View, Text, Button, StyleSheet  } from 'react-native';
import { NavigationContainer, DrawerActions, TabActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContent,
  DrawerItem,
  
} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Close from './components/Close';
import Admin from './components/Admin';
import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
import ImagePickerExample from './components/ImagePickerExample';



const Tab = createBottomTabNavigator();


const Drawer = createDrawerNavigator();
//Home Screen tab

const HomeScreenStack = createStackNavigator();

function HomeScreenStackScreen() {
  return (
    <HomeScreenStack.Navigator>
      <HomeScreenStack.Screen name="HomeScreen" component={HomeScreen} />

    </HomeScreenStack.Navigator>
  );
}

//Home Screen Tab


//Admin Screen tab

const AdminScreenStack = createStackNavigator();

function AdminScreenStackScreen() {
  return (
    <AdminScreenStack.Navigator>
      <AdminScreenStack.Screen name="Admin" component={Admin} />

    </AdminScreenStack.Navigator>
  );
}

//Admin Screen Tab


//Close Screen tab

const CloseScreenStack = createStackNavigator();

function CloseScreenStackScreen() {
  return (
    <CloseScreenStack.Navigator>
      <CloseScreenStack.Screen name="Close" component={Close} />

    </CloseScreenStack.Navigator>
  );
}

//Close Screen Tab


//Close Screen tab

const ImagePickerScreenStack = createStackNavigator();

function ImagePickerScreenStackScreen() {
  return (
    <ImagePickerScreenStack.Navigator>
      <ImagePickerScreenStack.Screen name="ImagePickerExample" component={ImagePickerExample} />

    </ImagePickerScreenStack.Navigator>
  );
}

//Close Screen Tab


//Segting Screen tab

const SettingScreenStack = createStackNavigator();

function SettingScreenStackScreen() {
  return (
    <SettingScreenStack.Navigator>
      <SettingScreenStack.Screen name="SettingsScreen" component={SettingsScreen} />

    </SettingScreenStack.Navigator>
  );
}

//Segting Screen Tab






//---------------------------------------------------------------------------------------Drawer Area





function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
    <DrawerItemList {...props} />
      {/* <DrawerItem
        label="Closecc drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      />  */}

<DrawerItem
        label="HomeScreen-drawer"
        onPress={()=> props.navigation.navigate('HomeScreen')} 
      />


<DrawerItem
        label="Admin-drawer"
        onPress={() => {
         
          props.navigation.navigate('Admin')
    
          }
        }
     
      />


<DrawerItem
        label="Close-Screen Section"
        // onPress={() => props.navigation.dispatch(DrawerActions.jumpTo('Close'))}
       onPress={()=> props.navigation.navigate('Close')} 
      />



<DrawerItem
        label="Image Picker"
        // onPress={() => props.navigation.dispatch(DrawerActions.jumpTo('ImagePickerExample'))}
        onPress={()=> props.navigation.navigate('ImagePickerExample')} 
      />

<DrawerItem
        label="Settings Picker"
        // onPress={() => props.navigation.dispatch(DrawerActions.jumpTo('SettingsScreen'))}
        onPress={()=> props.navigation.navigate('SettingsScreen')} 
      />

    </DrawerContentScrollView>
  );
}



// function MyDrawer() {
//   return (
//     <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
//       <Drawer.Screen name="Feed" component={MyTabs} />
//     </Drawer.Navigator>
//   );
// }


//---------------------------------------------------------------------------------------Drawer Area






const MyTabs = () => {
  return (
    <>
 <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'HomeScreen') {
        iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
      } else if (route.name === 'Close') {
        iconName = focused ? 'ios-information-circle': 'ios-close';
      }else if (route.name === 'Admin') {
        iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
      }else if (route.name === 'Feed') {
        iconName = focused ? 'ios-information-circle' : 'ios-list';
      }else if (route.name === 'ImagePickerExample') {
        iconName = focused ? 'ios-information-circle' : 'ios-list';
      }
      else if (route.name === 'SettingsScreen') {
        iconName = focused ? 'ios-information-circle' : 'ios-list';
      }


      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  })}
  tabBarOptions={{
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  }}

>
 {/* component={MyDrawer} */}
 {/* <Tab.Screen name="Feed" component={MyDrawer}/>   */}
    <Tab.Screen name="Home" component={HomeScreenStackScreen}/>  
  <Tab.Screen name="Admin" component={AdminScreenStackScreen} />
  <Tab.Screen name="Close" component={CloseScreenStackScreen} />
  <Tab.Screen name="ImagePickerExample" component={ImagePickerScreenStackScreen} />
  <Tab.Screen name="SettingsScreen" component={SettingScreenStackScreen} />

</Tab.Navigator>
</>
  )
 
}

export default function App() {
  return (

    

    // <NavigationContainer>
    //  <Drawer.Navigator drawerContent={props => <MyDrawer />}>

    //  <Drawer.Screen name="MyTabs" component={MyTabs} />
   


  
    // </Drawer.Navigator>

    // </NavigationContainer>

    <NavigationContainer>
<Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
<Drawer.Screen name="Feed" component={MyTabs} />
</Drawer.Navigator>
</NavigationContainer>
      
 


  );
}


