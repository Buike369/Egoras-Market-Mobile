import React from 'react';
import {View,Text,StyleSheet,SafeAreaView} from 'react-native';
import Soap from './home24';
import {Ionicons } from 'react-native-vector-icons';


const Sam = ()=>{
    return(

        <SafeAreaView style ={styles.container}>
       
            <View style={styles.container2}>
                 <Text style={{color:'#fff',fontWeight:'700',}}>Feed</Text>
                 <View style={styles.container3}><Ionicons name="md-search" size={20} color="#fff" style={styles.container2}/>
                <Ionicons name="cart-outline" size={24} color="#fff" style={{marginLeft:5}} />
              </View>
           </View>
           <Soap/>
      
      </SafeAreaView>
        
    )
}


const styles = StyleSheet.create({
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

})


export default Sam;