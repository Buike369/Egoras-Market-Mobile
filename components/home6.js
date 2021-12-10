import { NavigationContainer } from '@react-navigation/native';
import React ,{useState} from 'react';
import {View,Text,StyleSheet,SafeAreaView,Platform,Modal,Alert,Pressable, TextInput,TouchableOpacity, ScrollView} from 'react-native';
import {Ionicons } from 'react-native-vector-icons';
import {AntDesign } from 'react-native-vector-icons';

export default function wat6({navigation}){
   
     const [wide3,setWide] = useState(false);
     const [open,setOpen]=useState(false);

   

    return(
        <SafeAreaView style={styles.container}>


            <Modal visible={wide3} transparent={true}  onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setWide(wide3);
        }}>
               <View style={{ flex:1,backgroundColor:'#00000099',alignitems:'center'}}>
                   <View style={{paddingTop:50,paddingHorizontal:10}}>
                        <View style={{width:'100%',height:'100%',backgroundColor:'#fff',borderRadius:5}}>
                         <View style={styles.container5}>
                          <Pressable onPress={()=>setWide(!wide3)}><Ionicons name="close-outline" size={22} color="#000000" style={{marginLeft:10}} /></Pressable>
                           <Text style={{marginLeft:30,fontSize:16,color:'#000000'}}>LIVE CHAT</Text>
                         </View>
                         
                         <View style={{paddingHorizontal:15}}>
                             <View style={{paddingVertical:15,alignItems:'center'}}>
                                 <Text style={{fontSize:12,fontWeight:'300',colr:'#000'}}>just a few things before we connect you with an expert</Text>
                             </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:30}}>
                               <View style={styles.container6}></View>
                               <View style={{alignItems:'center'}}><Ionicons name="chatbubble-ellipses" size={22} color="#28b67d"  /></View>
                               <View style={styles.container6}></View>
                            </View>
                            <TextInput placeholder="First name*" style={{paddingVertical:10,borderBottomColor:'#000',borderBottomWidth:0.2}}/>
                            <View style={{alignItems:'flex-end'}}><Text style={{fontSize:9,marginTop:9,color:'#000'}}>0</Text></View>
                            <TextInput placeholder="Last name*" style={{paddingVertical:10,borderBottomColor:'#000',borderBottomWidth:0.2}}/>
                            <View style={{alignItems:'flex-end'}}><Text style={{fontSize:9,marginTop:9,color:'#000'}}>0</Text></View>
                            <TextInput placeholder="Email" style={{paddingVertical:10,borderBottomColor:'#000',borderBottomWidth:0.2}} keyboardType="email-address"/>
                            <View style={{alignItems:'flex-end'}}><Text style={{fontSize:9,marginTop:9,color:'#000'}}>0</Text></View>

                            <Text style={{fontSize:12,marginTop:12,color:'#000000',fontWeight:'300' }}>Chat Contact Reasons*</Text>
                          <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:10,paddingBottom:5,borderBottomWidth:0.3,borderBottomColor:'#000000',alignItems:'center'}}>
                            <Pressable onPress={()=>setOpen(!open)}><Text style={{fontSize:14,fontWeight:'300',color:'#000000'}}>Select a value</Text></Pressable>
                             <Pressable onPress={()=>setOpen(!open)}><Ionicons name="caret-down" size={16} color="grey"  /></Pressable>

                             { open ?
                          <View style={{width:'80%',paddingVertical:10,backgroundColor:'#28b67d',position:'absolute',top:35,zIndex:2330,paddingHorizontal:10,borderRadius:3}} >
                              <Text style={{fontSize:13,color:'#fff',marginBottom:10,fontWeight:'500',letterSpacing:0.1}}>Select a value</Text>
                              <Text style={{fontSize:13,color:'#fff',marginBottom:10,fontWeight:'500',letterSpacing:0.1}}>Order Status</Text>
                              <Text style={{fontSize:13,color:'#fff',marginBottom:10,fontWeight:'500',letterSpacing:0.1}}>Return and refund</Text>
                              <Text style={{fontSize:13,color:'#fff',marginBottom:10,fontWeight:'500',letterSpacing:0.1}}>Payment inquiry</Text>
                              <Text style={{fontSize:13,color:'#fff',marginBottom:10,fontWeight:'500',letterSpacing:0.1}}>Order cancellation</Text>
                              <Text style={{fontSize:13,color:'#fff',marginBottom:10,fontWeight:'500',letterSpacing:0.1}}>Order placement</Text>
                              <Text style={{fontSize:13,color:'#fff',marginBottom:10,fontWeight:'500',letterSpacing:0.1}}>Product Inquiry</Text>
                              <Text style={{fontSize:13,color:'#fff',marginBottom:10,fontWeight:'500',letterSpacing:0.1}}>Others</Text>
                              
                          </View>: null
                         }
                              
                          </View>
                          
                          <TextInput placeholder="Order number" style={{paddingVertical:10,borderBottomColor:'#000',borderBottomWidth:0.2,marginTop:12}}/>
                          <View style={{alignItems:'flex-end'}}><Text style={{fontSize:9,marginTop:9,color:'#000'}}>0</Text></View>

                         </View>


                           <TouchableOpacity style={{paddingVertical:20,alignItems:'center',backgroundColor:'#28b67d',position:'absolute',bottom:0,width:'100%'}}><Text style={{fontSize:14,color:'#fff',fontWeight:'600'}}>CHAT WITH AN AGENT</Text></TouchableOpacity>
                        </View>
                  </View>
               </View>
           </Modal> 

            

    








            <View style={styles.container1}>
               <Text style={{color:'#fff',fontWeight:'700',letterSpacing:0.3,fontSize:18}}>Help</Text>
               <View style={styles.container2}>
               <Pressable onPress={()=>navigation.navigate('search')}><Ionicons name="md-search" size={18} color="#fff" style={styles.container2}/></Pressable>
                <Ionicons name="cart-outline" size={22} color="#fff" style={{marginLeft:5}} />
               </View>
           </View>


           <View style={{paddingHorizontal:10,paddingVertical:10}}>
               <Pressable style={styles.container3} onPress={()=>setWide(!wide3)}>
               <Ionicons name="ios-chatbox-ellipses-outline" size={25} color="#e4a788" style={{flex:1}} />
                   <Text style={{fontSize:12,color:'#e4a788',textAlign:'left',flex:1.5,fontWeight:'600'}}>START LIVE CHAT</Text>
               </Pressable>
               <Text style={{fontSize:11,fontWeight:"400",color:'gray'}}>ABOUT EGORAS MARKET </Text>
           </View>

       

       <View  style={{paddingHorizontal:2}}>
           <View  style={styles.container4}>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:18}}>
                  <Text style={{fontSize:14,fontWeight:'400',letterSpacing:0.1,color:'#000'}}>Egoras Market Services</Text>
                 <Pressable onPress={()=>navigation.navigate('egoras-m-services')}><AntDesign name="right" size={15} color="#grey" style={{marginLeft:5}} />
                 </Pressable>
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
    paddingVertical:15,
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
},
container5:{
    shadowColor:'#f5f3f3',
    shadowOffset:{width:0,height:2},
    shadowRadius:8,
    elevation:1,
    shadowOpacity:0.8,
    backgroundColor:'#fff',
    flexDirection:'row',paddingVertical:20
},
container6:{
    width:'45%',
    height:0.3,
    backgroundColor:'#000000'
}


})