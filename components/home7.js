import React from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import {Ionicons } from 'react-native-vector-icons';


const Search = ()=>{
    return(
        <View style={styles.container1}>
        <View style={{paddingHorizontal:10,flexDirection:'row',alignItems:'center'}}>
           <Ionicons name="md-search" size={20} color="#808080" style={styles.container2} />
           <TextInput placeholder='search on Egoroas Market' style={{width:340,paddingVertical:15,paddingLeft:30,borderRadius:8,backgroundColor:'white'}}/>
           <Ionicons name="cart-outline" size={30} color="#fff" style={{marginLeft:5}} />
        </View>
   </View>
    )
}

const styles = StyleSheet.create({

    container1:{
        width:'100%',
        maxWidth:800,
        alignItems:'center',
      backgroundColor:'#28b67d',
        paddingVertical:5
   
    },
    container2:{
        position:'absolute',
      top:14,
      left:17,
      zIndex:3
    }

})

export default Search;