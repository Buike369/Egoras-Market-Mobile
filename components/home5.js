import React  from 'react';
import {View,Text,StyleSheet,SafeAreaView} from 'react-native';
import {Ionicons } from 'react-native-vector-icons';
import {AntDesign } from 'react-native-vector-icons';

export default function wat4(){
    return(
       <SafeAreaView>
           <View style={styles.container1}>
               <Text style={{color:'#fff',fontWeight:'700',letterSpacing:0.3,fontSize:18}}>Account</Text>
               <View style={styles.container2}>
               <Ionicons name="md-search" size={18} color="#fff" style={styles.container2}/>
                <Ionicons name="cart-outline" size={22} color="#fff" style={{marginLeft:5}} />
               </View>
           </View>

           <View style={styles.container3}>
               <View>
                   <Text style={{color:'#fff',fontWeight:'500',fontSize:14,letterSpacing:0.3}}>Welcome!</Text>
                   <Text style={{color:'#fff',fontSize:11,fontWeight:'500'}}>Enter your account</Text>
               </View>
               <View style={styles.container4}><Text style={{fontSize:10,color:'#000',letterSpacing:0.2,fontWeight:'600'}}>LOGIN</Text></View>
           </View>

           <View style={styles.container5}><AntDesign name="wallet" size={22} color="#28b67d" style={{marginLeft:5}} /><Text style={{marginLeft:15,fontSize:12,fontWeight:'400', color:"#28b67d"}}>Login to see your balance</Text></View>

           <View style={styles.container6}>
               <Text style={{fontSize:12,color:'grey',fontWeight:'600'}}>MY EGORAS MARKET ACCOUNT</Text>
           </View>
       </SafeAreaView>
    )
}

const styles =StyleSheet.create({
  container:{
      flex:1, 
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
      flexDirection:'row',
      paddingHorizontal:10,
      paddingVertical:8,
      alignItems:'center',
      justifyContent:'space-between',
      backgroundColor:'#28b67d'

  },
  container4:{
  backgroundColor:'#fff',
  paddingHorizontal:18,
  paddingVertical:15,
  borderRadius:5

  },
  container5:{
      flexDirection:'row',
      alignItems:'center',
      paddingVertical:5,
      paddingHorizontal:10,
      backgroundColor:'#fff'
  },
  container6:{
      paddingHorizontal:10,
      paddingVertical:13
  }


})