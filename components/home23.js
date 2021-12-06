import React from 'react';
import {View,Text,StyleSheet,SafeAreaView} from 'react-native';



const top1 =()=>{
    return(
        <SafeAreaView style={styles.container}>
        <View>
            <Text>
                Kingsley Dominic Chukwubuike
            </Text>
        </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',

    }
})

export default top1;