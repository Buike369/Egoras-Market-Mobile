import React from 'react';
import {View,Text,StyleSheet,SafeAreaView} from 'react-native';


const top2 =()=>{
    return(
    <SafeAreaView style={styles.container}>
        <View >
            <Text>
               Chukwubuike  Kingsley Dominic
            </Text>
        </View>
    </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        justifyContent:'center'
    }
})

export default top2;