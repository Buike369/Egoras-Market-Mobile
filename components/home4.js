import React,{useState}  from 'react';
import {View,Text,StyleSheet,SafeAreaView, ScrollView, Image,FlatList,Pressable} from 'react-native';
import {Ionicons } from 'react-native-vector-icons';

import Sections from './home16';
import Sections1 from './home17';
import Section2 from './home18';










export default function wat(){
    
    const [changeFlow,setChangeFlow]=useState("make");
    const [changeFlow2,setChangeFlow2]=useState(<Sections/>);

    const firm = ()=>{
        setChangeFlow("make");
        setChangeFlow2(<Sections/>)
    }


    const firm1 = ()=>{
        setChangeFlow("make1");
        setChangeFlow2(<Sections1/>)
    }

    const firm2 = ()=>{
        setChangeFlow("make2");
        setChangeFlow2(<Section2/>)
    }




// const cashItem = ({bag}) => (
//     <Car fom ={bag.txt1}/>);

    return(
        <SafeAreaView style ={styles.container}>
            <View style={styles.container2}>
                <Text style={{color:'#fff',fontWeight:'700',}}>Feed</Text>
                <View style={styles.container3}><Ionicons name="md-search" size={20} color="#fff" style={styles.container2}/>
                <Ionicons name="cart-outline" size={24} color="#fff" style={{marginLeft:5}} />
                </View>
            </View>

            <View style={styles.container4}>
              <Pressable onPress={firm}><View testID="make" style={changeFlow === "make"? [styles.container7,styles.container8]:styles.container8}><Text style={changeFlow === 'make'? [styles.container5,styles.container9]:styles.container5}>FOLLOWING</Text></View></Pressable>
               <Pressable onPress={firm1}><View testID="make1"  style={changeFlow === "make1"? [styles.container7,styles.container8]:styles.container8}><Text style={ changeFlow === 'make1'?[styles.container5,styles.container6,styles.container9]:[styles.container5,styles.container6]}>EXPLORE</Text></View></Pressable>
              <Pressable onPress={firm2}><View testID="make2"  style={changeFlow === "make2"? [styles.container7,styles.container8]: styles.container8}><Text style={ changeFlow === "make2" ? [styles.container5,styles.container6,styles.container9]:[styles.container5,styles.container6]}>BLACK FRIDAY</Text></View></Pressable>
            </View>
           
    
           {
               changeFlow2
           }

     
          
       </SafeAreaView>
    )
}

const styles =StyleSheet.create({
  container:{
      flex:1,
     
  },
  container2:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      paddingVertical:8,
      paddingHorizontal:10,
      backgroundColor:'#28b67d'
  },
container3:{
    flexDirection:'row',
    alignItems:'center'
},
container4:{
    flexDirection:'row',
    backgroundColor:'#fff',
    shadowColor:'grey',
     shadowOffset:{width:0,height:2},
     shadowRadius:8,
     elevation:1,
     shadowOpacity:0.8,
     marginBottom:8,
     zIndex:5


},
container5:{
    fontSize:11,
    fontWeight:'400',
    color:'#000',
},

container6:{
    marginLeft:10
},
container7:{
  
    borderBottomWidth:2,
    borderBottomColor:'#28b67d',
    color:'#28b67d'

},
container112:{
    paddingVertical:12,
    paddingHorizontal:5,
},
container113:{
    color:'#28b67d'
}

})