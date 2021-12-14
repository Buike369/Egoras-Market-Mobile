import React from 'react';
import {View,Text,StyleSheet} from 'react-native';



const drawerContent2 =()=>{
    return(

        <View style={styles.body}>
            <Text>Ave maria linus</Text>
        </View>
    )
}


const styles = StyleSheet.create({
body:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
}
})

export default drawerContent2;