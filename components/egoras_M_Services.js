
import React,{useState} from 'react';
import {View,Text,StyleSheet, SafeAreaView,Pressable, ScrollView,Modal,Image} from 'react-native';
import {Ionicons } from 'react-native-vector-icons';
import {AntDesign } from 'react-native-vector-icons';
import {Feather } from 'react-native-vector-icons';
import Video from 'react-native-video';
import Video1 from './video'


const egoras_M_services =({navigation})=>{

    const [wide4,setWide4] =useState(false);
    const text1= <Text style={{color:'#28b67d',fontWeight:'700'}}>EGORAS_M</Text>
          
        const Div =[{id:1,test1:'Egoras Market Prime'},{id:2,test1:'Pay Airtime & Bills'},{id:3,test1:'Pay Electricity Bills'},{id:4,test1:'Pay Internet Bills'},{id:5,test1:'Buy Data'},{id:6,test1:'Borrow Money'},{id:7,test1:'Egoras Market food'},{id:8,test1:'sell on Egoras Market'},{id:9,test1:'contact Us'}]


        const DivCircle = (
            <View style={{padding:8,borderRadius:100,backgroundColor:'#28b67d'}}>
                 <Ionicons name="star-sharp" size={20} color="#000" style={{marginLeft:5}}/>
            </View>
        )

const Swap =[{id:3,img:require('../assets/ant.png')},{id:4,img:require('../assets/ant1.png')}];

const Swap2 =[{id:1,img:require('../assets/ant.png')},{id:2,img:require('../assets/apple3.jpg')},{id:3,img:require('../assets/apple.jpg')},{id:4,img:require('../assets/apple4.jpg')},{id:5,img:require('../assets/ant4.png')},{id:6,img:require('../assets/ant5.png')},{id:7,img:require('../assets/apple5.jpg')},{id:8,img:require('../assets/apple8.jpg')},{id:9,img:require('../assets/apple6.jpg')},{id:10,img:require('../assets/ant1.png')}]


    return(
        <SafeAreaView>
    

              
          
    <Modal visible={wide4} >
                   <View style={{flex:1,backgroundColor:'#d2f0e4',marginTop:50}}>

                       {/* first view header */}
                       <View style={{flexDirection:'row',alignItems:'center',paddingVertical:15,backgroundColor:'#28b67d',paddingHorizontal:10}}>
                          <Pressable onPress={()=>setWide4(!wide4)}><Ionicons name="close-outline" size={22} color="#fff"  /></Pressable>

                          <View>
                              <Text style={{marginLeft:20,color:'#fff',fontSize:14,fontWeight:'600'}}><Ionicons name="lock-closed" size={18} color="#fff"/> Egorasmarket.com</Text>
                          </View>
                       </View>
                       
                       {/* main header menu */}
                       {/* <View style={{flexDirection:'row',paddingHorizontal:10,justifyContent:'space-between',backgroundColor:'#fff',alignItems:'center',paddingVertical:10}}> */}

                        <View style={[styles.container1,styles.container2]}>
                           <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Ionicons name="menu" size={22} color="#000000"  />
                               <Text style={{marginLeft:5,fontSize:16,fontWeight:'700',letterSpacing:0.1,color:'#28b67d'}}>EGORAS_M</Text>
                           </View>
                           <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Ionicons name="search" size={19} color="#000000" style={{marginLeft:5}}/>
                            <Ionicons name="person-outline" size={22} color="#000000" style={{marginLeft:5}}/>
                            <Ionicons name="ios-cart-outline" size={22} color="#000000" style={{marginLeft:5}}/>
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
                                  <Text style={{position:'absolute',top:18,right:5,color:'red',backgroundColor:'#28b67d',fontSize:9,paddingVertical:4,paddingHorizontal:2}}>-25%</Text>
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
                                  <Text style={{position:'absolute',top:18,right:5,color:'red',backgroundColor:'#28b67d',fontSize:9,paddingVertical:4,paddingHorizontal:2}}>-25%</Text>
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
                                  <Text style={{position:'absolute',top:18,right:5,color:'red',backgroundColor:'#28b67d',fontSize:9,paddingVertical:4,paddingHorizontal:2}}>-25%</Text>
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
                                  <Text style={{position:'absolute',top:18,right:5,color:'red',backgroundColor:'#28b67d',fontSize:9,paddingVertical:4,paddingHorizontal:2}}>-25%</Text>
                             </View>))
                             }
                             </ScrollView>
                        </View>

                          {/* another section three map  vertical*/} 

                          <View style={{backgroundColor:'#fff',padding:6}}>
                              <Text style={{color:'#000',paddingLeft:7,fontWeight:'500',fontSize:15}}>Benefits of Egoras_M Prime</Text>

                              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                  <Image source={require('../assets/samp.jpg')} resizeMode="contain"style={{width:'47%',height:200,borderRadius:5}}/>
                                  <Image source={require('../assets/samp.jpg')} resizeMode="contain" style={{width:'47%',height:200,borderRadius:5}}/>
                              </View>
                          </View>

                          <View style={{backgroundColor:'#fff',padding:6,marginTop:9}}>
                          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                  <Image source={require('../assets/samp2.jpg')} resizeMode="contain"style={{width:'47%',height:200,borderRadius:5}}/>
                                  <Image source={require('../assets/samp3.jpg')} resizeMode="contain" style={{width:'47%',height:200,borderRadius:5}}/>
                              </View>
                            </View>

                            <View style={{backgroundColor:'#fff',padding:6,marginTop:9}}>
                          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                  <Image source={require('../assets/samp4.jpg')} resizeMode="contain"style={{width:'47%',height:200,borderRadius:5}}/>
                                  <Image source={require('../assets/samp5.jpg')} resizeMode="contain" style={{width:'47%',height:200,borderRadius:5}}/>
                              </View>
                            </View>
                             
                             {/* another section two map horizontal */}

                             <ScrollView style={{backgroundColor:'#fff',paddingVertical:5,paddingHorizontal:10,marginVertical:7}} horizontal showsHorizontalScrollIndicator={false}>
                            { Swap.map((seed)=>(
                            <Image source={seed.img}   style={{height:150,marginRight:5}} resizeMethod="cover"/>))
                        }
                      </ScrollView >

                   <View style={{padding:4,backgroundColor:'#fff',height:300}}>
                      {/* <Video source={{uri: "https://youtu.be/5g8XkN10ScU"}}   
                                 
                        style={styles.container4} /> */}

                        {/* <Video1/> */}
                            

                        </View>


                             <View style={{width:'85%',height:200}}>
                                 <Image source={require('../assets/ant.png')} resizeMode='cover' style={{
                                     width:'100%',height:200
                                 }}/>
                             </View>

                             {/* video section */}

                             <View>
                                 <View>
                                     <Text>More details</Text>
                                     <Text>1. Egoras_M Prime lifetime membership incoperates ten annual</Text>
                                     <Text>2. Egoras_M Prime lifetime membership is awarded exceptionally(it cannot be purchased</Text>
                                     <Text>3. Egoras_M may,at any time and entirely in its discretin,revoke Egoras_M Prime lifetime membership ,subject to compensation of the subscription value (based on prices at the time of revocation) for the remaining duration of the year membership term.</Text>
                                     <Text>4. All Egoras_M Prime Terms and Conditions(including exclusion of professinal use) shall apply to lifetime members.In the event of a lifetime member's violation of these Egoras_M Prime Terms and Conditions or any application laws,Egoras_M shall revoke membership without any compensation</Text>
                                     <Text>5. More discounts,rewards and savings</Text>
                                     <Text>6. Egoras_M Prime is a customer loyalty program that entities users to subscribe and receive unlimited free delivery on all Egoras_M orders, as well as access to exclusive promotions,rewards and partner benfits</Text>
                                     <Text>7. Egoras_M Prime is  available in selected cities and can be purchased via selected prepayment methods</Text>
                                     <Text>8. Egoras_M Prime  Members enjoy the following benefits :</Text>
                                        <Text> - Free Delivery on all jumia orders(excluding bulky items and international shipping)
                                     </Text>
                                     <Text>
                                         - Free Delivery on Egoras_M Food Order
                                     </Text>
                                     <Text>-Exlusive Prime-only discounts on favorite categories  </Text>
                                     <Text>-Preferential Customer Service</Text>
                                     <Text>9. Egoras_M is designed with the frequest shopper in mind. it is is not available for professional usage  including corporate accounts or J-Force agents. Prime Members placing more than 20 orders for Egoras_M  mail and 40 orders for Egoras_M foood per month will be deemed as professional user</Text>
                                      <Text>10. Reveal is not automatic,but can be re-purchased following the expiry of the original  Membership plan </Text>
                                      <Text>11. Egoras_M Prime free delivery applies specifically to non-bulky items. it does not include items shipped from oversea with the jumia Global tag.</Text>
                                 </View>

                                   <Text>EGORAS_M PRIME</Text>
                             </View>
                   </ScrollView>

                   </View>

            </Modal>


  
            <View style={styles.container}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Pressable onPress={()=>navigation.goBack()}><Ionicons name="arrow-back-sharp" size={22} color="#fff" style={{marginLeft:5}}/></Pressable>
                    <Text style={{marginLeft:14,fontSize:16,fontWeight:'700',letterSpacing:0.1,color:'#fff'}}>Egoras Market Services</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Pressable onPress={()=>navigation.navigate('search')}><Ionicons name="md-search" size={18} color="#fff" style={styles.container2}/></Pressable>
                    <Ionicons name="cart-outline" size={22} color="#fff" style={{marginLeft:5}}/>
                </View>
            </View>
            <ScrollView >
                 <Text style={{PaddingTop:15,paddingHorizontal:10,paddingBottom:10}}>DISCOVER OUR SERVICES</Text>

                 <View style={{paddingHorizontal:5}}> 
                     <View style={{backgroundColor:'#fff',paddingHorizontal:10,paddingVertical:15}}>

                     

                 {
                     Div.map((letter)=>{
                         return(
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:20}} key={letter.id}>
                            <Pressable onPress={()=>setWide4(!wide4)}>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                   {/* <Feather name="mail" size={22} color="#28b67d"  /> */}
                                   <View style={{width:20,height:20,borderRadius:50,backgroundColor:'#28b67d',justifyContent:'center',alignItems:'center'}}>
                                       <Ionicons name="star-sharp" size={14} color="#fff" style={{marginLeft:1}} />
                                   </View>
                                 
                                   <Text style={{fontSize:14,fontWeight:'400',letterSpacing:0.1,marginLeft:10,color:'#000'}}>{letter.test1}</Text>
                                </View>
                            </Pressable>
                            <Pressable onPress={()=>setWide4(!wide4)} >
                                <AntDesign name="right" size={15} color="grey" style={{marginLeft:5}} />
                            </Pressable>
                        </View>
                         )
                     })
                 }
                

                   


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
        shadowColor:'grey',
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
    }



})

export default egoras_M_services;