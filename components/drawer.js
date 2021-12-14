import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Drawer1 from './drawerContent1';
import Drawer2 from './drawerContent1';

const Drawer = createDrawerNavigator();
const drawe2 =()=>{
    return(
        <Drawer.Navigator>
           <Drawer.Screen name="der" component={Drawer1} />
           <Drawer.Screen name="savi" component={Drawer2} />
        </Drawer.Navigator>
    )
}

export default drawe2;