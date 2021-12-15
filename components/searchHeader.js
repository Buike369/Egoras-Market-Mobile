import React from 'react';
import {View,Text,StyleSheet,SafeAreaView,Pressable} from 'react-native';
import {Ionicons } from 'react-native-vector-icons';


const SearchHeader =(props)=>{
    return(
    
          <View style={styles.container}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <Pressable onPress={props.dats} ><Ionicons name="arrow-back-sharp" size={22} color="#fff" style={{marginLeft:5}}/></Pressable>
                 <Text style={{marginLeft:14,fontSize:16,fontWeight:'700',letterSpacing:0.1,color:'#fff'}}>{props.title}</Text>
              </View>
             <View style={{flexDirection:'row',alignItems:'center'}}>
               <Pressable onPress={()=>navigation.navigate('search')}><Ionicons name="md-search" size={18} color="#fff" /></Pressable>
                <Ionicons name="cart-outline" size={22} color="#fff" style={{marginLeft:5}}/>
                <View style={{width:14,height:14,backgroundColor:'#fff',borderRadius:100,position:'absolute',top:-4,right:-3,alignItems:'center',justifyContent:'center'}}><Text style={{fontSize:8,color:'#000'}}>{props.book}</Text></View>
              </View>
         </View>



    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#28b67d',
        paddingHorizontal:10,
        paddingVertical:12,
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:3
    },
})

export default SearchHeader;