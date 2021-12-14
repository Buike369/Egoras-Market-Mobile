import React from 'react';
import {View,Text,StyleSheet, SafeAreaView} from 'react-native';


const newWay =()=>{
    return(
<SafeAreaView>

<View >
                   <View style={{flex:1,backgroundColor:'#d2f0e4',marginTop:50}} testID="were">

                       {/* first view header */}
                       <View style={{flexDirection:'row',alignItems:'center',paddingVertical:15,backgroundColor:'#28b67d',paddingHorizontal:10}}>
                          <Pressable ><Ionicons name="close-outline" size={22} color="#fff"  /></Pressable>

                          <View>
                              <Text style={{marginLeft:20,color:'#fff',fontSize:14,fontWeight:'600'}}><Ionicons name="lock-closed" size={18} color="#fff"/> Egorasmarket.com</Text>
                          </View>
                       </View>
                       
                       {/* main header menu */}
                       {/* <View style={{flexDirection:'row',paddingHorizontal:10,justifyContent:'space-between',backgroundColor:'#fff',alignItems:'center',paddingVertical:10}}> */}

                        <View style={[styles.container1,styles.container2]}>
                           <View style={{flexDirection:'row',alignItems:'center'}}>
                              <Pressable onPress={()=>navigation.navigate('drawers')}><Ionicons name="menu" size={22} color="#000000"  /></Pressable>
                               <Text style={{marginLeft:5,fontSize:16,fontWeight:'700',letterSpacing:0.1,color:'#28b67d'}}>EGORAS_M</Text>
                           </View>
                           <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Ionicons name="search" size={19} color="#000000" style={{marginLeft:8}}/>
                            <Ionicons name="person-outline" size={22} color="#000000" style={{marginLeft:8}}/>
                            <Ionicons name="ios-cart-outline" size={22} color="#000000" style={{marginLeft:8}}/>
                           </View>
                       </View>
                    
                    
                    <ScrollView showsVerticalScrollIndicator={false}>

                        {/* section1 */}
                       <View style={[styles.container2,styles.container3]}>
                           <View style={{width:'60%'}}>
                             <Text style={{fontSize:16,fontWeight:'600',color:'#000',marginBottom:5}}>Welcome to</Text>
                             <Text style={{fontSize:14}}>{text1} PRIME</Text>
                            <Text style={{marginBottom:15,fontWeight:'300'}}>
                                Egoras Prime marketers benefits from unlimited free and fast delivery on all their orders,Jumia Food delivery and access to jumia Prime -only deals
                            </Text>
                            <Text style={{fontWeight:'700',fontSize:14}}>₦1,333 per month</Text>
                           </View>
                           <View style={{width:'40%'}}>
                                <Image source={require('../assets/ant.png')}  resizeMode='cover' style={{ width:'100%',height:150}}/>
                           </View>
                       </View>

                       {/* second section on web mobile  and two images map */}
             
               
                        <ScrollView style={{backgroundColor:'#fff',paddingVertical:5,paddingHorizontal:10}} horizontal showsHorizontalScrollIndicator={false}>
                            { Swap.map((seed)=>(
                            <Image source={seed.img}   style={{height:150,marginRight:5}} resizeMethod="cover"/>))
                        }
                      </ScrollView >
                    
               
                        {/* third view section on web  with map */}
                        <View>
                             <View style={{paddingHorizontal:10,backgroundColor:'black',marginTop:8,paddingVertical:8}}>
                                 <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:5}}>
                                     <Text style={{color:'#fff',fontWeight:'500',fontSize:14}}>Unilever</Text>
                                     <Text style={{color:'#fff',fontWeight:'500',fontSize:14}}>SEE ALL</Text>
                                 </View>
                                 <Text style={{color:'#fff',fontWeight:'300'}}>Extra 10% off with {text1} Prime</Text>
                             </View>


                             {/* map 10 View horizontal */}
                             <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginBottom:20}}>
                             {
                                 Swap2.map((spedd)=>(
                             <View style={[{width:180,padding:10},]} key={spedd.id}>
                                  <Image  source={spedd.img} style={{width:'100%',height:160}} resizeMode='cover'/>
                                  <Text numberOfLines={1} style={{fontSize:12,color:'#000',fontWeight:'300',marginTop:10}}>SunLight 2in 1 Tropical Sensation</Text>
                                  <Text style={{fontSize:13,fontWeight:'600',marginTop:7}}> ₦ 1,700</Text>
                                  <Text style={{position:'absolute',top:18,right:5,color:'#fff',backgroundColor:'red',fontSize:9,paddingVertical:4,paddingHorizontal:2,fontWeight:'600'}}>-25%</Text>
                             </View>))
                             }
                             </ScrollView>
                        </View>

                               {/* fourth view section on web  with map */}
                               <View >
                             <View style={{backgroundColor:'#28b67d',paddingHorizontal:10,paddingVertical:10}}>
                                 <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                     <Text style={{color:'#fff',fontWeight:'700'}}>Reckitt Benckiser</Text>
                                     <Text style={{color:'#fff',fontWeight:'700'}}>SEE ALL</Text>
                                 </View>
                                 <Text style={{color:'#fff'}}>Extra 10% off with Egoras_M prime</Text>
                             </View>
                             {/* map 10 View horizontal */}
                             {/* {
                             <View>
                                  <Image  source={require('../assets/ant.png')} style={{}} resizeMode='cover'/>
                                  <Text numberOfLines={1}>SunLight 2in 1 Tropical Sensation</Text>
                                  <Text> 700</Text>
                                  <Text>-25%</Text>
                             </View>
                             } */}
                                      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginBottom:20}}>
                             {
                                 Swap2.map((spedd)=>(
                             <View style={[{width:180,padding:10},]} key={spedd.id}>
                                  <Image  source={spedd.img} style={{width:'100%',height:160}} resizeMode='cover'/>
                                  <Text numberOfLines={1} style={{fontSize:12,color:'#000',fontWeight:'300',marginTop:10}}>SunLight 2in 1 Tropical Sensation</Text>
                                  <Text style={{fontSize:13,fontWeight:'600',marginTop:7}}> ₦ 1,700</Text>
                                  <Text style={{position:'absolute',top:18,right:5,color:'#fff',backgroundColor:'red',fontSize:9,paddingVertical:4,paddingHorizontal:2,fontWeight:'600'}}>-25%</Text>
                             </View>))
                             }
                             </ScrollView>
                        </View>

                        {/* fifth View */}

                         <View style={{padding:5,backgroundColor:'#fff',marginBottom:8}}>
                             <Image source={require('../assets/banner.jpg')} resizeMode="cover" style={{
                              width:'100%',height:200,borderRadius:5
                             }}/>
                         </View>
                        

                             {/* sixth view section on web  with map */}
                        <View>
                             <View style={{backgroundColor:'#28b67d',paddingHorizontal:10,paddingVertical:10}}>
                                 <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                     <Text style={{color:'#fff',fontWeight:'700'}}>Unilever</Text>
                                     <Text style={{color:'#fff',fontWeight:'700'}}>SEE ALL</Text>
                                 </View>
                                 <Text style={{color:'#fff'}}>Extra 10% off with Egoras_M prime</Text>
                             </View>
                             {/* map 10 View horizontal */}
                             {/* {
                             <View>
                                  <Image  source={require('../assets/ant.png')} style={{width:30,height:50}} resizeMode='cover'/>
                                  <Text numberOfLines={1}>SunLight 2in 1 Tropical Sensation</Text>
                                  <Text> 700</Text>
                                  <Text>-25%</Text>
                             </View>
                             } */}
                                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginBottom:20}}>
                             {
                                 Swap2.map((spedd)=>(
                             <View style={[{width:180,padding:10},]} key={spedd.id}>
                                  <Image  source={spedd.img} style={{width:'100%',height:160}} resizeMode='cover'/>
                                  <Text numberOfLines={1} style={{fontSize:12,color:'#000',fontWeight:'300',marginTop:10}}>SunLight 2in 1 Tropical Sensation</Text>
                                  <Text style={{fontSize:13,fontWeight:'600',marginTop:7}}> ₦ 1,700</Text>
                                  <Text style={{position:'absolute',top:18,right:5,color:'#fff',backgroundColor:'#28b67d',fontSize:9,paddingVertical:4,paddingHorizontal:2,fontWeight:'600'}}>-25%</Text>
                             </View>))
                             }
                             </ScrollView>
                        </View>


                             {/* seven  view section on web  with map */}
                             <View>
                             <View style={{backgroundColor:'#28b67d',paddingHorizontal:10,paddingVertical:10}}>
                                 <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                     <Text style={{color:'#fff',fontWeight:'700'}}>Unilever</Text>
                                     <Text  style={{color:'#fff',fontWeight:'700'}}>SEE ALL</Text>
                                 </View>
                                 <Text style={{color:'#fff'}}>Extra 10% off with Egoras_M prime</Text>
                             </View>
                             {/* map 10 View horizontal */}
                             {/* {
                             <View>
                                  <Image  source={require('../assets/ant.png')} style={{width:300,height:50}} resizeMode='cover'/>
                                  <Text numberOfLines={1}>SunLight 2in 1 Tropical Sensation</Text>
                                  <Text> 700</Text>
                                  <Text>-25%</Text>
                             </View>
                             } */}
                                       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginBottom:20}}>
                             {
                                 Swap2.map((spedd)=>(
                             <View style={[{width:180,padding:10},]} key={spedd.id}>
                                  <Image  source={spedd.img} style={{width:'100%',height:160}} resizeMode='cover'/>
                                  <Text numberOfLines={1} style={{fontSize:12,color:'#000',fontWeight:'300',marginTop:10}}>SunLight 2in 1 Tropical Sensation</Text>
                                  <Text style={{fontSize:13,fontWeight:'600',marginTop:7}}> ₦ 1,700</Text>
                                  <Text style={{position:'absolute',top:18,right:5,color:'#fff',backgroundColor:'red',fontSize:9,paddingVertical:4,paddingHorizontal:2,fontWeight:'700'}}>-25%</Text>
                             </View>))
                             }
                             </ScrollView>
                        </View>

                          {/* another section three map  vertical*/} 

                          <View style={{backgroundColor:'#28b67d',paddingHorizontal:6}}>
                              <Text style={{color:'#fff',paddingLeft:7,fontWeight:'500',fontSize:15,paddingTop:8,paddingBottom:5}}>Benefits of Egoras_M Prime</Text>

                              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                  <Image source={require('../assets/samp.jpg')} resizeMode="contain"style={{width:'49%',height:200,borderRadius:5}}/>
                                  <Image source={require('../assets/samp.jpg')} resizeMode="contain" style={{width:'49%',height:200,borderRadius:5}}/>
                              </View>
                          </View>

                          <View style={{backgroundColor:'#28b67d',paddingHorizontal:6,marginTop:9}}>
                          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                  <Image source={require('../assets/samp2.jpg')} resizeMode="contain"style={{width:'49%',height:200,borderRadius:5}}/>
                                  <Image source={require('../assets/samp3.jpg')} resizeMode="contain" style={{width:'49%',height:200,borderRadius:5}}/>
                              </View>
                            </View>

                            <View style={{backgroundColor:'#28b67d',paddingHorizontal:6,marginTop:9}}>
                          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                  <Image source={require('../assets/samp4.jpg')} resizeMode="contain"style={{width:'49%',height:200,borderRadius:5}}/>
                                  <Image source={require('../assets/samp5.jpg')} resizeMode="contain" style={{width:'49%',height:200,borderRadius:5}}/>
                              </View>
                            </View>
                             
                             {/* another section two map horizontal */}

                             <ScrollView style={{backgroundColor:'#fff',paddingVertical:5,paddingHorizontal:10,marginVertical:7}} horizontal showsHorizontalScrollIndicator={false}>
                            { Swap.map((seed)=>(
                            <Image source={seed.img}   style={{height:150,marginRight:5}} resizeMethod="cover"/>))
                        }
                      </ScrollView >

                   <View style={{padding:4,backgroundColor:'#fff',height:300}}>
                      {/* <Video source={dend} /> */}

                        {/* <Video1/> */}
                            

                        </View>

