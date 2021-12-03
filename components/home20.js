import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet, SafeAreaView,Pressable, ScrollView} from 'react-native';
import {Ionicons } from 'react-native-vector-icons';
import {Feather } from 'react-native-vector-icons';


const detailScreen =({navigation})=>{

    const Sami =()=>{
        navigation.goBack()
    }



    const [countDown,setCountDown]=useState("");

    useEffect(()=>{
       let countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

       let x =setInterval(()=>{
        let now =new Date().getTime();
        let distance =countDownDate -now;

        let days =Math.floor(distance /(1000 * 60 * 60 *24));
        let hours = Math.floor((distance % (1000 * 60 * 60 *24))/ (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000  * 60 )) / 1000);

           let went =`${days}d  ${hours}h  ${minutes}m  ${seconds}s`

        //  setCountDown(days + "d" + " " + hours + "h" + " " + minutes  + "m" + " " + seconds + "s");
         setCountDown(went)

         if (distance < 0){
             clearInterval(x);
             setCountDown("Expired")
         }

       })

       
       



    },[])

    return(
        <SafeAreaView>
              <View style={styles.container}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Pressable onPress={Sami}><Ionicons name="arrow-back-sharp" size={22} color="#fff" style={{marginLeft:5}}/></Pressable>
                    <Text style={{marginLeft:14,fontSize:16,fontWeight:'700',letterSpacing:0.1,color:'#fff'}}>Details</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Ionicons name="md-search" size={18} color="#fff" />
                    <Ionicons name="cart-outline" size={22} color="#fff" style={{marginLeft:5}}/>
                </View>
            </View>


            <ScrollView>
               <View style={{padding:10,alignItems:'center'}}>
                 <View style={[styles.container1,styles.container10]}>

                 </View>
              </View>

              <View style={[styles.container1,styles.container3]}>
                  <View style={[styles.container4,styles.container5]}><Text style={{fontSize:10,color:'#fff',fontWeight:'500',}}>Official Store</Text></View>
                  <Text style={{fontWeight:'400',fontSize:12,marginBottom:5,letterSpacing:0.1,color:'#000'}}>LED Complete Insecticide (Device + Refill) - Pack Of 2</Text>
                  <Text style={{fontSize:10,letterSpacing:0.1,color:'#000',marginBottom:8}}>Brand: Mortein</Text>
                 <View style={[styles.container4,styles.container6]}><Text  style={{fontSize:10,color:'#fff'}}>JPrime Discount</Text></View>
                  <View style={{borderWidth:1,borderColor:'#28b67d',borderRadius:3}}>
                      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:12,paddingVertical:8,backgroundColor:'#28b67d',marginBottom:15}}>
                          <View style={{flexDirection:'row',alignItems:'center'}}>
                              <Ionicons name="pricetag" size={18} color="yellow" />
                              <Text style={{fontSize:11,marginLeft:8,color:'#fff',fontWeight:"500"}}>Flash Sales</Text>
                          </View>
                          <View>
                              <Text style={{fontSize:9,color:'#fff',fontWeight:'600'}} >Time Left {countDown}</Text>
                          </View>
                      </View>
                     <Text style={{fontWeight:'500',fontSize:14,letterSpacing:0.1,paddingLeft:10,marginBottom:10}}>₦3,750</Text>
                     <View style={{flexDirection:'row',alignItems:'center',paddingLeft:10,paddingBottom:5}}>
                         <Text style={{fontSize:10,color:'gray',textDecorationLine:'line-through',letterSpacing:0.1}}>₦3,750</Text>
                         <Text style={{fontSize:9,color:'red',padding:2,backgroundColor:'#f5f3f3',marginLeft:8}}>-25%</Text>
                     </View>
                     <View style={{flexDirection:'row',alignItems:'center',paddingBottom:6,paddingLeft:10}}>
                         <Text style={{fontSize:8,letterSpacing:0.1}}>13 items left</Text>
                         <View style={styles.container7}>
                             <View style={styles.container8}></View>
                         </View>
                     </View>
                  </View>

                  <View style={{flexDirection:'row',alignItems:'center', marginBottom:25,marginTop:5}}>
                      <Text style={{fontSize:10,}}>+shipping from 180 to LEKKI-AJAH(SANGOTEDO)</Text>
                      <Text style={{fontSize:10,marginLeft:5}}>See options</Text>
                  </View>

                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                      <View>
                           <View style={{flexDirection:'row',alignItems:'center'}}>
                             <Ionicons name="star-sharp" size={12} color="#e4a788" /> 
                             <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                             <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                             <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                             <Ionicons name="star-half-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                           </View>
                           <Text style={{fontSize:10,color:'gray'}}>(15 ratings)</Text>
                      </View>
                      <View style={{flexDirection:'row',alignItems:'center'}}>
                      <Feather name="share-2" size={14} color="#28b67d" style={{marginLeft:5}} />
                      <Ionicons name="heart-outline" size={20} color="#28b67d" style={{marginLeft:10}}/>
                      </View>
                  </View>

              </View>

              <Text style={{fontSize:11,paddingLeft:10,letterSpacing:0.3,paddingTop:10,paddingBottom:6,color:'gray'}}>PROMOTIONS</Text>


              <View style={[styles.container1,styles.container3]}>
                  <View style={{marginBottom:20,flexDirection:'row',alignItems:'center',}}>
                      <View style={{width:'8%'}}>
                      <View style={{width:20,height:20,borderRadius:100,backgroundColor:'#28b67d',alignItems:'center',justifyContent:'center'}}><Ionicons name="star-sharp" size={15} color="#fff" /></View></View>
                    <View style={{width:'92%'}}><Text style={{color:'#000',fontWeight:'400',letterSpacing:0.1,marginLeft:5,fontSize:12,}}>Enjoy cheaper shipping fees when you select a PickUp Station at checkout</Text></View>
                  </View>
                  <View style={{marginBottom:20,flexDirection:'row',alignItems:'center'}}>
                  <View style={{width:'8%'}}>   
                  <View style={{width:20,height:20,borderRadius:100,backgroundColor:'#28b67d',alignItems:'center',justifyContent:'center'}}><Ionicons name="star-sharp" size={15} color="#fff" /></View></View>
                    <View style={{width:'92%'}}><Text style={{color:'#000',fontWeight:'400',letterSpacing:0.1,marginLeft:5,fontSize:12}}>Get addditional 20% off with your Mastercard</Text></View>
                  </View>
                  <View style={{marginBottom:20,flexDirection:'row',alignItems:'center'}}>
                  <View style={{width:'8%'}}>  
                  <View style={{width:20,height:20,borderRadius:100,backgroundColor:'#28b67d',alignItems:'center',justifyContent:'center'}}><Ionicons name="star-sharp" size={15} color="#fff" /></View></View>
                    <View style={{width:'92%'}}><Text style={{color:'#000',fontWeight:'400',letterSpacing:0.1,marginLeft:5,fontSize:12,}}>Borrow loans up to 100,000 to make everyday life easier.no colllateral,no papperwork via jumiaPay financial partners.</Text></View>
                  </View>
                 
              </View>

              <Text style={{fontSize:11,paddingTop:15,paddingBottom:10,paddingLeft:10,color:'gray',letterSpacing:0.1}}>DELIVERY AND RETURNS INFO</Text>


              <View style={[styles.container1,styles.container3]}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Text style={{fontSize:13}}>EGORAS_M</Text>
                   <Ionicons name="paper-plane-sharp" size={12} color="#28b67d" style={{marginLeft:4}}/>
                   <Text style={{fontSize:13,marginLeft:3,color:'#28b67d'}}>EXPRESS</Text>
               </View>
               
                  <Text style={{fontSize:12,letterSpacing:0.1,fontWeight:'400',marginTop:10,marginBottom:7}}>Eligble for Free Shipping</Text>
                  <View style={{borderWidth:0.6,width:"100%",borderColor:'#f5f3f3',marginBottom:10}}></View>
                  <Text style={{fontSize:14,fontWeight:'400',letterSpacing:0.1,color:'#000',marginBottom:10}}>Choose Location</Text>
                  <View style={{paddingHorizontal:11,paddingVertical:15,borderColor:"gray",borderWidth:0.5,borderRadius:5,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
                      <Text style={{fontSize:12,fontWeight:'400',color:'#000'}}>Lagos</Text>
                      <Ionicons name="ios-caret-down-sharp" size={12} color="#000" /> 
                  </View>
                  <View style={{paddingHorizontal:11,paddingVertical:15,borderColor:"gray",borderWidth:0.5,borderRadius:5,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
                      <Text style={{fontSize:12,fontWeight:'400',color:'#000'}}>LEKKI_AJAH(SANGOTEDO)</Text>
                      <Ionicons name="ios-caret-down-sharp" size={12} color="#000" /> 
                  </View>

                  <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                      <View style={{width:'80%'}}>
                          <View style={{flexDirection:'row'}}>
                              <View style={styles.container11}><Ionicons name="bus" size={12} color="#28b67d" /></View>
                              <View style={{marginLeft:6}}>
                                 <Text>Door Delivery</Text>
                                 <Text style={{fontSize:12}}>Shipping  ₦430</Text>
                                   <Text  style={{fontSize:12}}>Delivery by 7Dec when you order within next 20hr  52mins </Text>
                               </View>
                            </View>
                      </View>
                      <View style={{width:'20%'}}><Text style={{fontSize:12,textAlign:'right'}}>Details</Text></View>
                  </View>

                  <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                      <View style={{width:'80%'}}>
                          <View style={{flexDirection:'row'}}>
                              <View style={styles.container11}><Ionicons name="bus" size={12} color="#28b67d" /></View>
                              <View style={{marginLeft:6}}>
                                 <Text>Pickup Station</Text>
                                 <Text style={{fontSize:12}}>Shipping  ₦450</Text>
                                   <Text  style={{fontSize:12}}>Delivery by 7Dec when you order within next 20hr  52mins </Text>
                               </View>
                            </View>
                      </View>
                      <View style={{width:'20%'}}><Text style={{fontSize:12,textAlign:'right'}}>Details</Text></View>
                  </View>

                  <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                      <View style={{width:'80%'}}>
                          <View style={{flexDirection:'row'}}>
                              <View style={styles.container11}><Ionicons name="bus" size={12} color="#28b67d" /></View>
                              <View style={{marginLeft:6}}>
                                 <Text>Return Policy</Text>
                                 <Text style={{fontSize:12}}>Free return within 15 days for Official store items and 7 days for other eligble items</Text> 
                               </View>
                            </View>
                      </View>
                      <View style={{width:'20%'}}><Text style={{fontSize:12,textAlign:'right'}}>Details</Text></View>
                  </View>

              </View>

             <View style={{paddingLeft:10,paddingTop:15,paddingBottom:10}}><Text style={{fontSize:12}}>PRODUCT DETAILS</Text></View>

             <View style={{flexDirection:'row',
            alignItems:'center',justifyContent:'space-between',paddingHorizontal:10,paddingVertical:10,backgroundColor:'#fff'}}>
                 <Text style={{fontSize:12}}>Description</Text>
                 <Ionicons name="ios-chevron-forward-sharp" size={12} color="#000" /> 
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
         shadowColor:'#f5f3f3',
         shadowOffset:{width:0,height:2},
         shadowRadius:8,
         elevation:1,
         shadowOpacity:0.8,
        //  backgroundColor:'#28b67d', 
         borderRadius:3,
         backgroundColor:'#fff',
         width:'100%',
       
 },
 container3:{
     padding:10
 },
 container4:{
    paddingHorizontal:2,paddingVertical:3,alignItems:'center',borderRadius:2,marginBottom:10
 },
container5:{
    backgroundColor:'red',width:75,
},
container6:{
    backgroundColor:'#28b67d',width:90,
},
container7:{
width:100,
height:5,
backgroundColor:'#f5f3f3',
borderRadius:10,
marginLeft:9,
width:'80%'
},
container8:{
position:'absolute',
left:0,top:0,bottom:0,
width:'30%',
backgroundColor:'red',
borderBottomLeftRadius:10,
borderTopLeftRadius:10
},
container10:{
    height:260,
},
container11:{
    padding:10,borderRadius:3,backgroundColor:'#fff',
    shadowColor:'grey',
         shadowOffset:{width:0,height:2},
         shadowRadius:8,
         elevation:1,
         shadowOpacity:0.8,
         alignSelf:'flex-start'
}

})

export default detailScreen;