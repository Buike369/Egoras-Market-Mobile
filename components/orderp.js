
import React from 'react';
import {View,Text,StyleSheet,SafeAreaView,Pressable, TextInput, TouchableOpacity} from 'react-native';
import {Ionicons } from 'react-native-vector-icons';


const OrderP =({navigation})=>{
    return(

        <SafeAreaView style={{backgroundColor:'#fff',flex:1}}>

            <View style={{backgroundColor:'#28b67d',paddingVertical:15}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
               <Pressable onPress={()=>navigation.goBack()}><Ionicons name="arrow-back-sharp" size={22}   color="#fff" style={{marginLeft:5}}/></Pressable>
              <Text style={{marginLeft:14,fontSize:16,fontWeight:'700',letterSpacing:0.1,color:'#fff'}}>Login</Text>
           </View>
           </View>
            <View >
                <Text style={{marginTop:35,paddingLeft:10,marginBottom:40,color:'#00000099',fontSize:16,fontWeight:'300'}}>Login to your account</Text>
                <View style={{flexDirection:'row',paddingHorizontal:10,alignItems:'center',marginBottom:40}}>
                     <View style={{width:'8%'}}><Ionicons name="ios-mail" size={22}   color="#28b67d"  /></View>
                     <TextInput placeholder='Email' style={styles.body}/>
                </View>
                <View style={{flexDirection:'row',paddingHorizontal:10,alignItems:'center',marginBottom:13}}>
                <View style={{width:'8%'}}><Ionicons name="md-lock-open-sharp" size={22}   color="#28b67d" /></View>
                     <TextInput placeholder='password' style={styles.body}/>
                </View>
            <View style={{alignItems:'flex-end',marginBottom:40}}><Text style={{fontSize:12,fontWeight:'400',color:'#28b67d',paddingRight:10}}>FORGOT PASSWORD?</Text></View>

           <TouchableOpacity style={{paddingHorizontal:10}}><View style={styles.body1}><Text style={{color:'#fff',fontWeight:'600'}}>LOGIN</Text></View></TouchableOpacity>


           <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:20,
        marginBottom:25}}>
               <Text style={{fontSize:11,fontWeight:'300',color:'#00000099'}}>New on Egoras Market?</Text>
               <Pressable onPress={()=>navigation.navigate('createAccount')}><Text style={{fontSize:12,color:'#3B5998',marginLeft:5,fontWeight:'500'}}>CREATE AN ACCOUNT</Text></Pressable>
           </View>
            </View>

            <View style={{paddingHorizontal:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <View style={styles.body2}></View>
                <Text> OR </Text>
                <View style={styles.body2}></View>
            </View>

            <View style={{alignItems:'center',marginTop:20}}>
           <View style={{alignItems:'center' ,flexDirection:'row'}}>
              <Ionicons name="ios-logo-facebook" size={22}   color="#3B5998" style={{marginLeft:5}}/>
               <Text style={{marginLeft:5,color:'#3B5998'}}>Continue with Facebook</Text></View>
               </View>

        </SafeAreaView>
   
    )
}


const styles = StyleSheet.create({
  body:{
      paddingVertical:10,
      borderBottomWidth:0.3,
      borderBottomColor:'#000000',
      width:'92%',
  },
  body1:{
      paddingVertical:15,
      alignItems:'center',
      backgroundColor:'#28b67d',
      borderRadius:7,
  },
  body2:{
    //   borderWidth:0.3,
    //   borderColor:'#00000099',
      width:'45%',
      height:0.2,
      backgroundColor:'#00000099'
  }
})


export default OrderP;