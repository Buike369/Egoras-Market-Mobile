import React,{useState}from 'react';
// import {View,Text,StyleSheet,Image,ScrollView,} from 'react-native';
import {Feather } from 'react-native-vector-icons';
import {View,Text,StyleSheet,SafeAreaView, ScrollView, Image,FlatList,Pressable, TouchableOpacity,} from 'react-native';
import {Ionicons } from 'react-native-vector-icons';
import { NavigationContainer } from '@react-navigation/native';



const Section =({navigation})=>{

   
    return(

        <View >

        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={{alignItems:'center'}}>

            <Image source={require('../assets/Gr4.png')} resizeMode='contain' style={{width:130,height:130,marginTop:30,marginBottom:20}}/>
            <Text style={{paddingHorizontal:10,fontSize:15,color:'#000',textAlign:'center',fontWeight:'500',marginBottom:15}}>Please sign in to accesss updates from your favourite seller</Text>
            <Text style={{fontSize:12,fontWeight:'300',color:'#000000',textAlign:'center',textAlign:'center',paddingHorizontal:10,letterSpacing:0.1}}>You will receive daily notifications about the sellers that you follow and our most popular seller.</Text>
           
        
           </View>

           <TouchableOpacity onPress={()=>navigation.navigate('Order')} style={{paddingHorizontal:10,marginTop:30}}><View style={{width:'100%',paddingVertical:15,alignItems:'center',borderRadius:5,backgroundColor:'#28b67d'}}><Text style={{color:'#fff',fontWeight:'500'}}>SIGN IN</Text></View></TouchableOpacity>
         </ScrollView>
       </View>

    )
}


const styles=StyleSheet.create({

  

});


export default Section;

