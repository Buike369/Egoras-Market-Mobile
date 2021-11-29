import React from 'react';
import {View,Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons } from 'react-native-vector-icons';
import Fold from './home1';
import Fold1 from './home8';
import Fold2 from './home4';
import Fold3 from './home5';
import Fold4 from './home6';



const Tab = createBottomTabNavigator();

export default function book(){
    return(
        <Tab.Navigator>
        <Tab.Screen name="Home10" component={Fold} options={{headerShown:false ,tabBarLabel:'Home',tabBarLabelStyle:{color:'#28b67d',fontSize:12}, tabBarIcon: () => (
            <Ionicons name="home" color='#28b67d' size={20} />
          ),}}/>
        <Tab.Screen name="Home11" component={Fold1} options={{headerShown:false,tabBarLabel:'Categories',tabBarLabelStyle:{color:'#28b67d',fontSize:12},tabBarIcon: () => (
            <Ionicons name="ios-list-circle-outline" color='#28b67d' size={25} />
          ),}}/>
        <Tab.Screen name="Home12" component={Fold2} options={{headerShown:false,tabBarLabel:'Feed',tabBarLabelStyle:{color:'#28b67d',fontSize:12 },tabBarIcon: () => (
            <Ionicons name="md-reader-outline" color='#28b67d' size={22} />
          ),}}/>
        <Tab.Screen name="Home13" component={Fold3} options={{headerShown:false,tabBarLabel:'Account',tabBarLabelStyle:{color:'#28b67d',fontSize:12},tabBarIcon: () => (
            <Ionicons name="ios-person-outline" color='#28b67d' size={22} />
          ), }}/>
        <Tab.Screen name="Home14" component={Fold4} options={{headerShown:false,tabBarLabel:'Help',tabBarLabelStyle:{color:'#28b67d',fontSize:12 },tabBarIcon: () => (
            <Ionicons name="help-circle-outline" color='#28b67d' size={25} />
          ),}}/>
      </Tab.Navigator>
    )
}