{/* 
                             <View style={{width:'85%',height:200}}>
                                 <Image source={require('../assets/ant.png')} resizeMode='cover' style={{
                                     width:'100%',height:200
                                 }}/>
                             </View> */}

                             {/* video section */}

                             <View style={{paddingHorizontal:10,paddingVertical:20}}>
                                 <View style={{backgroundColor:'#fff',paddingHorizontal:10,paddingVertical:20}}>
                                     <Text style={{fontSize:20,color:'#000',paddingLeft:20,marginBottom:10}}>More details</Text>

                                  <View style={[styles.container5,{marginBottom:5}]}><Text style={{width:'5%',lineHeight:20}}>1. </Text><Text style={{width:'95%',lineHeight:20,fontSize:14,color:'#000',fontWeight:'300'}}>Egoras_M Prime lifetime membership incoperates ten annual subscriptions only</Text></View>
                                    <View  style={[styles.container5,{marginBottom:5}]}><Text style={{width:'5%',lineHeight:20}}>2. </Text><Text style={{width:'95%',lineHeight:20,fontSize:14,color:'#000',fontWeight:'300'}}>Egoras_M Prime lifetime membership is awarded exceptionally(it cannot be purchased</Text></View>
                                     <View  style={[styles.container5,{marginBottom:5}]}><Text style={{width:'5%',lineHeight:20}}>3. </Text><Text style={{width:'95%',lineHeight:20,fontSize:14,color:'#000',fontWeight:'300'}}>Egoras_M may,at any time and entirely in its discretin,revoke Egoras_M Prime lifetime membership ,subject to compensation of the subscription value (based on prices at the time of revocation) for the remaining duration of the year membership term.</Text></View>
                                    <View style={[styles.container5,{marginBottom:5}]}><Text style={{width:'5%',lineHeight:20}}>4. </Text><Text style={{width:'95%',lineHeight:20,fontSize:14,color:'#000',fontWeight:'300'}}>All Egoras_M Prime Terms and Conditions(including exclusion of professinal use) shall apply to lifetime members.In the event of a lifetime member's violation of these Egoras_M Prime Terms and Conditions or any application laws,Egoras_M shall revoke membership without any compensation</Text></View>
                                    <View style={[styles.container5,{marginBottom:5}]}><Text style={{width:'5%',lineHeight:20}}>5. </Text><Text style={{width:'95%',lineHeight:20,fontSize:14,color:'#000',fontWeight:'300'}}>More discounts,rewards and savings</Text></View>
                                   <View style={[styles.container5,{marginBottom:5}]}><Text style={{width:'5%',lineHeight:20}}>6. </Text><Text style={{width:'95%',lineHeight:20,fontSize:14,color:'#000',fontWeight:'300'}}>Egoras_M Prime is a customer loyalty program that entities users to subscribe and receive unlimited free delivery on all Egoras_M orders, as well as access to exclusive promotions,rewards and partner benfits</Text></View>
                                     <View style={[styles.container5,{marginBottom:5}]}><Text style={{width:'5%',lineHeight:20}} >7. </Text><Text style={{width:'95%',lineHeight:20,fontSize:14,color:'#000',fontWeight:'300'}}>Egoras_M Prime is  available in selected cities and can be purchased via selected prepayment methods</Text></View>
                                    <View style={[styles.container5,{marginBottom:5}]}><Text style={{width:'5%',lineHeight:20}}>8. </Text><Text style={{width:'95%',lineHeight:20,fontSize:14,color:'#000',fontWeight:'300'}}>Egoras_M Prime  Members enjoy the following benefits :</Text></View>
                                       <View style={styles.container5}><Text style={{width:'5%',lineHeight:20}}>  </Text><Text style={{width:'95%',lineHeight:20,fontSize:14,color:'#000',fontWeight:'300'}}>- Free Delivery on all jumia orders(excluding bulky items and international shipping)
                                     </Text></View>
                                     <View style={styles.container5}><Text style={{width:'5%',lineHeight:20}}>  </Text><Text style={{width:'95%',lineHeight:20,fontSize:14,color:'#000',fontWeight:'300'}}>
                                         - Free Delivery on Egoras_M Food Order
                                     </Text></View>
                                    <View style={styles.container5}><Text style={{width:'5%',lineHeight:20}}> </Text><Text style={{width:'95%',lineHeight:20,fontSize:14,color:'#000',fontWeight:'300'}}>-Exlusive Prime-only discounts on favorite categories  </Text></View>
                                     <View style={styles.container5}><Text style={{width:'5%',lineHeight:20}}>  </Text><Text style={{width:'95%',lineHeight:20,fontSize:14,color:'#000',fontWeight:'300'}}>-Preferential Customer Service</Text></View>
                                    <View style={[styles.container5,{marginBottom:5}]}><Text style={{width:'5%',lineHeight:20}}>9. </Text><Text style={{width:'95%',lineHeight:20,fontSize:14,color:'#000',fontWeight:'300'}}>Egoras_M is designed with the frequest shopper in mind. it is is not available for professional usage  including corporate accounts or J-Force agents. Prime Members placing more than 20 orders for Egoras_M  mail and 40 orders for Egoras_M foood per month will be deemed as professional user</Text></View>
                                      <View style={[styles.container5,{marginBottom:5}]}><Text style={{width:'5%',lineHeight:20}}>10. </Text><Text style={{width:'95%',lineHeight:20,fontSize:14,color:'#000',fontWeight:'300'}}>Reveal is not automatic,but can be re-purchased following the expiry of the original  Membership plan </Text></View>
                                      <View style={[styles.container5,{marginBottom:5}]}><Text style={{width:'5%',lineHeight:20}}>11. </Text><Text style={{width:'95%',lineHeight:20,fontSize:14,color:'#000',fontWeight:'300'}}>Egoras_M Prime free delivery applies specifically to non-bulky items. it does not include items shipped from oversea with the jumia Global tag.</Text></View>
                                 </View>

                                
                             </View>
                             <Text style={{paddingLeft:20,color:'#000'}}>EGORAS_M PRIME</Text>


{ output4.map((term)=>{return(
  
  <View style={{alignItems:'center',marginBottom:7,marginTop:8}}>
         <View style={{flexDirection:'row',width:'96%',justifyContent:'space-between'}}>
             <View style={styles.container9}>
                 <View style={{alignItems:'center',marginBottom:10}}>
                     <Image source={term.img} style={{width:150,height:150}} resizeMode='contain'/>
                    
                 </View>
                 <Text style={{position:'absolute',fontSize:10,padding:3,backgroundColor:'black',color:'#fff',top:7,left:5,fontWeight:"500",letterSpacing:0.2}}>Black Friday Deals</Text>
                 <Ionicons name="heart-outline" size={20} color="#28b67d" />
                 <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
                 <Text styles={{fontWeight:'400',marginBottom:3}}>₦3,750</Text>
                 <View style={{flexDirection:'row'}}><Text style={styles.container11}>₦3900</Text><Text  style={styles.container10}>-54%</Text></View>
  
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
                <View style={styles.container12}>
                    <Text style={{color:'#fff',fontSize:12,fontWeight:'700'}}>ADD TO CART</Text>
                </View>
             </View>
             <View style={styles.container9}>
                <View style={{alignItems:'center',marginBottom:10}}>
                   <Image source={term.img1} style={{width:150,height:150}} resizeMode='contain'/>
                  
                </View>
                <Text style={{position:'absolute',fontSize:10,padding:3,backgroundColor:'black',color:'#fff',top:7,left:5,fontWeight:"500",letterSpacing:0.2}}>Black Friday Deals</Text>
                <Ionicons name="heart-outline" size={20} color="#28b67d" />
                <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
                <Text styles={{fontWeight:'400',marginBottom:3}}>₦2,750</Text>
                <View style={{flexDirection:'row'}}><Text style={styles.container11}>₦3900</Text><Text style={styles.container10}>-54%</Text></View>
  
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
                <View style={styles.container12}>
                    <Text style={{color:'#fff',fontSize:12,fontWeight:'700'}}>ADD TO CART</Text>
                </View>
             </View>
         </View>
         </View>
  
  )})  }

   <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:15,justifyContent:'space-between'}}>
       <View style={{flexDirection:'row',alignItems:'center'}}><Ionicons name="chevron-back" size={18} color="#28b67d" /><Text style={{color:'#28b67d'}}>PREVIOUS PAGE</Text></View>
       <Text>2/17</Text>
       <View style={{flexDirection:'row',alignItems:'center'}}><Text style={{color:'#28b67d'}}>NEXT PAGE</Text><Ionicons name="chevron-forward" size={18} color="#28b67d" /></View>
   </View>


   <View style={styles.corn}>

