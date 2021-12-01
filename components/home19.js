import React from 'react';
import {View,Text,StyleSheet,Image,SafeAreaView, Pressable, ScrollView} from 'react-native';
import {Ionicons } from 'react-native-vector-icons';

const SectionHomeView1=({navigation})=>{

    const homeBack =()=>{
        navigation.goBack()
    }
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Pressable onPress={homeBack}><Ionicons name="arrow-back-sharp" size={22} color="#fff" style={{marginLeft:5}}/></Pressable>
                    <Text style={{marginLeft:14,fontSize:16,fontWeight:'700',letterSpacing:0.1,color:'#fff'}}>Edifier Store</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Ionicons name="md-search" size={18} color="#fff" style={styles.container2}/>
                    <Ionicons name="cart-outline" size={22} color="#fff" style={{marginLeft:5}}/>
                </View>
            </View>


            <ScrollView>
            <Image source={require('../assets/wedem.jpg')} style={{height:130,width:'100%',backgroundColor:'#cbeee0'}} resizeMode='contain'/>


      <View style={{paddingHorizontal:4}}>
         <View style={{backgroundColor:'#fff',}}>
             <Text style={{paddingTop:8,color:'#000',fontWeight:'500',letterSpacing:0.2,paddingLeft:5,paddingBottom:15}}>Top Deals</Text>

             <ScrollView horizontal>
             <View style={styles.container1} >
                 <View style={{paddingHorizontal:8,marginTop:10}}>
                    <Image source={require('../assets/pro1.jpg')} style={{width:140,height:140,marginBottom:20}} rezizeMode="contain"/>
                    <View style={{paddingVertical:5,paddingHorizontal:5,position:'absolute',top:-8,right:-10,backgroundColor:'#cbeee0',borderRadius:3}}><Text style={{fontSize:11,color:'red'}}>-48%</Text></View>
                  </View>
                <Text style={{fontSize:10,marginBottom:8,fontWeight:'400',letterSpacing:0.1,color:'#000'}}>TWS1 PRO True Wireless..</Text>
                <Text>₦ 15,490</Text>
               
             </View>

             <View style={styles.container1} >
                 <View style={{paddingHorizontal:8,marginTop:10}}>
                    <Image source={require('../assets/pro1.jpg')} style={{width:140,height:140,marginBottom:20}} rezizeMode="contain"/>
                    <View style={{paddingVertical:5,paddingHorizontal:5,position:'absolute',top:-8,right:-10,backgroundColor:'#cbeee0',borderRadius:3}}><Text style={{fontSize:11,color:'red'}}>-48%</Text></View>
                  </View>
                <Text style={{fontSize:10,marginBottom:8,fontWeight:'400',letterSpacing:0.1,color:'#000'}}>TWS1 PRO True Wireless..</Text>
                <Text>₦ 15,490</Text>
               
             </View>

             <View style={styles.container1} >
                 <View style={{paddingHorizontal:8,marginTop:10}}>
                    <Image source={require('../assets/pro1.jpg')} style={{width:140,height:140,marginBottom:20}} rezizeMode="contain"/>
                    <View style={{paddingVertical:5,paddingHorizontal:5,position:'absolute',top:-8,right:-10,backgroundColor:'#cbeee0',borderRadius:3}}><Text style={{fontSize:11,color:'red'}}>-48%</Text></View>
                  </View>
                <Text style={{fontSize:10,marginBottom:8,fontWeight:'400',letterSpacing:0.1,color:'#000'}}>TWS1 PRO True Wireless..</Text>
                <Text>₦ 15,490</Text>
             </View>

             <View style={styles.container1} >
                 <View style={{paddingHorizontal:8,marginTop:10}}>
                    <Image source={require('../assets/pro1.jpg')} style={{width:140,height:140,marginBottom:20}} resizeMode="contain"/>
                    <View style={{paddingVertical:5,paddingHorizontal:5,position:'absolute',top:-8,right:-10,backgroundColor:'#cbeee0',borderRadius:3}}><Text style={{fontSize:11,color:'red'}}>-48%</Text></View>
                  </View>
                <Text style={{fontSize:10,marginBottom:8,fontWeight:'400',letterSpacing:0.1,color:'#000'}}>TWS1 PRO True Wireless..</Text>
                <Text>₦ 15,490</Text>
             </View>

             <View style={styles.container1} >
                 <View style={{paddingHorizontal:8,marginTop:10}}>
                    <Image source={require('../assets/pro1.jpg')} style={{width:140,height:140,marginBottom:20}} resizeMode="contain"/>
                    <View style={{paddingVertical:5,paddingHorizontal:5,position:'absolute',top:-8,right:-10,backgroundColor:'#cbeee0',borderRadius:3}}><Text style={{fontSize:11,color:'red'}}>-48%</Text></View>
                  </View>
                <Text style={{fontSize:10,marginBottom:8,fontWeight:'400',letterSpacing:0.1,color:'#000'}}>TWS1 PRO True Wireless..</Text>
                <Text>₦ 15,490</Text>
               
             </View>

             <View style={styles.container1} >
                 <View style={{paddingHorizontal:8,marginTop:10}}>
                    <Image source={require('../assets/pro1.jpg')} style={{width:140,height:140,marginBottom:20}} resizeMode="contain"/>
                    <View style={{paddingVertical:5,paddingHorizontal:5,position:'absolute',top:-8,right:-10,backgroundColor:'#cbeee0',borderRadius:3,}}><Text style={{fontSize:11,color:'red'}}>-48%</Text></View>
                  </View>
                <Text style={{fontSize:10,marginBottom:8,fontWeight:'400',letterSpacing:0.1,color:'#000'}}>TWS1 PRO True Wireless..</Text>
                <Text>₦ 15,490</Text>
               
             </View>
             <View style={styles.container1} >
                 <View style={{paddingHorizontal:8,marginTop:10}}>
                    <Image source={require('../assets/pro1.jpg')} style={{width:140,height:140,marginBottom:20}} resizeMode="contain"/>
                    <View style={{paddingVertical:5,paddingHorizontal:5,position:'absolute',top:-8,right:-10,backgroundColor:'#cbeee0',borderRadius:3}}><Text style={{fontSize:11,color:'red'}}>-48%</Text></View>
                  </View>
                <Text style={{fontSize:10,marginBottom:8,fontWeight:'400',letterSpacing:0.1,color:'#000'}}>TWS1 PRO True Wireless..</Text>
                <Text style={{fontWeight:'500',fontSize:14,letterSpacing:0.1,color:'#000'}}>₦ 15,490</Text>
               
             </View>
             </ScrollView>
         </View>
         </View>

         <View style={styles.container2}>

             <View style={{width:'10%',paddingRight:3,borderRightWidth:1,borderRightColor:'#fff',paddingVertical:10}}>
                 <Ionicons name="business" size={22} color="#fff" />
             </View>
             <View style={{width:'45%',flexDirection:'row',alignItems:'center',paddingRight:4,borderRightWidth:1,borderRightColor:'#fff',paddingVertical:10,justifyContent:'flex-end'}}>
                  <Text style={{fontSize:14,color:'#fff',fontWeight:'600'}}>POPULARITY</Text>
                  <Ionicons name="chevron-down-outline" size={22} color="#fff" style={{marginLeft:20}}/>
            </View>
             <View style={{width:'45%',paddingVertical:10,alignItems:'center'}}>
                 <Text style={{color:'#fff',fontSize:'14',fontWeight:'600'}}>FILTERS</Text>
             </View>
         </View>




         
       <View style={{alignItems:'center',marginBottom:7,marginTop:8}}>
       <View style={{flexDirection:'row',width:'96%',justifyContent:'space-between'}}>
           <View style={styles.container21}>
               <View style={{alignItems:'center',marginBottom:10}}>
                   <Image source={require('../assets/col.jpg')} style={{width:150,height:150}} resizeMode='contain'/>
                   <Ionicons name="heart-outline" size={20} color="#28b67d" style={{position:'absolute',bottom:0,left:0}}/>
               </View>
               <Text style={{position:'absolute',fontSize:10,padding:3,backgroundColor:'black',color:'#fff',top:7,left:5,fontWeight:"500",letterSpacing:0.2}}>Black Friday Deals</Text>
               <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
               <Text styles={{fontWeight:'400',marginBottom:3}}>₦3,750</Text>
               <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text  style={styles.container22}>-54%</Text></View>

               <View style={{flexDirection:'row',marginTop:5,alignItems:'center',marginBottom:5}}>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" /> 
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-half-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Text style={{fontSize:10,color:'gray',marginLeft:4}}>(1073)</Text>
               </View>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Text style={{fontSize:13}}>EGORAS_M</Text>
                   <Ionicons name="paper-plane-sharp" size={12} color="#28b67d" style={{marginLeft:4}}/>
                   <Text style={{fontSize:13,marginLeft:3,color:'#28b67d'}}>EXPRESS</Text>
               </View>
               <View style={{flexDirection:'row'}}><Text style={{fontSize:10,fontWeight:'400'}}>Eligible for </Text><Text style={{marginLeft:4,fontSize:10,fontWeight:'700',letterSpacing:0.1}}>Free Shipping</Text></View>
              <View style={styles.container4}>
                  <Text style={{color:'#fff',fontSize:12,fontWeight:'700'}}>ADD TO CART</Text>
              </View>
           </View>
           <View style={styles.container21}>
              <View style={{alignItems:'center',marginBottom:10}}>
                 <Image source={require('../assets/col.jpg')} style={{width:150,height:150}} resizeMode='contain'/>
                 <Ionicons name="heart-outline" size={20} color="#28b67d" style={{position:'absolute',bottom:0,left:0}}/>
              </View>
              <Text style={{position:'absolute',fontSize:10,padding:3,backgroundColor:'black',color:'#fff',top:7,left:5,fontWeight:"500",letterSpacing:0.2}}>Black Friday Deals</Text>
              <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
              <Text styles={{fontWeight:'400',marginBottom:3}}>₦2,750</Text>
              <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text style={styles.container22}>-54%</Text></View>

              <View style={{flexDirection:'row',marginTop:5,alignItems:'center',marginBottom:5}}>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" /> 
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-half-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Text style={{fontSize:10,color:'gray',marginLeft:4}}>(1073)</Text>
               </View>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Text style={{fontSize:13}}>EGORAS_M</Text>
                   <Ionicons name="paper-plane-sharp" size={12} color="#28b67d" style={{marginLeft:4}}/>
                   <Text style={{fontSize:13,marginLeft:3,color:'#28b67d'}}>EXPRESS</Text>
               </View>
               <View style={{flexDirection:'row'}}><Text style={{fontSize:10,fontWeight:'400'}}>Eligible for </Text><Text style={{marginLeft:4,fontSize:10,fontWeight:'700',letterSpacing:0.1}}>Free Shipping</Text></View>
              <View style={styles.container4}>
                  <Text style={{color:'#fff',fontSize:12,fontWeight:'700'}}>ADD TO CART</Text>
              </View>
           </View>
       </View>
       </View>

       <View style={{alignItems:'center',marginBottom:7}}>
       <View style={{flexDirection:'row',width:'96%',justifyContent:'space-between'}}>
           <View style={styles.container21}>
               <View style={{alignItems:'center',marginBottom:10}}>
                   <Image source={require('../assets/col.jpg')} style={{width:150,height:150}} resizeMode='contain'/>
                   <Ionicons name="heart-outline" size={20} color="#28b67d" style={{position:'absolute',bottom:0,left:0}}/>
               </View>
               <Text style={{position:'absolute',fontSize:10,padding:3,backgroundColor:'black',color:'#fff',top:7,left:5,fontWeight:"500",letterSpacing:0.2}}>Black Friday Deals</Text>
               <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
               <Text styles={{fontWeight:'400',marginBottom:3}}>₦3,750</Text>
               <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text  style={styles.container22}>-54%</Text></View>

               <View style={{flexDirection:'row',marginTop:5,alignItems:'center',marginBottom:5}}>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" /> 
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-half-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Text style={{fontSize:10,color:'gray',marginLeft:4}}>(1073)</Text>
               </View>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Text style={{fontSize:13}}>EGORAS_M</Text>
                   <Ionicons name="paper-plane-sharp" size={12} color="#28b67d" style={{marginLeft:4}}/>
                   <Text style={{fontSize:13,marginLeft:3,color:'#28b67d'}}>EXPRESS</Text>
               </View>
               <View style={{flexDirection:'row'}}><Text style={{fontSize:10,fontWeight:'400'}}>Eligible for </Text><Text style={{marginLeft:4,fontSize:10,fontWeight:'700',letterSpacing:0.1}}>Free Shipping</Text></View>
              <View style={styles.container4}>
                  <Text style={{color:'#fff',fontSize:12,fontWeight:'700'}}>ADD TO CART</Text>
              </View>
           </View>
           <View style={styles.container21}>
              <View style={{alignItems:'center',marginBottom:10}}>
                 <Image source={require('../assets/col.jpg')} style={{width:150,height:150}} resizeMode='contain'/>
                 <Ionicons name="heart-outline" size={20} color="#28b67d" style={{position:'absolute',bottom:0,left:0}}/>
              </View>
              <Text style={{position:'absolute',fontSize:10,padding:3,backgroundColor:'black',color:'#fff',top:7,left:5,fontWeight:"500",letterSpacing:0.2}}>Black Friday Deals</Text>
              <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
              <Text styles={{fontWeight:'400',marginBottom:3}}>₦2,750</Text>
              <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text style={styles.container22}>-54%</Text></View>

              <View style={{flexDirection:'row',marginTop:5,alignItems:'center',marginBottom:5}}>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" /> 
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-half-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Text style={{fontSize:10,color:'gray',marginLeft:4}}>(1073)</Text>
               </View>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Text style={{fontSize:13}}>EGORAS_M</Text>
                   <Ionicons name="paper-plane-sharp" size={12} color="#28b67d" style={{marginLeft:4}}/>
                   <Text style={{fontSize:13,marginLeft:3,color:'#28b67d'}}>EXPRESS</Text>
               </View>
               <View style={{flexDirection:'row'}}><Text style={{fontSize:10,fontWeight:'400'}}>Eligible for </Text><Text style={{marginLeft:4,fontSize:10,fontWeight:'700',letterSpacing:0.1}}>Free Shipping</Text></View>
              <View style={styles.container4}>
                  <Text style={{color:'#fff',fontSize:12,fontWeight:'700'}}>ADD TO CART</Text>
              </View>
           </View>
       </View>
       </View>

       <View style={{alignItems:'center',marginBottom:7}}>
       <View style={{flexDirection:'row',width:'96%',justifyContent:'space-between'}}>
           <View style={styles.container21}>
               <View style={{alignItems:'center',marginBottom:10}}>
                   <Image source={require('../assets/col.jpg')} style={{width:150,height:150}} resizeMode='contain'/>
                   <Ionicons name="heart-outline" size={20} color="#28b67d" style={{position:'absolute',bottom:0,left:0}}/>
               </View>
               <Text style={{position:'absolute',fontSize:10,padding:3,backgroundColor:'black',color:'#fff',top:7,left:5,fontWeight:"500",letterSpacing:0.2}}>Black Friday Deals</Text>
               <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
               <Text styles={{fontWeight:'400',marginBottom:3}}>₦3,750</Text>
               <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text  style={styles.container22}>-54%</Text></View>

               <View style={{flexDirection:'row',marginTop:5,alignItems:'center',marginBottom:5}}>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" /> 
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-half-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Text style={{fontSize:10,color:'gray',marginLeft:4}}>(1073)</Text>
               </View>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Text style={{fontSize:13}}>EGORAS_M</Text>
                   <Ionicons name="paper-plane-sharp" size={12} color="#28b67d" style={{marginLeft:4}}/>
                   <Text style={{fontSize:13,marginLeft:3,color:'#28b67d'}}>EXPRESS</Text>
               </View>
               <View style={{flexDirection:'row'}}><Text style={{fontSize:10,fontWeight:'400'}}>Eligible for </Text><Text style={{marginLeft:4,fontSize:10,fontWeight:'700',letterSpacing:0.1}}>Free Shipping</Text></View>
              <View style={styles.container4}>
                  <Text style={{color:'#fff',fontSize:12,fontWeight:'700'}}>ADD TO CART</Text>
              </View>
           </View>
           <View style={styles.container21}>
              <View style={{alignItems:'center',marginBottom:10}}>
                 <Image source={require('../assets/col.jpg')} style={{width:150,height:150}} resizeMode='contain'/>
                 <Ionicons name="heart-outline" size={20} color="#28b67d" style={{position:'absolute',bottom:0,left:0}}/>
              </View>
              <Text style={{position:'absolute',fontSize:10,padding:3,backgroundColor:'black',color:'#fff',top:7,left:5,fontWeight:"500",letterSpacing:0.2}}>Black Friday Deals</Text>
              <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
              <Text styles={{fontWeight:'400',marginBottom:3}}>₦2,750</Text>
              <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text style={styles.container22}>-54%</Text></View>

              <View style={{flexDirection:'row',marginTop:5,alignItems:'center',marginBottom:5}}>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" /> 
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-half-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Text style={{fontSize:10,color:'gray',marginLeft:4}}>(1073)</Text>
               </View>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Text style={{fontSize:13}}>EGORAS_M</Text>
                   <Ionicons name="paper-plane-sharp" size={12} color="#28b67d" style={{marginLeft:4}}/>
                   <Text style={{fontSize:13,marginLeft:3,color:'#28b67d'}}>EXPRESS</Text>
               </View>
               <View style={{flexDirection:'row'}}><Text style={{fontSize:10,fontWeight:'400'}}>Eligible for </Text><Text style={{marginLeft:4,fontSize:10,fontWeight:'700',letterSpacing:0.1}}>Free Shipping</Text></View>
              <View style={styles.container4}>
                  <Text style={{color:'#fff',fontSize:12,fontWeight:'700'}}>ADD TO CART</Text>
              </View>
           </View>
       </View>
       </View>



       <View style={{alignItems:'center',marginBottom:7}}>
       <View style={{flexDirection:'row',width:'96%',justifyContent:'space-between'}}>
           <View style={styles.container21}>
               <View style={{alignItems:'center',marginBottom:10}}>
                   <Image source={require('../assets/col.jpg')} style={{width:150,height:150}} resizeMode='contain'/>
                   <Ionicons name="heart-outline" size={20} color="#28b67d" style={{position:'absolute',bottom:0,left:0}}/>
               </View>
               <Text style={{position:'absolute',fontSize:10,padding:3,backgroundColor:'black',color:'#fff',top:7,left:5,fontWeight:"500",letterSpacing:0.2}}>Black Friday Deals</Text>
               <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
               <Text styles={{fontWeight:'400',marginBottom:3}}>₦3,750</Text>
               <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text  style={styles.container22}>-54%</Text></View>

               <View style={{flexDirection:'row',marginTop:5,alignItems:'center',marginBottom:5}}>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" /> 
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-half-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Text style={{fontSize:10,color:'gray',marginLeft:4}}>(1073)</Text>
               </View>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Text style={{fontSize:13}}>EGORAS_M</Text>
                   <Ionicons name="paper-plane-sharp" size={12} color="#28b67d" style={{marginLeft:4}}/>
                   <Text style={{fontSize:13,marginLeft:3,color:'#28b67d'}}>EXPRESS</Text>
               </View>
               <View style={{flexDirection:'row'}}><Text style={{fontSize:10,fontWeight:'400'}}>Eligible for </Text><Text style={{marginLeft:4,fontSize:10,fontWeight:'700',letterSpacing:0.1}}>Free Shipping</Text></View>
              <View style={styles.container4}>
                  <Text style={{color:'#fff',fontSize:12,fontWeight:'700'}}>ADD TO CART</Text>
              </View>
           </View>
           <View style={styles.container21}>
              <View style={{alignItems:'center',marginBottom:10}}>
                 <Image source={require('../assets/col.jpg')} style={{width:150,height:150}} resizeMode='contain'/>
                 <Ionicons name="heart-outline" size={20} color="#28b67d" style={{position:'absolute',bottom:0,left:0}}/>
              </View>
              <Text style={{position:'absolute',fontSize:10,padding:3,backgroundColor:'black',color:'#fff',top:7,left:5,fontWeight:"500",letterSpacing:0.2}}>Black Friday Deals</Text>
              <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
              <Text styles={{fontWeight:'400',marginBottom:3}}>₦2,750</Text>
              <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text style={styles.container22}>-54%</Text></View>

              <View style={{flexDirection:'row',marginTop:5,alignItems:'center',marginBottom:5}}>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" /> 
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-half-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Text style={{fontSize:10,color:'gray',marginLeft:4}}>(1073)</Text>
               </View>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Text style={{fontSize:13}}>EGORAS_M</Text>
                   <Ionicons name="paper-plane-sharp" size={12} color="#28b67d" style={{marginLeft:4}}/>
                   <Text style={{fontSize:13,marginLeft:3,color:'#28b67d'}}>EXPRESS</Text>
               </View>
               <View style={{flexDirection:'row'}}><Text style={{fontSize:10,fontWeight:'400'}}>Eligible for </Text><Text style={{marginLeft:4,fontSize:10,fontWeight:'700',letterSpacing:0.1}}>Free Shipping</Text></View>
              <View style={styles.container4}>
                  <Text style={{color:'#fff',fontSize:12,fontWeight:'700'}}>ADD TO CART</Text>
              </View>
           </View>
       </View>
       </View>


       <View style={{alignItems:'center',marginBottom:7}}>
       <View style={{flexDirection:'row',width:'96%',justifyContent:'space-between'}}>
           <View style={styles.container21}>
               <View style={{alignItems:'center',marginBottom:10}}>
                   <Image source={require('../assets/col.jpg')} style={{width:150,height:150}} resizeMode='contain'/>
                   <Ionicons name="heart-outline" size={20} color="#28b67d" style={{position:'absolute',bottom:0,left:0}}/>
               </View>
               <Text style={{position:'absolute',fontSize:10,padding:3,backgroundColor:'black',color:'#fff',top:7,left:5,fontWeight:"500",letterSpacing:0.2}}>Black Friday Deals</Text>
               <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
               <Text styles={{fontWeight:'400',marginBottom:3}}>₦3,750</Text>
               <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text  style={styles.container22}>-54%</Text></View>

               <View style={{flexDirection:'row',marginTop:5,alignItems:'center',marginBottom:5}}>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" /> 
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-half-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Text style={{fontSize:10,color:'gray',marginLeft:4}}>(1073)</Text>
               </View>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Text style={{fontSize:13}}>EGORAS_M</Text>
                   <Ionicons name="paper-plane-sharp" size={12} color="#28b67d" style={{marginLeft:4}}/>
                   <Text style={{fontSize:13,marginLeft:3,color:'#28b67d'}}>EXPRESS</Text>
               </View>
               <View style={{flexDirection:'row'}}><Text style={{fontSize:10,fontWeight:'400'}}>Eligible for </Text><Text style={{marginLeft:4,fontSize:10,fontWeight:'700',letterSpacing:0.1}}>Free Shipping</Text></View>
              <View style={styles.container4}>
                  <Text style={{color:'#fff',fontSize:12,fontWeight:'700'}}>ADD TO CART</Text>
              </View>
           </View>
           <View style={styles.container21}>
              <View style={{alignItems:'center',marginBottom:10}}>
                 <Image source={require('../assets/col.jpg')} style={{width:150,height:150}} resizeMode='contain'/>
                 <Ionicons name="heart-outline" size={20} color="#28b67d" style={{position:'absolute',bottom:0,left:0}}/>
              </View>
              <Text style={{position:'absolute',fontSize:10,padding:3,backgroundColor:'black',color:'#fff',top:7,left:5,fontWeight:"500",letterSpacing:0.2}}>Black Friday Deals</Text>
              <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
              <Text styles={{fontWeight:'400',marginBottom:3}}>₦2,750</Text>
              <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text style={styles.container22}>-54%</Text></View>

              <View style={{flexDirection:'row',marginTop:5,alignItems:'center',marginBottom:5}}>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" /> 
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-half-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Text style={{fontSize:10,color:'gray',marginLeft:4}}>(1073)</Text>
               </View>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Text style={{fontSize:13}}>EGORAS_M</Text>
                   <Ionicons name="paper-plane-sharp" size={12} color="#28b67d" style={{marginLeft:4}}/>
                   <Text style={{fontSize:13,marginLeft:3,color:'#28b67d'}}>EXPRESS</Text>
               </View>
               <View style={{flexDirection:'row'}}><Text style={{fontSize:10,fontWeight:'400'}}>Eligible for </Text><Text style={{marginLeft:4,fontSize:10,fontWeight:'700',letterSpacing:0.1}}>Free Shipping</Text></View>
              <View style={styles.container4}>
                  <Text style={{color:'#fff',fontSize:12,fontWeight:'700'}}>ADD TO CART</Text>
              </View>
           </View>
       </View>
       </View>

       
       <View style={{alignItems:'center',marginBottom:7}}>
       <View style={{flexDirection:'row',width:'96%',justifyContent:'space-between'}}>
           <View style={styles.container21}>
               <View style={{alignItems:'center',marginBottom:10}}>
                   <Image source={require('../assets/col.jpg')} style={{width:150,height:150}} resizeMode='contain'/>
                   <Ionicons name="heart-outline" size={20} color="#28b67d" style={{position:'absolute',bottom:0,left:0}}/>
               </View>
               <Text style={{position:'absolute',fontSize:10,padding:3,backgroundColor:'black',color:'#fff',top:7,left:5,fontWeight:"500",letterSpacing:0.2}}>Black Friday Deals</Text>
               <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
               <Text styles={{fontWeight:'400',marginBottom:3}}>₦3,750</Text>
               <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text  style={styles.container22}>-54%</Text></View>

               <View style={{flexDirection:'row',marginTop:5,alignItems:'center',marginBottom:5}}>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" /> 
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-half-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Text style={{fontSize:10,color:'gray',marginLeft:4}}>(1073)</Text>
               </View>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Text style={{fontSize:13}}>EGORAS_M</Text>
                   <Ionicons name="paper-plane-sharp" size={12} color="#28b67d" style={{marginLeft:4}}/>
                   <Text style={{fontSize:13,marginLeft:3,color:'#28b67d'}}>EXPRESS</Text>
               </View>
               <View style={{flexDirection:'row'}}><Text style={{fontSize:10,fontWeight:'400'}}>Eligible for </Text><Text style={{marginLeft:4,fontSize:10,fontWeight:'700',letterSpacing:0.1}}>Free Shipping</Text></View>
              <View style={styles.container4}>
                  <Text style={{color:'#fff',fontSize:12,fontWeight:'700'}}>ADD TO CART</Text>
              </View>
           </View>
           <View style={styles.container21}>
              <View style={{alignItems:'center',marginBottom:10}}>
                 <Image source={require('../assets/col.jpg')} style={{width:150,height:150}} resizeMode='contain'/>
                 <Ionicons name="heart-outline" size={20} color="#28b67d" style={{position:'absolute',bottom:0,left:0}}/>
              </View>
              <Text style={{position:'absolute',fontSize:10,padding:3,backgroundColor:'black',color:'#fff',top:7,left:5,fontWeight:"500",letterSpacing:0.2}}>Black Friday Deals</Text>
              <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
              <Text styles={{fontWeight:'400',marginBottom:3}}>₦2,750</Text>
              <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text style={styles.container22}>-54%</Text></View>

              <View style={{flexDirection:'row',marginTop:5,alignItems:'center',marginBottom:5}}>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" /> 
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-half-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Text style={{fontSize:10,color:'gray',marginLeft:4}}>(1073)</Text>
               </View>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Text style={{fontSize:13}}>EGORAS_M</Text>
                   <Ionicons name="paper-plane-sharp" size={12} color="#28b67d" style={{marginLeft:4}}/>
                   <Text style={{fontSize:13,marginLeft:3,color:'#28b67d'}}>EXPRESS</Text>
               </View>
               <View style={{flexDirection:'row'}}><Text style={{fontSize:10,fontWeight:'400'}}>Eligible for </Text><Text style={{marginLeft:4,fontSize:10,fontWeight:'700',letterSpacing:0.1}}>Free Shipping</Text></View>
              <View style={styles.container4}>
                  <Text style={{color:'#fff',fontSize:12,fontWeight:'700'}}>ADD TO CART</Text>
              </View>
           </View>
       </View>
       </View>



       <View style={{alignItems:'center',marginBottom:7}}>
       <View style={{flexDirection:'row',width:'96%',justifyContent:'space-between'}}>
           <View style={styles.container21}>
               <View style={{alignItems:'center',marginBottom:10}}>
                   <Image source={require('../assets/col.jpg')} style={{width:150,height:150}} resizeMode='contain'/>
                   <Ionicons name="heart-outline" size={20} color="#28b67d" style={{position:'absolute',bottom:0,left:0}}/>
               </View>
               <Text style={{position:'absolute',fontSize:10,padding:3,backgroundColor:'black',color:'#fff',top:7,left:5,fontWeight:"500",letterSpacing:0.2}}>Black Friday Deals</Text>
               <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
               <Text styles={{fontWeight:'400',marginBottom:3}}>₦3,750</Text>
               <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text  style={styles.container22}>-54%</Text></View>

               <View style={{flexDirection:'row',marginTop:5,alignItems:'center',marginBottom:5}}>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" /> 
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-half-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Text style={{fontSize:10,color:'gray',marginLeft:4}}>(1073)</Text>
               </View>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Text style={{fontSize:13}}>EGORAS_M</Text>
                   <Ionicons name="paper-plane-sharp" size={12} color="#28b67d" style={{marginLeft:4}}/>
                   <Text style={{fontSize:13,marginLeft:3,color:'#28b67d'}}>EXPRESS</Text>
               </View>
               <View style={{flexDirection:'row'}}><Text style={{fontSize:10,fontWeight:'400'}}>Eligible for </Text><Text style={{marginLeft:4,fontSize:10,fontWeight:'700',letterSpacing:0.1}}>Free Shipping</Text></View>
              <View style={styles.container4}>
                  <Text style={{color:'#fff',fontSize:12,fontWeight:'700'}}>ADD TO CART</Text>
              </View>
           </View>
           <View style={styles.container21}>
              <View style={{alignItems:'center',marginBottom:10}}>
                 <Image source={require('../assets/col.jpg')} style={{width:150,height:150}} resizeMode='contain'/>
                 <Ionicons name="heart-outline" size={20} color="#28b67d" style={{position:'absolute',bottom:0,left:0}}/>
              </View>
              <Text style={{position:'absolute',fontSize:10,padding:3,backgroundColor:'black',color:'#fff',top:7,left:5,fontWeight:"500",letterSpacing:0.2}}>Black Friday Deals</Text>
              <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
              <Text styles={{fontWeight:'400',marginBottom:3}}>₦2,750</Text>
              <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text style={styles.container22}>-54%</Text></View>

              <View style={{flexDirection:'row',marginTop:5,alignItems:'center',marginBottom:5}}>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" /> 
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-half-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Text style={{fontSize:10,color:'gray',marginLeft:4}}>(1073)</Text>
               </View>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Text style={{fontSize:13}}>EGORAS_M</Text>
                   <Ionicons name="paper-plane-sharp" size={12} color="#28b67d" style={{marginLeft:4}}/>
                   <Text style={{fontSize:13,marginLeft:3,color:'#28b67d'}}>EXPRESS</Text>
               </View>
               <View style={{flexDirection:'row'}}><Text style={{fontSize:10,fontWeight:'400'}}>Eligible for </Text><Text style={{marginLeft:4,fontSize:10,fontWeight:'700',letterSpacing:0.1}}>Free Shipping</Text></View>
              <View style={styles.container4}>
                  <Text style={{color:'#fff',fontSize:12,fontWeight:'700'}}>ADD TO CART</Text>
              </View>
           </View>
       </View>
       </View>



       <View style={{alignItems:'center',marginBottom:7}}>
       <View style={{flexDirection:'row',width:'96%',justifyContent:'space-between'}}>
           <View style={styles.container21}>
               <View style={{alignItems:'center',marginBottom:10}}>
                   <Image source={require('../assets/col.jpg')} style={{width:150,height:150}} resizeMode='contain'/>
                   <Ionicons name="heart-outline" size={20} color="#28b67d" style={{position:'absolute',bottom:0,left:0}}/>
               </View>
               <Text style={{position:'absolute',fontSize:10,padding:3,backgroundColor:'black',color:'#fff',top:7,left:5,fontWeight:"500",letterSpacing:0.2}}>Black Friday Deals</Text>
               <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
               <Text styles={{fontWeight:'400',marginBottom:3}}>₦3,750</Text>
               <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text  style={styles.container22}>-54%</Text></View>

               <View style={{flexDirection:'row',marginTop:5,alignItems:'center',marginBottom:5}}>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" /> 
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-half-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Text style={{fontSize:10,color:'gray',marginLeft:4}}>(1073)</Text>
               </View>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Text style={{fontSize:13}}>EGORAS_M</Text>
                   <Ionicons name="paper-plane-sharp" size={12} color="#28b67d" style={{marginLeft:4}}/>
                   <Text style={{fontSize:13,marginLeft:3,color:'#28b67d'}}>EXPRESS</Text>
               </View>
               <View style={{flexDirection:'row'}}><Text style={{fontSize:10,fontWeight:'400'}}>Eligible for </Text><Text style={{marginLeft:4,fontSize:10,fontWeight:'700',letterSpacing:0.1}}>Free Shipping</Text></View>
              <View style={styles.container4}>
                  <Text style={{color:'#fff',fontSize:12,fontWeight:'700'}}>ADD TO CART</Text>
              </View>
           </View>
           <View style={styles.container21}>
              <View style={{alignItems:'center',marginBottom:10}}>
                 <Image source={require('../assets/col.jpg')} style={{width:150,height:150}} resizeMode='contain'/>
                 <Ionicons name="heart-outline" size={20} color="#28b67d" style={{position:'absolute',bottom:0,left:0}}/>
              </View>
              <Text style={{position:'absolute',fontSize:10,padding:3,backgroundColor:'black',color:'#fff',top:7,left:5,fontWeight:"500",letterSpacing:0.2}}>Black Friday Deals</Text>
              <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
              <Text styles={{fontWeight:'400',marginBottom:3}}>₦2,750</Text>
              <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text style={styles.container22}>-54%</Text></View>

              <View style={{flexDirection:'row',marginTop:5,alignItems:'center',marginBottom:5}}>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" /> 
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-half-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Text style={{fontSize:10,color:'gray',marginLeft:4}}>(1073)</Text>
               </View>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Text style={{fontSize:13}}>EGORAS_M</Text>
                   <Ionicons name="paper-plane-sharp" size={12} color="#28b67d" style={{marginLeft:4}}/>
                   <Text style={{fontSize:13,marginLeft:3,color:'#28b67d'}}>EXPRESS</Text>
               </View>
               <View style={{flexDirection:'row'}}><Text style={{fontSize:10,fontWeight:'400'}}>Eligible for </Text><Text style={{marginLeft:4,fontSize:10,fontWeight:'700',letterSpacing:0.1}}>Free Shipping</Text></View>
              <View style={styles.container4}>
                  <Text style={{color:'#fff',fontSize:12,fontWeight:'700'}}>ADD TO CART</Text>
              </View>
           </View>
       </View>
       </View>

       
       <View style={{alignItems:'center',marginBottom:7}}>
       <View style={{flexDirection:'row',width:'96%',justifyContent:'space-between'}}>
           <View style={styles.container21}>
               <View style={{alignItems:'center',marginBottom:10}}>
                   <Image source={require('../assets/col.jpg')} style={{width:150,height:150}} resizeMode='contain'/>
                   <Ionicons name="heart-outline" size={20} color="#28b67d" style={{position:'absolute',bottom:0,left:0}}/>
               </View>
               <Text style={{position:'absolute',fontSize:10,padding:3,backgroundColor:'black',color:'#fff',top:7,left:5,fontWeight:"500",letterSpacing:0.2}}>Black Friday Deals</Text>
               <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
               <Text styles={{fontWeight:'400',marginBottom:3}}>₦3,750</Text>
               <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text  style={styles.container22}>-54%</Text></View>

               <View style={{flexDirection:'row',marginTop:5,alignItems:'center',marginBottom:5}}>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" /> 
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-half-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Text style={{fontSize:10,color:'gray',marginLeft:4}}>(1073)</Text>
               </View>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Text style={{fontSize:13}}>EGORAS_M</Text>
                   <Ionicons name="paper-plane-sharp" size={12} color="#28b67d" style={{marginLeft:4}}/>
                   <Text style={{fontSize:13,marginLeft:3,color:'#28b67d'}}>EXPRESS</Text>
               </View>
               <View style={{flexDirection:'row'}}><Text style={{fontSize:10,fontWeight:'400'}}>Eligible for </Text><Text style={{marginLeft:4,fontSize:10,fontWeight:'700',letterSpacing:0.1}}>Free Shipping</Text></View>
              <View style={styles.container4}>
                  <Text style={{color:'#fff',fontSize:12,fontWeight:'700'}}>ADD TO CART</Text>
              </View>
           </View>
           <View style={styles.container21}>
              <View style={{alignItems:'center',marginBottom:10}}>
                 <Image source={require('../assets/col.jpg')} style={{width:150,height:150}} resizeMode='contain'/>
                 <Ionicons name="heart-outline" size={20} color="#28b67d" style={{position:'absolute',bottom:0,left:0}}/>
              </View>
              <Text style={{position:'absolute',fontSize:10,padding:3,backgroundColor:'black',color:'#fff',top:7,left:5,fontWeight:"500",letterSpacing:0.2}}>Black Friday Deals</Text>
              <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
              <Text styles={{fontWeight:'400',marginBottom:3}}>₦2,750</Text>
              <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text style={styles.container22}>-54%</Text></View>

              <View style={{flexDirection:'row',marginTop:5,alignItems:'center',marginBottom:5}}>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" /> 
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-half-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Text style={{fontSize:10,color:'gray',marginLeft:4}}>(1073)</Text>
               </View>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Text style={{fontSize:13}}>EGORAS_M</Text>
                   <Ionicons name="paper-plane-sharp" size={12} color="#28b67d" style={{marginLeft:4}}/>
                   <Text style={{fontSize:13,marginLeft:3,color:'#28b67d'}}>EXPRESS</Text>
               </View>
               <View style={{flexDirection:'row'}}><Text style={{fontSize:10,fontWeight:'400'}}>Eligible for </Text><Text style={{marginLeft:4,fontSize:10,fontWeight:'700',letterSpacing:0.1}}>Free Shipping</Text></View>
              <View style={styles.container4}>
                  <Text style={{color:'#fff',fontSize:12,fontWeight:'700'}}>ADD TO CART</Text>
              </View>
           </View>
       </View>
       </View>


       <View style={{alignItems:'center',marginBottom:7}}>
       <View style={{flexDirection:'row',width:'96%',justifyContent:'space-between'}}>
           <View style={styles.container21}>
               <View style={{alignItems:'center',marginBottom:10}}>
                   <Image source={require('../assets/col.jpg')} style={{width:150,height:150}} resizeMode='contain'/>
                   <Ionicons name="heart-outline" size={20} color="#28b67d" style={{position:'absolute',bottom:0,left:0}}/>
               </View>
               <Text style={{position:'absolute',fontSize:10,padding:3,backgroundColor:'black',color:'#fff',top:7,left:5,fontWeight:"500",letterSpacing:0.2}}>Black Friday Deals</Text>
               <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
               <Text styles={{fontWeight:'400',marginBottom:3}}>₦3,750</Text>
               <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text  style={styles.container22}>-54%</Text></View>

               <View style={{flexDirection:'row',marginTop:5,alignItems:'center',marginBottom:5}}>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" /> 
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-half-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Text style={{fontSize:10,color:'gray',marginLeft:4}}>(1073)</Text>
               </View>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Text style={{fontSize:13}}>EGORAS_M</Text>
                   <Ionicons name="paper-plane-sharp" size={12} color="#28b67d" style={{marginLeft:4}}/>
                   <Text style={{fontSize:13,marginLeft:3,color:'#28b67d'}}>EXPRESS</Text>
               </View>
               <View style={{flexDirection:'row'}}><Text style={{fontSize:10,fontWeight:'400'}}>Eligible for </Text><Text style={{marginLeft:4,fontSize:10,fontWeight:'700',letterSpacing:0.1}}>Free Shipping</Text></View>
              <View style={styles.container4}>
                  <Text style={{color:'#fff',fontSize:12,fontWeight:'700'}}>ADD TO CART</Text>
              </View>
           </View>
           <View style={styles.container21}>
              <View style={{alignItems:'center',marginBottom:10}}>
                 <Image source={require('../assets/col.jpg')} style={{width:150,height:150}} resizeMode='contain'/>
                 <Ionicons name="heart-outline" size={20} color="#28b67d" style={{position:'absolute',bottom:0,left:0}}/>
              </View>
              <Text style={{position:'absolute',fontSize:10,padding:3,backgroundColor:'black',color:'#fff',top:7,left:5,fontWeight:"500",letterSpacing:0.2}}>Black Friday Deals</Text>
              <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
              <Text styles={{fontWeight:'400',marginBottom:3}}>₦2,750</Text>
              <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text style={styles.container22}>-54%</Text></View>

              <View style={{flexDirection:'row',marginTop:5,alignItems:'center',marginBottom:5}}>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" /> 
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-half-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Text style={{fontSize:10,color:'gray',marginLeft:4}}>(1073)</Text>
               </View>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Text style={{fontSize:13}}>EGORAS_M</Text>
                   <Ionicons name="paper-plane-sharp" size={12} color="#28b67d" style={{marginLeft:4}}/>
                   <Text style={{fontSize:13,marginLeft:3,color:'#28b67d'}}>EXPRESS</Text>
               </View>
               <View style={{flexDirection:'row'}}><Text style={{fontSize:10,fontWeight:'400'}}>Eligible for </Text><Text style={{marginLeft:4,fontSize:10,fontWeight:'700',letterSpacing:0.1}}>Free Shipping</Text></View>
              <View style={styles.container4}>
                  <Text style={{color:'#fff',fontSize:12,fontWeight:'700'}}>ADD TO CART</Text>
              </View>
           </View>
       </View>
       </View>


       <View style={{alignItems:'center',marginBottom:7}}>
       <View style={{flexDirection:'row',width:'96%',justifyContent:'space-between'}}>
           <View style={styles.container21}>
               <View style={{alignItems:'center',marginBottom:10}}>
                   <Image source={require('../assets/col.jpg')} style={{width:150,height:150}} resizeMode='contain'/>
                   <Ionicons name="heart-outline" size={20} color="#28b67d" style={{position:'absolute',bottom:0,left:0}}/>
               </View>
               <Text style={{position:'absolute',fontSize:10,padding:3,backgroundColor:'black',color:'#fff',top:7,left:5,fontWeight:"500",letterSpacing:0.2}}>Black Friday Deals</Text>
               <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
               <Text styles={{fontWeight:'400',marginBottom:3}}>₦3,750</Text>
               <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text  style={styles.container22}>-54%</Text></View>

               <View style={{flexDirection:'row',marginTop:5,alignItems:'center',marginBottom:5}}>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" /> 
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-half-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Text style={{fontSize:10,color:'gray',marginLeft:4}}>(1073)</Text>
               </View>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Text style={{fontSize:13}}>EGORAS_M</Text>
                   <Ionicons name="paper-plane-sharp" size={12} color="#28b67d" style={{marginLeft:4}}/>
                   <Text style={{fontSize:13,marginLeft:3,color:'#28b67d'}}>EXPRESS</Text>
               </View>
               <View style={{flexDirection:'row'}}><Text style={{fontSize:10,fontWeight:'400'}}>Eligible for </Text><Text style={{marginLeft:4,fontSize:10,fontWeight:'700',letterSpacing:0.1}}>Free Shipping</Text></View>
              <View style={styles.container4}>
                  <Text style={{color:'#fff',fontSize:12,fontWeight:'700'}}>ADD TO CART</Text>
              </View>
           </View>
           <View style={styles.container21}>
              <View style={{alignItems:'center',marginBottom:10}}>
                 <Image source={require('../assets/col.jpg')} style={{width:150,height:150}} resizeMode='contain'/>
                 <Ionicons name="heart-outline" size={20} color="#28b67d" style={{position:'absolute',bottom:0,left:0}}/>
              </View>
              <Text style={{position:'absolute',fontSize:10,padding:3,backgroundColor:'black',color:'#fff',top:7,left:5,fontWeight:"500",letterSpacing:0.2}}>Black Friday Deals</Text>
              <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
              <Text styles={{fontWeight:'400',marginBottom:3}}>₦2,750</Text>
              <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text style={styles.container22}>-54%</Text></View>

              <View style={{flexDirection:'row',marginTop:5,alignItems:'center',marginBottom:5}}>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" /> 
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-half-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Text style={{fontSize:10,color:'gray',marginLeft:4}}>(1073)</Text>
               </View>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Text style={{fontSize:13}}>EGORAS_M</Text>
                   <Ionicons name="paper-plane-sharp" size={12} color="#28b67d" style={{marginLeft:4}}/>
                   <Text style={{fontSize:13,marginLeft:3,color:'#28b67d'}}>EXPRESS</Text>
               </View>
               <View style={{flexDirection:'row'}}><Text style={{fontSize:10,fontWeight:'400'}}>Eligible for </Text><Text style={{marginLeft:4,fontSize:10,fontWeight:'700',letterSpacing:0.1}}>Free Shipping</Text></View>
              <View style={styles.container4}>
                  <Text style={{color:'#fff',fontSize:12,fontWeight:'700'}}>ADD TO CART</Text>
              </View>
           </View>
       </View>
       </View>


       <View style={{alignItems:'center',marginBottom:7}}>
       <View style={{flexDirection:'row',width:'96%',justifyContent:'space-between'}}>
           <View style={styles.container21}>
               <View style={{alignItems:'center',marginBottom:10}}>
                   <Image source={require('../assets/col.jpg')} style={{width:150,height:150}} resizeMode='contain'/>
                   <Ionicons name="heart-outline" size={20} color="#28b67d" style={{position:'absolute',bottom:0,left:0}}/>
               </View>
               <Text style={{position:'absolute',fontSize:10,padding:3,backgroundColor:'black',color:'#fff',top:7,left:5,fontWeight:"500",letterSpacing:0.2}}>Black Friday Deals</Text>
               <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
               <Text styles={{fontWeight:'400',marginBottom:3}}>₦3,750</Text>
               <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text  style={styles.container22}>-54%</Text></View>

               <View style={{flexDirection:'row',marginTop:5,alignItems:'center',marginBottom:5}}>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" /> 
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-half-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Text style={{fontSize:10,color:'gray',marginLeft:4}}>(1073)</Text>
               </View>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Text style={{fontSize:13}}>EGORAS_M</Text>
                   <Ionicons name="paper-plane-sharp" size={12} color="#28b67d" style={{marginLeft:4}}/>
                   <Text style={{fontSize:13,marginLeft:3,color:'#28b67d'}}>EXPRESS</Text>
               </View>
               <View style={{flexDirection:'row'}}><Text style={{fontSize:10,fontWeight:'400'}}>Eligible for </Text><Text style={{marginLeft:4,fontSize:10,fontWeight:'700',letterSpacing:0.1}}>Free Shipping</Text></View>
              <View style={styles.container4}>
                  <Text style={{color:'#fff',fontSize:12,fontWeight:'700'}}>ADD TO CART</Text>
              </View>
           </View>
           <View style={styles.container21}>
              <View style={{alignItems:'center',marginBottom:10}}>
                 <Image source={require('../assets/col.jpg')} style={{width:150,height:150}} resizeMode='contain'/>
                 <Ionicons name="heart-outline" size={20} color="#28b67d" style={{position:'absolute',bottom:0,left:0}}/>
              </View>
              <Text style={{position:'absolute',fontSize:10,padding:3,backgroundColor:'black',color:'#fff',top:7,left:5,fontWeight:"500",letterSpacing:0.2}}>Black Friday Deals</Text>
              <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
              <Text styles={{fontWeight:'400',marginBottom:3}}>₦2,750</Text>
              <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text style={styles.container22}>-54%</Text></View>

              <View style={{flexDirection:'row',marginTop:5,alignItems:'center',marginBottom:5}}>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" /> 
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Ionicons name="star-half-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                  <Text style={{fontSize:10,color:'gray',marginLeft:4}}>(1073)</Text>
               </View>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Text style={{fontSize:13}}>EGORAS_M</Text>
                   <Ionicons name="paper-plane-sharp" size={12} color="#28b67d" style={{marginLeft:4}}/>
                   <Text style={{fontSize:13,marginLeft:3,color:'#28b67d'}}>EXPRESS</Text>
               </View>
               <View style={{flexDirection:'row'}}><Text style={{fontSize:10,fontWeight:'400'}}>Eligible for </Text><Text style={{marginLeft:4,fontSize:10,fontWeight:'700',letterSpacing:0.1}}>Free Shipping</Text></View>
              <View style={styles.container4}>
                  <Text style={{color:'#fff',fontSize:12,fontWeight:'700'}}>ADD TO CART</Text>
              </View>
           </View>
       </View>
       </View>

</ScrollView>


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
        alignItems:'center'
    },
    container1:{
        width:140,
       paddingBottom:10,
        backgroundColor:'#fff',
        paddingLeft:5,
        marginRight:20
    },
    container2:{
        flexDirection:'row',
        backgroundColor:'#28b67d',
        // paddingVertical:10,
        paddingHorizontal:15,
        alignItems:'center'
    },
    // container3:{

    // },
    container21:{
        width:'49%',
       paddingBottom:5,
        backgroundColor:'white',
        borderRadius:3,
           shadowColor:'#f5f3f3',
         shadowOffset:{width:0,height:2},
         shadowRadius:8,
         elevation:1,
         shadowOpacity:0.8,
         paddingTop:8,
         paddingHorizontal:5
    },
    container22:{
        fontSize:8,paddingVertical:2,paddingHorizontal:1,color:'red',backgroundColor:'#f5f3f3'
    },
    container23:{
        textDecorationLine:'line-through',fontSize:10,color:'#bfbfc2',marginRight:3
    },

    container4:{
        marginTop:40,
        paddingHorizontal:10,
        paddingVertical:10,
        alignItems:'center',
        // backgroundColor:'#e4a788',
        borderRadius:3,
        shadowColor:'#f5f3f3',
         shadowOffset:{width:0,height:2},
         shadowRadius:8,
         elevation:1,
         shadowOpacity:0.8,
         backgroundColor:'#28b67d',
    }


})

export default SectionHomeView1;