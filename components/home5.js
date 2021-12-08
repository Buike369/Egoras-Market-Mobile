import React  from 'react';
import {View,Text,StyleSheet,SafeAreaView,ScrollView} from 'react-native';
import {Ionicons } from 'react-native-vector-icons';
import {AntDesign } from 'react-native-vector-icons';
import {Feather } from 'react-native-vector-icons';
import {FontAwesome } from 'react-native-vector-icons';

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
                   <Text style={{color:'#fff',fontWeight:'600',fontSize:14,letterSpacing:0.3}}>Welcome!</Text>
                   <Text style={{color:'#fff',fontSize:11,fontWeight:'500'}}>Enter your account</Text>
               </View>
               <View style={styles.container4}><Text style={{fontSize:10,color:'#fff',letterSpacing:0.2,fontWeight:'600'}}>LOGIN</Text></View>
           </View>

           <View style={styles.container5}><AntDesign name="wallet" size={22} color="#e4a788"  /><Text style={{marginLeft:15,fontSize:12,fontWeight:'400', color:"#e4a788"}}>Login to see your balance</Text></View>



           <ScrollView showsVerticalScrollIndicator={false}>

           <View style={styles.container6}>
               <Text style={{fontSize:12,color:'grey',fontWeight:'600'}}>MY EGORAS MARKET ACCOUNT</Text>
           </View>


           <View style={{paddingHorizontal:4}}>
               <View style={styles.container7}>
                   <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
                       <View style={{flexDirection:'row',alignItems:'center'}}>
                       <Feather name="shopping-bag" size={22} color="#000"  />
                        <Text  style={{fontSize:14,fontWeight:'400',letterSpacing:0.1,marginLeft:10,color:'#000'}}>Orders</Text>
                       </View>
                       <AntDesign name="right" size={15} color="#grey"  />

                   </View>



                   <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
                       <View style={{flexDirection:'row',alignItems:'center'}}>
                       <Feather name="mail" size={22} color="#000"  />
                        <Text style={{fontSize:14,fontWeight:'400',letterSpacing:0.1,marginLeft:10,color:'#000'}}>Inbox</Text>
                       </View>
                       <AntDesign name="right" size={15} color="#grey" style={{marginLeft:5}} />
                   </View>


                   <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
                       <View style={{flexDirection:'row',alignItems:'center'}}>
                       <Feather name="twitch" size={22} color="#000"  />
                        <Text style={{fontSize:14,fontWeight:'400',letterSpacing:0.1,marginLeft:10,color:'#000'}}>Pending Reviews</Text>
                       </View>
                       <AntDesign name="right" size={15} color="#grey" style={{marginLeft:5}} />
                   </View>



                   <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
                       <View style={{flexDirection:'row',alignItems:'center'}}>
                       <Feather name="heart" size={22} color="#000"  />
                        <Text style={{fontSize:14,fontWeight:'400',letterSpacing:0.1,marginLeft:10,color:'#000'}}>Saved Items</Text>
                       </View>
                       <AntDesign name="right" size={15} color="#grey" style={{marginLeft:5}} />
                   </View>


                   <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
                       <View style={{flexDirection:'row',alignItems:'center'}}>
                       <FontAwesome name="history" size={22} color="#000"  />
                        <Text style={{fontSize:14,fontWeight:'400',letterSpacing:0.1,marginLeft:10,color:'#000'}}>Recently Searched</Text>
                       </View>
                       <AntDesign name="right" size={15} color="#grey" style={{marginLeft:5}} />
                   </View>


                   <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
                       <View style={{flexDirection:'row',alignItems:'center'}}>
                       <Feather name="shopping-bag" size={22} color="#000"  />
                        <Text style={{fontSize:14,fontWeight:'400',letterSpacing:0.1,marginLeft:10,color:'#000'}}>Recently Viewed</Text>
                       </View>
                       <AntDesign name="right" size={15} color="#grey" style={{marginLeft:5}} />
                   </View>

                   <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
                       <View style={{flexDirection:'row',alignItems:'center'}}>
                       <Feather name="shopping-bag" size={22} color="#000"  />
                        <Text style={{fontSize:14,fontWeight:'400',letterSpacing:0.1,marginLeft:10,color:'#000'}}>Egoras Market Prime</Text>
                       </View>
                       <AntDesign name="right" size={15} color="#grey" style={{marginLeft:5}} />
                   </View>

               </View>
               <View style={styles.container6}>
               <Text style={{fontSize:10,color:'grey',fontWeight:'600',letterSpacing:0.1}}>MY SETINGS</Text>
           </View>


       <View style={styles.container7}>
           <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:15}}>
               <Text style={{fontSize:14,fontWeight:'400',letterSpacing:0.1,color:'#000'}}>Details</Text>
               <AntDesign name="right" size={15} color="#grey" style={{marginLeft:5}} />
           </View>

           <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:15}}>
               <Text style={{fontSize:14,fontWeight:'400',letterSpacing:0.1,color:'#000'}}>Address book</Text>
               <AntDesign name="right" size={15} color="#grey" style={{marginLeft:5}} />
           </View>

           <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:15}}>
               <Text style={{fontSize:14,fontWeight:'400',letterSpacing:0.1,color:'#000'}}>Change Password</Text>
               <AntDesign name="right" size={15} color="#grey" style={{marginLeft:5}} />
           </View>

       </View>

       <View style={{alignItems:'center',paddingVertical:10,marginBottom:100}}>
           <View  style={styles.container8}>
               <Text style={{fontSize:12,color:'#fff',fontWeight:'600',textAlign:'center',letterSpacing:0.5}}>LOGIN</Text>
            </View>
           </View>

           </View>
           </ScrollView>
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
  backgroundColor:'#e4a788',
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
      paddingVertical:13,
      
 
  },
  container7:{
      backgroundColor:"#fff",
      paddingHorizontal:8,
      paddingVertical:15,
      borderRadius:5
  },container8:{
     paddingHorizontal:15,
     paddingVertical:10,
     backgroundColor:'#28b67d',
     borderRadius:3,
     marginTop:10,
     width:80
  }


})