import React  from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default function wat(){
    return(
        <View style ={styles.container}>
            <Text>
               Dominic Chukwubuike
            </Text>
        </View>
    )
}

const styles =StyleSheet.create({
  container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
  }


})