import React from 'react';

import {View,Text,StyleSheet,SafeAreaView,TextInput,Pressable} from 'react-native';
import {Ionicons } from 'react-native-vector-icons';

const search =({navigation})=>{
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
          <View style={{padding:5,backgroundColor:'#28b67d'}}>
              <TextInput style={{paddingVertical:10,paddingLeft:30,backgroundColor:'#fff',borderRadius:5}} selectionColor="#000" />
              <Pressable onPress={()=>navigation.goBack()} style={{position:'absolute',top:13,left:3}}><Ionicons name="arrow-back-sharp" size={22}   color="#000" style={{marginLeft:5}}/></Pressable>
          </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default search;