<View style={{width:'10%',paddingRight:3,borderRightWidth:1,borderRightColor:'#fff',paddingVertical:10}}>
    <Ionicons name="business" size={22} color="#fff" />
</View>
<View style={{width:'45%',flexDirection:'row',alignItems:'center',paddingRight:4,borderRightWidth:1,borderRightColor:'#fff',paddingVertical:10,justifyContent:'flex-end'}}>
     <Text style={{fontSize:14,color:'#fff',fontWeight:'600'}}>POPULARITY</Text>
     <Ionicons name="chevron-down-outline" size={22} color="#fff" style={{marginLeft:20}}/>
</View>
<View style={{width:'45%',paddingVertical:10,alignItems:'center'}}>
    <Text style={{color:'#fff',fontSize:14,fontWeight:'600'}}>FILTERS</Text>
</View>
</View>

{/* another section */}
   <View style={{backgroundColor:'#fff',marginVertical:8}}>
       <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:10}}>
          <Text style={{marginLeft:5,fontSize:15,fontWeight:'400'}}>Recently Viewed</Text>
          <Text style={{color:'#28b67d'}}>SEE ALL</Text>
       </View>
       <View style={{paddingHorizontal:8,width:200}}>
          <Image source={require('../assets/pick4.png')}style={{width:'100%',height:250,marginBottom:10 }} resizeMode='cover'/>
          <Text style={{marginBottom:10,marginLeft:8,color:'#000',fontWeight:"300"}} numberOfLines={1}>Jameson Irish whiskey 70cl</Text>
          <Text style={{marginBottom:20,marginLeft:8,fontWeight:"500"}}>₦2,750</Text>
       </View>
   </View>
          {/* another section*/}
          <View style={{backgroundColor:'#dbdddf',paddingBottom:10,alignItems:'center',paddingTop:5}}>
          <Ionicons name="chevron-up" size={18} color="#28b67d" />
              <Pressable ><Text style={{fontSize:12}}>BACK TO TOP</Text></Pressable>
          </View>

          <View style={{backgroundColor:'#fff'}}>
              <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:15,paddingVertical:15,justifyContent:'space-between'}}>
                  <Text style={{fontSize:11,color:'#000',fontWeight:'400'}}>HELP CENTER</Text>
                  <Text style={{fontSize:11,color:'#000',fontWeight:'400'}}>CONTACT US</Text>
                  <Text style={{fontSize:11,color:'#000',fontWeight:'400'}}>TERMS AND CONDITION</Text>
                  
              </View>
              <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:15,justifyContent:'space-between',paddingBottom:15}}>
                 <Text style={{fontSize:11,color:'#000',fontWeight:'400'}}>BECOME A SELLER</Text>
                 <Text style={{fontSize:11,color:'#000',fontWeight:'400'}}>REPORT A PRODUCT</Text>
                 <Text style={{fontSize:11,color:'#000',fontWeight:'400'}}>SHIP YOUR PACKAGE</Text>
              </View>
              <View style={{backgroundColor:'#fff',alignItems:'center',paddingVertical:15,borderTopColor:'#dbdddf',borderTopWidth:0.4}}>
                  <Text style={{color:'grey'}}>All Right Reserved</Text>
              </View>
          </View>

                   </ScrollView>

                   </View>

            </View>

</SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:'#28b67d',
        paddingHorizontal:10,
        paddingVertical:15,
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:5
    },
    container1:{
       
        flexDirection:'row',
        paddingHorizontal:10,
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:10,marginBottom:10
    },
    container2:{
        shadowColor:'#d2f0e4',
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
        elevation:1,
        shadowOpacity:0.8,
        backgroundColor:'#fff',
    },
    container3:{
        backgroundColor:'#fff',paddingVertical:20,paddingHorizontal:10,flexDirection:'row',
        marginBottom:8
    },container4:{
        width:'100%',
        height:'100%',
    },
    container5:{
        flexDirection:'row',


    },
    container9:{
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
    container10:{
        fontSize:8,paddingVertical:2,paddingHorizontal:1,color:'red',backgroundColor:'#f5f3f3'
    },
    container11:{
        textDecorationLine:'line-through',fontSize:10,color:'#bfbfc2',marginRight:3
    },
    container12:{
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
    },
    corn:{
        flexDirection:'row',
        backgroundColor:'#28b67d',
        // paddingVertical:10,
        paddingHorizontal:15,
        alignItems:'center'
    },


})

export default newWay;