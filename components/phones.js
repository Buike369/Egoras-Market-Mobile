
import React from 'react';
import {View,Text,StyleSheet, SafeAreaView,Pressable} from 'react-native';
import {Ionicons } from 'react-native-vector-icons';



const Phones =({navigation})=>{
    return(
        <SafeAreaView>
         {/* <View style={styles.container}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                 <Ionicons name="arrow-back-sharp" size={22} color="#fff" style={{marginLeft:5}}/>
                 <Text style={{marginLeft:14,fontSize:16,fontWeight:'700',letterSpacing:0.1,color:'#fff'}}>EGORAS Stock Sales</Text>
              </View>
             <View style={{flexDirection:'row',alignItems:'center'}}>
                <Ionicons name="md-search" size={18} color="#fff" />
                <Ionicons name="cart-outline" size={22} color="#fff" style={{marginLeft:5}}/>
              </View>
         </View> */}
        <Text>chukwubuike kingsley </Text>

        </SafeAreaView>
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


export default Phones;