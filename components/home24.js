import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Screen1 from './home16';
import Screen2 from './home17';
import Screen3 from './home18';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
   
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12 ,},
          tabBarItemStyle: { width: 120 
      },
          tabBarStyle: {backgroundColor:'#fff',
          shadowColor:'grey',
           shadowOffset:{width:0,height:2},
           shadowRadius:8,
           elevation:1,
           shadowOpacity:0.8,
           marginBottom:8,
           zIndex:5 },
          
        }}
      >
        <Tab.Screen name="FOLLOWING" component={Screen1} options={{ tabBarActiveTintColor:'green',tabBarInactiveTintColor:'#000'}}/>
        <Tab.Screen name="EXPLORE" component={Screen2} options={{ tabBarActiveTintColor:'green',tabBarInactiveTintColor:'#000'}}/>
        <Tab.Screen name="BLACK FRIDAY" component={Screen3} options={{ tabBarActiveTintColor:'green',tabBarInactiveTintColor:'#000'}}/>
      </Tab.Navigator>
 
  );
}