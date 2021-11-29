import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Dimensions,Image} from 'react-native';




export default function egoras(){
    return(
        <View style={styles.container}>
           <Text>
               Mr Kingsley
           </Text>

        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

})