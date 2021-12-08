
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/home';
import Screen2 from './components/home2';
import Screen3 from './components/home19';
import Screen4 from './components/home20';
import Screen5 from './components/home26';
import Screen6 from './components/home27';
import Screen7 from './components/home28';
import Screen8 from './components/home9';
import Screen9 from './components/home30';

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
        <Stack.Screen name="City3" component={Screen6} options={{ headerShown:false }}  />
        <Stack.Screen name="City4" component={Screen7} options={{ headerShown:false }}  />
        <Stack.Screen name="City5" component={Screen8} options={{ headerShown:false }}  />
        <Stack.Screen name="City6" component={Screen9} options={{ headerShown:false }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

