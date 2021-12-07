
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/home';
import Screen2 from './components/home2';
import Screen3 from './components/home19';
import Screen4 from './components/home20';
import Screen5 from './components/home26';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown:false }} />
        <Stack.Screen name="Home1" component={Screen2} options={{ headerShown:false }}  />
        <Stack.Screen name="City" component={Screen3} options={{ headerShown:false }}  />
        <Stack.Screen name="City1" component={Screen4} options={{ headerShown:false }}  />
        <Stack.Screen name="City2" component={Screen5} options={{ headerShown:false }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

