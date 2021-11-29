import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const secondBottomPage =()=>{
    return(
        <View style={styles.container}>
            <Text>Welcome MR buike</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})

export default secondBottomPage;