
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native';

import HomeScreen from './components/home';
import Screen2 from './components/home2';
import Screen3 from './components/home19';
import Screen4 from './components/home20';
import Screen5 from './components/home26';
import Screen6 from './components/home27';
import Screen7 from './components/home28';
import Screen8 from './components/home9';
import Screen9 from './components/home30';
import Screen10 from './components/orderp';
import Screen11 from './components/createAccount';
import Screen12 from './components/search';
import Screen13 from './components/egoras_M_Services';
import Screen14 from './components/topdeals';
import Screen15 from './components/details';
// import Screen16 from './components/drawer';
// import Screen17 from './components/drawer';
import Screen18 from './components/phones';




Parse.setAsyncStorage(AsyncStorage);

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
        <Stack.Screen name="Order" component={Screen10} options={{ headerShown:false }}  />
        <Stack.Screen name="createAccount" component={Screen11} options={{ headerShown:false }}  />
        <Stack.Screen name="search" component={Screen12} options={{ headerShown:false }}  />
        <Stack.Screen name="egoras-m-services" component={Screen13} options={{ headerShown:false }}  />
        <Stack.Screen name="topdeals" component={Screen14} options={{ headerShown:false }}  />
        <Stack.Screen name="details" component={Screen15} options={{ headerShown:false }}  />
        {/* <Stack.Screen name="drawers" component={Screen16} options={{ headerShown:false }}  /> */}
        {/* <Stack.Screen name="drawers1" component={Screen17} options={{ headerShown:false }}  /> */}
        <Stack.Screen name="phonestr" component={Screen18} options={{ headerShown:false }}  />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

Parse.initialize("2xL77rlVP7laXwUxqNfFx1ZEwgT6QS2ajgov5b6w","3CPHh9K0UUgSshMqYVvBrV2uG1DF3P8foOheinVs"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/'