import React  from 'react';
import {View,Text,StyleSheet,SafeAreaView,Platform} from 'react-native';
import {Ionicons } from 'react-native-vector-icons';
import {AntDesign } from 'react-native-vector-icons';

export default function wat6(){
    return(
        <SafeAreaView style={styles.container}>

            <View style={styles.container1}>
               <Text style={{color:'#fff',fontWeight:'700',letterSpacing:0.3,fontSize:18}}>Help</Text>
               <View style={styles.container2}>
               <Ionicons name="md-search" size={18} color="#fff" style={styles.container2}/>
                <Ionicons name="cart-outline" size={22} color="#fff" style={{marginLeft:5}} />
               </View>
           </View>

           <View style={{paddingHorizontal:10,paddingVertical:10}}>
               <View style={styles.container3}>
               <Ionicons name="ios-chatbox-ellipses-outline" size={25} color="#e4a788" style={{flex:1}} />
                   <Text style={{fontSize:10,color:'#e4a788',textAlign:'left',flex:1.5,fontWeight:'600'}}>START LIVE CHAT</Text>
               </View>
               <Text style={{fontSize:11,fontWeight:"400",color:'gray'}}>ABOUT EGORAS MARKET </Text>
           </View>

       

       <View  style={{paddingHorizontal:2}}>
           <View  style={styles.container4}>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:18}}>
                  <Text style={{fontSize:14,fontWeight:'400',letterSpacing:0.1,color:'#000'}}>Egoras Market Services</Text>
                  <AntDesign name="right" size={15} color="#grey" style={{marginLeft:5}} />
              </View>

              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
                  <Text style={{fontSize:14,fontWeight:'400',letterSpacing:0.1,color:'#000'}}>Faq</Text>
                  <AntDesign name="right" size={15} color="#grey" style={{marginLeft:5}} />
              </View>
           </View>
        </View>

        <View style={{paddingHorizontal:10,paddingVertical:10}}>
            <Text style={{fontSize:11,fontWeight:"400",color:'gray'}}>SETTINGS </Text>
        </View>

        <View style={{paddingHorizontal:2}}>
            <View style={styles.container4}>
                <View style={{marginBottom:20}}><Text style={{fontSize:14,fontWeight:'400',letterSpacing:0.1,color:'#000'}}>Push Notification</Text></View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20,alignItems:'center'}}><Text style={{fontSize:14,fontWeight:'400',letterSpacing:0.1,color:'#000'}}>Country</Text><View style={{flexDirection:'row',alignItems:'center',}}><Text style={{fontSize:10,fontWeight:'400',letterSpacing:0.1,color:'#000'}}>NIGERIA</Text><AntDesign name="right" size={15} color="#grey" style={{marginLeft:5}} /></View></View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}><Text style={{fontSize:14,fontWeight:'400',letterSpacing:0.1,color:'#000'}}>Language</Text><Text style={{fontSize:10,color:'gray'}}>ENGLISH</Text></View>
            </View>
        </View>

        <View style={{paddingHorizontal:10,paddingVertical:10}}>
            <Text style={{fontSize:11,fontWeight:"400",color:'gray'}}>APP INFO</Text>
        </View>

        <View style={{paddingHorizontal:2}}>
            <View style={styles.container4}>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20,alignItems:'center'}}>
                    <Text style={{fontSize:14,fontWeight:'400',letterSpacing:0.1,color:'#000'}}>App Version 7.11.1</Text>
                    <Text style={{fontSize:10,color:'gray'}}>UP TO DATE</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{fontSize:14,fontWeight:'400',letterSpacing:0.1,color:'#000'}}>Cache Used:643KB</Text>
                    <Text style={{fontSize:10,fontWeight:'400',letterSpacing:0.1,color:'#000'}}>CLEAR</Text>
                </View>

            </View>
        </View>

        
        </SafeAreaView>
    )
}

const styles =StyleSheet.create({
  container:{
    flex:1

},
container1:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:8,
    paddingVertical:10,
    backgroundColor:'#28b67d',
    alignItems:'center'
},
container2:{
  flexDirection:'row',
  alignItems:'center'

},
container3:{
    width:'100%',
    paddingHorizontal:12,
    paddingVertical:10,
    // backgroundColor:'#e4a788',
    backgroundColor:'#cbeee0',
    flexDirection:'row',
    alignItems:'center',
    borderRadius:4,
    marginBottom:12
},
container4:{
    backgroundColor:'#fff',
    width:'100%',
    paddingHorizontal:10,
    paddingVertical:15,
    borderRadius:3
}


})