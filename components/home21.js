import React from 'react'; 
import {View,Text} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { TabView} from 'react-native-tab-view';
// import Boy1 from './home22';
// import Boy2 from './home23';



import Sections from './home16';
import Sections1 from './home17';
import Section2 from './home18';




const Tab = createMaterialTopTabNavigator();

function MyTabs1() {

   

  return (
    
    

       <Tab.Navigator>
        <View>
            <Text>Chukwubuike</Text>
            <Text>Chukwubuike</Text>
       </View>
      <Tab.Screen name="area" component={Sections} options={{tilte:"samp"}}/>
      <Tab.Screen name="area1" component={Sections1} options={{tilte:"samp2"}} />
      <Tab.Screen name="area2" component={Section2} options={{tilte:"samp2"}} />
    </Tab.Navigator>

  
  
  );
}




export default MyTabs1;