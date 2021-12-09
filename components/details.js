import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet, SafeAreaView,Pressable, ScrollView,Image,FlatList, DevSettings,Button,Modal} from 'react-native';
import {Ionicons } from 'react-native-vector-icons';
import {Feather } from 'react-native-vector-icons';
import {MaterialCommunityIcons } from 'react-native-vector-icons';





const ImageArray = [{id:31,imgs4:require('../assets/pw7.png')},{id:32,imgs4:require('../assets/pw.png')},{id:33,imgs4:require('../assets/sam4.png')},{id:34,imgs4:require('../assets/ant5.png')},{id:35,imgs4:require('../assets/sam6.png')},{id:36,imgs4:require('../assets/ant5.png')},{id:37,imgs4:require('../assets/sam7.png')},{id:38,imgs4:require('../assets/pw9.png')},{id:39,imgs4:require('../assets/ant5.png')},{id:40,imgs4:require('../assets/pw10.png')}]




const detailScreen =({navigation})=>{


    const ere=(<Text style={{fontSize:12,fontWeight:'500'}}>Execellent</Text>);

    const txt1=(<Text style={{fontSize:11,fontWeight:'500'}}>100%</Text>);
    const txt2=(<Text style={{fontSize:11,fontWeight:'500'}}>951</Text>);

    const Sami =()=>{
        navigation.goBack()
    }
     const write =(
         <Text style={{color:'#000',fontWeight:'500',letterSpacing:0.1}}>Free Shipping</Text>
     )

    const [countDown,setCountDown]=useState("");

    const does =[{id:2,img40:require('../assets/farn.jpg')},{id:4,img40:require('../assets/farn.jpg')},{id:6,img40:require('../assets/farn.jpg')},{id:8,img40:require('../assets/farn.jpg')},{id:10,img40:require('../assets/farn.jpg')},{id:12,img40:require('../assets/farn.jpg')},{id:14,img40:require('../assets/farn.jpg')},{id:16,img40:require('../assets/farn.jpg')},{id:18,img40:require('../assets/farn.jpg')},{id:20,img40:require('../assets/farn.jpg')},{id:22,img40:require('../assets/farn.jpg')},{id:24,img40:require('../assets/farn.jpg')},{id:26,img40:require('../assets/farn.jpg')},];


    const does1 =[{id:2,img41:require('../assets/farn.jpg')},{id:4,img41:require('../assets/flash_deal9.jpg')},{id:6,img41:require('../assets/farn.jpg')},{id:8,img41:require('../assets/farn.jpg')},{id:10,img41:require('../assets/flash_deal.jpg')},{id:12,img41:require('../assets/flash_deal8.jpg')},{id:14,img41:require('../assets/flash_deal1.jpg')},{id:16,img41:require('../assets/flash_deal6.jpg')},{id:18,img41:require('../assets/flash_deal2.jpg')},{id:20,img41:require('../assets/farn.jpg')},{id:22,img41:require('../assets/flash_deal3.jpg')},{id:24,img41:require('../assets/flash_deal5.jpg')},{id:26,img41:require('../assets/flash_deal4.jpg')},]

const DivScroll =({title})=>(
    <View style={styles.container14}>
                 <Image source={title} resizeMode="contain" style={{width:'100%',height:120,marginBottom:15}}/>
                 <Text numberOfLines={1} style={{fontSize:12,fontWeight:'300',letterSpacing:0.1,textAlign:'left',marginBottom:5}}>UMIDIGI A9 Andriod 11fg ghiofrd  </Text>
                 <Text style={{fontSize:11,fontWeight:'bold',letterSpacing:0.1}}>₦ 450</Text>
                 <Text style={{fontSize:10,fontWeight:'300',color:'grey',letterSpacing:0.1,textDecorationLine:'line-through'}}>₦ 45,000</Text>
             </View>)



const DivScroll1 =({title})=>(
    <View style={styles.container14}>
                 <Image source={title} resizeMode="contain" style={{width:'100%',height:120,marginBottom:15}}/>
                 <Text style={{fontSize:9,color:'red',backgroundColor:'#cfefe2',position:'absolute',top:7,right:10,padding:2}}>-49%</Text>
                 <Text numberOfLines={1} style={{fontSize:12,fontWeight:'300',letterSpacing:0.1,textAlign:'left',marginBottom:5}}>UMIDIGI A9 Andriod 11fg ghiofrd  </Text>
                 <Text style={{fontSize:11,fontWeight:'bold',letterSpacing:0.1}}>₦ 450</Text>
                 <Text style={{fontSize:10,fontWeight:'300',color:'grey',letterSpacing:0.1,textDecorationLine:'line-through'}}>₦ 45,000</Text>
             </View>)




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


    const wego=({item})=>(
        <DivScroll title={item.img40}/>
    )

    const wego1=({item})=>(
        <DivScroll1 title={item.img41}/>
    )


     const [opening,setOpening] = useState(false);

     const imgs5 =[{id:1,des:require('../assets/samp.jpg')},{id:2,des:require('../assets/samp.jpg')},{id:3,des:require('../assets/samp.jpg')},{id:4,des:require('../assets/samp.jpg')},{id:5,des:require('../assets/samp.jpg')},{id:6,des:require('../assets/samp.jpg')},{id:7,des:require('../assets/samp.jpg')},{id:8,des:require('../assets/samp.jpg')},{id:9,des:require('../assets/samp.jpg')}]

    
    return(
        <SafeAreaView>

        <Modal visible={opening} transparent={true}  onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setWide(wide3);
        }}>
               <View style={{ flex:1,backgroundColor:'#00000099'}}>

                  <View style={{marginTop:50,flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
                          
                         <Pressable onPress={()=>setOpening(!opening)} style={{position:'absolute',top:20,right:20}}>
                             <Ionicons name="close-outline" size={22} color="#000000" style={{marginLeft:10}}/>
                         </Pressable>

                         <ScrollView style={{position:'absolute',bottom:15}} horizontal showsHorizontalScrollIndicator={false}>
                   { imgs5.map((you)=>{return(
                         <View style={{width:80,height:80,padding:10,borderRadius:3,borderColor:'grey',borderWidth:1,marginRight:8,marginLeft:2}} key={you.id}>
                                <Image source ={you.des} style={{width:'100%',height:'100%'}} resizeMode='cover'/>
                            </View> 
                        )})}</ScrollView>


                             <Image source={require('../assets/doof2.png')} style={{width:200,height:200}} resizeMode="cover"/> 


                
                       </View>
               </View>
           </Modal> 



              <View style={styles.container}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Pressable onPress={Sami}><Ionicons name="arrow-back-sharp" size={22} color="#fff" style={{marginLeft:5}}/></Pressable>
                    <Text style={{marginLeft:14,fontSize:16,fontWeight:'700',letterSpacing:0.1,color:'#fff'}}>Details</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Pressable onPress={()=>navigation.navigate('search')}><Ionicons name="md-search" size={18} color="#fff" /></Pressable>
                    <Ionicons name="cart-outline" size={22} color="#fff" style={{marginLeft:5}}/>
                </View>
            </View>


            <ScrollView showsVerticalScrollIndicator={false}>
               

             <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
             {ImageArray.map((items4)=>{
               return(
                 <View style={{paddingVertical:10,alignItems:'center'}}>
                    <View style={styles.container1}>
                     <Pressable onPress={()=>setOpening(!opening)}><Image style={{width:200,height:200}} source={items4.imgs4} resizeMode="cover" key={items4.id}/></Pressable>
                  </View>
              </View>
               
               )} )}
               </ScrollView>


              <View style={[styles.container1,styles.container3]}>
                  <View style={[styles.container4,styles.container5]}><Text style={{fontSize:10,color:'#fff',fontWeight:'500',}}>Official Store</Text></View>
                  <Text style={{fontWeight:'300',fontSize:12,marginBottom:5,letterSpacing:0.1,color:'#000'}}>LED Complete Insecticide (Device + Refill) - Pack Of 2</Text>
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
                      <Text style={{fontSize:11,fontWeight:'300'}}>+shipping from ₦ 180 to LEKKI-AJAH(SANGOTEDO)</Text>
                      <Text style={{fontSize:10,marginLeft:5,color:'blue',fontWeight:'300'}}>See options</Text>
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
                           <Text style={{fontSize:10,color:'blue',fontWeight:'400'}}>(15 ratings)</Text>
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
                    <View style={{width:'92%'}}><Text style={{color:'#000',fontWeight:'300',letterSpacing:0.1,marginLeft:5,fontSize:12,}}>Enjoy cheaper shipping fees when you select a PickUp Station at checkout</Text></View>
                  </View>
                  <View style={{marginBottom:20,flexDirection:'row',alignItems:'center'}}>
                  <View style={{width:'8%'}}>   
                  <View style={{width:20,height:20,borderRadius:100,backgroundColor:'#28b67d',alignItems:'center',justifyContent:'center'}}><Ionicons name="star-sharp" size={15} color="#fff" /></View></View>
                    <View style={{width:'92%'}}><Text style={{color:'#000',fontWeight:'300',letterSpacing:0.1,marginLeft:5,fontSize:12}}>Get addditional 20% off with your Mastercard</Text></View>
                  </View>
                  <View style={{marginBottom:20,flexDirection:'row',alignItems:'center'}}>
                  <View style={{width:'8%'}}>  
                  <View style={{width:20,height:20,borderRadius:100,backgroundColor:'#28b67d',alignItems:'center',justifyContent:'center'}}><Ionicons name="star-sharp" size={15} color="#fff" /></View></View>
                    <View style={{width:'92%'}}><Text style={{color:'#000',fontWeight:'300',letterSpacing:0.1,marginLeft:5,fontSize:12,}}>Borrow loans up to 100,000 to make everyday life easier.no colllateral,no papperwork via jumiaPay financial partners.</Text></View>
                  </View>
                 
              </View>

              <Text style={{fontSize:11,paddingTop:15,paddingBottom:10,paddingLeft:10,color:'gray',letterSpacing:0.1}}>DELIVERY AND RETURNS INFO</Text>


              <View style={[styles.container1,styles.container3]}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Text style={{fontSize:13}}>EGORAS_M</Text>
                   <Ionicons name="paper-plane-sharp" size={12} color="#28b67d" style={{marginLeft:4}}/>
                   <Text style={{fontSize:13,marginLeft:3,color:'#28b67d'}}>EXPRESS</Text>
               </View>
               
                  <Text style={{fontSize:12,letterSpacing:0.1,fontWeight:'300',marginTop:10,marginBottom:7}}>Eligble for {write}</Text>
                  <View style={{borderWidth:0.6,width:"100%",borderColor:'#f5f3f3',marginBottom:10}}></View>
                  <Text style={{fontSize:14,fontWeight:'400',letterSpacing:0.1,color:'#000',marginBottom:10}}>Choose Location</Text>
                  <View style={{paddingHorizontal:11,paddingVertical:15,borderColor:"gray",borderWidth:0.5,borderRadius:5,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
                      <Text style={{fontSize:12,fontWeight:'400',color:'#000'}}>Lagos</Text>
                      <Ionicons name="ios-caret-down-sharp" size={12} color="#000" /> 
                  </View>
                  <View style={{paddingHorizontal:11,paddingVertical:15,borderColor:"gray",borderWidth:0.5,borderRadius:5,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
                      <Text style={{fontSize:12,fontWeight:'400',color:'#000'}}>LEKKI_AJAH(SANGOTEDO)</Text>
                      <Ionicons name="ios-caret-down-sharp" size={12} color="#000" /> 
                  </View>

                  <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                      <View style={{width:'80%'}}>
                          <View style={{flexDirection:'row'}}>
                              <View style={styles.container11}><Ionicons name="bus" size={12} color="#28b67d" /></View>
                              <View style={{marginLeft:6}}>
                                 <Text style={{color:'#000',fontSize:13,fontWeight:'500'}}>Door Delivery</Text>
                                 <Text style={{fontSize:11,fontWeight:'400',}}>Shipping  ₦430</Text>
                                   <Text  style={{fontSize:11,fontWeight:'400'}}>Delivery by 7Dec when you order within next 20hr  52mins </Text>
                               </View>
                            </View>
                      </View>
                      <View style={{width:'20%'}}><Text style={{fontSize:11,textAlign:'right',fontWeight:'300',color:'blue'}}>Details</Text></View>
                  </View>

                  <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                      <View style={{width:'80%'}}>
                          <View style={{flexDirection:'row'}}>
                              <View style={styles.container11}><Ionicons name="bus" size={12} color="#28b67d" /></View>
                              <View style={{marginLeft:6}}>
                                 <Text style={{color:'#000',fontSize:13,fontWeight:'500'}}>Pickup Station</Text>
                                 <Text style={{fontSize:11,fontWeight:'400'}}>Shipping  ₦450</Text>
                                   <Text  style={{fontSize:11,fontWeight:'400'}}>Delivery by 7Dec when you order within next 20hr  52mins </Text>
                               </View>
                            </View>
                      </View>
                      <View style={{width:'20%'}}><Text style={{fontSize:11,textAlign:'right',fontWeight:'300',color:'blue'}}>Details</Text></View>
                  </View>

                  <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                      <View style={{width:'80%'}}>
                          <View style={{flexDirection:'row'}}>
                              <View style={styles.container11}><Ionicons name="bus" size={12} color="#28b67d" /></View>
                              <View style={{marginLeft:6}}>
                                 <Text style={{color:'#000',fontSize:13,fontWeight:'500'}}>Return Policy</Text>
                                 <Text style={{fontSize:12}}>Free return within 15 days for Official store items and 7 days for other eligble items</Text> 
                               </View>
                            </View>
                      </View>
                  
                  </View>

                  <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                      <View style={{width:'80%'}}>
                          <View style={{flexDirection:'row'}}>
                              <View style={styles.container11}><Ionicons name="bus" size={12} color="#28b67d" /></View>
                              <View style={{marginLeft:6}}>
                                 <Text style={{color:'#000',fontSize:13,fontWeight:'500'}}>Warranty</Text>
                                 <Text style={{fontSize:12}}>Shipping  ₦450</Text>
                                   <Text  style={{fontSize:12}}>Delivery by 7Dec when you order within next 20hr  52mins </Text>
                               </View>
                            </View>
                      </View>
                    
                  </View>

              </View>

      <View style={{paddingLeft:10,paddingTop:15,paddingBottom:10}}><Text style={{fontSize:11,fontWeight:'300'}}>PRODUCT DETAILS</Text></View>

    <View style={{paddingHorizontal:5}}>
                  <View style={{flexDirection:'row',
            alignItems:'center',justifyContent:'space-between',paddingHorizontal:10,paddingVertical:10,backgroundColor:'#fff',borderTopLeftRadius:3,borderTopRightRadius:3}}>
                 <Text style={{fontSize:12,fontWeight:'400'}}>Description</Text>
                 <Ionicons name="ios-chevron-forward-sharp" size={12} color="#000" /> 
             </View>

              <View style={styles.container12}>
                 <Text style={{fontSize:12,fontWeight:'300'}}>- Designed for aerobic and anerobic exrcise</Text>
                 <Text style={{fontSize:12,fontWeight:'300'}}>- Physical fitness and weight loss</Text>
                 <Text style={{fontSize:12,fontWeight:'300'}}>- Can effectively build muscle,strength and tone the body</Text>
                 <Text style={{fontSize:12,fontWeight:'300'}}>- Control the tension by shortening or lengthenung the band</Text>
             </View>
             </View>

             <View style={styles.container13}><Text style={{fontSize:12,fontWeight:'400',color:'grey'}}>CUSTOMER ALSO VIEWED</Text></View>


{/* 
             <View style={styles.container14}>
                 <Image source={require('../assets/farn.jpg')} resizeMode="contain" style={{width:'100%',height:120,marginBottom:15}}/>
                 <Text numberOfLines={1} style={{fontSize:12,fontWeight:'300',letterSpacing:0.1,textAlign:'left',marginBottom:5}}>UMIDIGI A9 Andriod 11fg ghiofrd  </Text>
                 <Text style={{fontSize:11,fontWeight:'bold',letterSpacing:0.1}}>₦ 450</Text>
                 <Text style={{fontSize:10,fontWeight:'300',color:'grey',letterSpacing:0.1,textDecorationLine:'line-through'}}>₦ 45,000</Text>


             </View> */}
    

        <FlatList  
        horizontal
         data={does}
        renderItem={ wego}
        keyExtractor={item => item.id}/>

<View style={styles.container13}><Text style={{fontSize:12,fontWeight:'400',color:'grey'}}>CUSTOMER FEEDBACK</Text></View>

  


        <View  style={{paddingHorizontal:5}}>
             <View style={styles.container15}>
                 <View>
                     <Text style={{fontSize:12,fontWeight:'500',letterSpacing:0.1,marginBottom:10}}>Product Rating $ Review</Text>
                     <Text style={{fontSize:10,fontWeight:'300'}}>4.3/5  (263 rating)</Text>
                 </View>
                 <View>
                     <Ionicons name="ios-chevron-forward-sharp" size={14} color="#000" /> 
                 </View>
             </View>
    </View>


     <View style={{paddingHorizontal:5}}>
         <View style={{backgroundColor:'#fff',paddingHorizontal:8}}>
             <View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderTopWidth:0.3,borderTopColor:"grey",paddingTop:5}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Ionicons name="star-sharp" size={12} color="#e4a788" /> 
                    <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                    <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                    <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                    <Ionicons name="star-half-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                </View>
                <View><Text style={{fontSize:11,fontWeight:'300',color:'lightGrey'}}>06-12-2021 A</Text></View>
            </View>
            <Text style={{fontSize:12,fontWeight:'500',marginBottom:5,marginTop:8}}>I have mixed feeling</Text>
            <Text numberOfLines={1} style={{fontSize:11,marginBottom:10,width:'70%'}}>the phone is already hanging at less than a month old.it is not a good sign</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
                <Text  style={{fontSize:11,color:'grey',fontWeight:'300'}}>by JANET</Text>
                {/* <Text style={{fontSize:11,color:'green',fontWeight:'300'}}>Verifed Purchase</Text> */}
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <MaterialCommunityIcons  name="checkbox-marked-circle-outline" size={14} color="#e4a788" />   
                    <Text style={{fontSize:11,color:'green',fontWeight:'300',marginLeft:3}}>Verifed Purchase</Text>
                </View>
            </View>
         </View>

         <View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderTopWidth:0.3,borderTopColor:"grey",paddingTop:5}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Ionicons name="star-sharp" size={12} color="#e4a788" /> 
                    <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                    <Ionicons name="star-sharp" size={12} color="grey" style={{marginLeft:4}}/>
                    <Ionicons name="star-sharp" size={12} color="grey" style={{marginLeft:4}}/>
                    <Ionicons name="star-sharp" size={12} color="grey" style={{marginLeft:4}}/>
                 
                </View>
                <View><Text style={{fontSize:11,fontWeight:'300',color:'lightGrey'}}>06-12-2021 A</Text></View>
            </View>
            <Text style={{fontSize:12,fontWeight:'500',marginBottom:5,marginTop:8}}>I have mixed feeling</Text>
            <Text numberOfLines={1} style={{fontSize:11,marginBottom:10,width:'70%'}}>the phone is already hanging at less than a month old.it is not a good sign</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
                <Text  style={{fontSize:11,color:'grey',fontWeight:'300'}}>by PAUL</Text>
                {/* <Text style={{fontSize:11,color:'green',fontWeight:'300'}}>Verifed Purchase</Text> */}
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <MaterialCommunityIcons  name="checkbox-marked-circle-outline" size={14} color="#e4a788" />   
                    <Text style={{fontSize:11,color:'green',fontWeight:'300',marginLeft:3}}>Verifed Purchase</Text>
                </View>
            </View>
         </View>

         <View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderTopWidth:0.3,borderTopColor:"grey",paddingTop:5}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Ionicons name="star-sharp" size={12} color="#e4a788" /> 
                    <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                    <Ionicons name="star-sharp" size={12} color="#e4a788" style={{marginLeft:4}}/>
                    <Ionicons name="star-sharp" size={12} color="grey" style={{marginLeft:4}}/>
                    <Ionicons name="star-sharp" size={12} color="grey" style={{marginLeft:4}}/>
                </View>
                <View><Text style={{fontSize:11,fontWeight:'300',color:'lightGrey'}}>06-12-2021 A</Text></View>
            </View>
            <Text style={{fontSize:12,fontWeight:'500',marginBottom:5,marginTop:8}}>I have mixed feeling</Text>
            <Text numberOfLines={1} style={{fontSize:11,marginBottom:10,width:'70%'}}>the phone is already hanging at less than a month old.it is not a good sign</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
                <Text  style={{fontSize:11,color:'grey',fontWeight:'300'}}>by CHUKWUBUIKE</Text>

                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <MaterialCommunityIcons  name="checkbox-marked-circle-outline" size={14} color="#e4a788" />   
                    <Text style={{fontSize:11,color:'green',fontWeight:'300',marginLeft:3}}>Verifed Purchase</Text>
                </View>
               
            </View>
         </View>

         </View>
      </View>

      <View style={{paddingHorizontal:10,paddingTop:15,paddingBottom:10}}>
          <Text style={{fontSize:12,fontWeight:'400',color:'grey',letterSpacing:0.1}}>
              CUSTOMER ALSO BOUGHT
          </Text>
      </View>

    
      {/* <FlatList  
        horizontal
         data={does1}
        renderItem={ wego1}
        keyExtractor={item => item.id}/> */}

<ScrollView horizontal showsHorizontalScrollIndicator={false}>
     { does1.map((eat)=>{return(

   <View style={styles.container14}>
  <Image source={eat.img41} resizeMode="contain" style={{width:'100%',height:120,marginBottom:15}}/>
   <Text style={{fontSize:9,color:'red',backgroundColor:'#cfefe2',position:'absolute',top:7,right:10,padding:2}}>-49%</Text>
     <Text numberOfLines={1} style={{fontSize:12,fontWeight:'300',letterSpacing:0.1,textAlign:'left',marginBottom:5}}>UMIDIGI A9 Andriod 11fg ghiofrd  </Text>
   <Text style={{fontSize:11,fontWeight:'bold',letterSpacing:0.1}}>₦ 450</Text>
    <Text style={{fontSize:10,fontWeight:'300',color:'grey',letterSpacing:0.1,textDecorationLine:'line-through'}}>₦ 45,000</Text>
  </View>

)})  }

</ScrollView>

        <View style={{paddingHorizontal:10,paddingTop:15,paddingBottom:10}}>
            <Text style={{color:'grey',fontSize:12}}>SELLER INFORMATION</Text>
        </View>
   <View style={{paddingHorizontal:10,backgroundColor:'#fff'}}> 
        <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#fff',paddingTop:8}}>
           <Text style={{color:'#000',fontSize:12,letterSpacing:0.1}}>Pernod Ricard</Text>
           <Ionicons name="md-chevron-forward-outline" size={12} color="#e4a788" /> 
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:10,borderTopColor:'grey',borderTopWidth:0.3,marginTop:10}}>
            <View>
                <Text style={{fontSize:11}}>{txt1}  Seller Score</Text>
                <Text style={{fontSize:11}}>{txt2}  Followers</Text>
            </View>
            <View style={{paddingVertical:7,paddingHorizontal:4,backgroundColor:'#28b67d',borderRadius:3,}}>
               <Text style={{color:'#fff',fontSize:10,fontWeight:'500'}}> FOLLOW</Text>
         
            </View>
        </View>
      <View style={{borderTopColor:'grey',borderTopWidth:'0.3'}}>
        <View style={{marginTop:10,marginBottom:15}}>
            <Text>Seller Performance</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',marginBottom:10}}>
            <View style={{padding: 5,backgroundColor:'#28b67d',borderRadius:100}}><Ionicons name="star-sharp" size={12} color="#fff" /></View>
            <Text style={{marginLeft:5,fontSize:12,fontWeight:'300'}}>Order Fulfillment Rate: {ere} </Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',marginBottom:10}}>
            <View style={{padding: 5,backgroundColor:'#28b67d',borderRadius:100}}><Ionicons name="star-sharp" size={12} color="#fff" /></View>
            <Text style={{marginLeft:5,fontSize:12,fontWeight:'300'}}>Order Score: {ere}</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',marginBottom:10}}>
            <View style={{padding: 5,backgroundColor:'#28b67d',borderRadius:100}}><Ionicons name="star-sharp" size={12} color="#fff" /></View>
            <Text style={{marginLeft:5,fontSize:12,fontWeight:'300'}}>Customer Rating: {ere}</Text>
        </View>
      </View>

        <View style={{borderTopWidth:0.3,borderTopColor:'grey'}}>

        <View style={{alignItems:'center'}}>
           <View style={styles.container16}>
           {/* <View style={{width:200,height:180}}><Image source={require('../assets/sec.png')} resizeMode={['center']} style={{ flex:1,width:'100%',height:'100%', }}/></View> */}
            <View style={styles.container17}>
                <Image source={require('../assets/ca.jpg')} style={{width:100,height:100,marginBottom:20}} resizeMode='contain'/>
                <Text style={{fontSize:10,textAlign:'center',marginBottom:5,fontWeight:'300',color:'#000',letterSpacing:0.1}}>Triple Protection Toothpaste Cavity Fighter 140g</Text>
                {/* <Text style={{fontSize:12,fontWeight:Platform.OS === 'ios'? '600' : '800'}}>₦250</Text> */}
            </View>
            <View style={styles.container18}>
            <Image source={require('../assets/ca1.jpg')} style={{width:100,height:100,marginBottom:20}} resizeMode='contain'/>
            <Text style={{fontSize:10,textAlign:'center',marginBottom:5,fontWeight:'300',color:'#000',letterSpacing:0.1}}>Multi-Purpose Washing Liquid Lemon 1l</Text>
            {/* <Text style={{fontSize:12,fontWeight:Platform.OS === 'ios'? '600' : '800'}}>₦380</Text> */}
            </View>
           </View>
           <View style={styles.container16}>
           {/* <View style={{width:200,height:180}}><Image source={require('../assets/sec.png')} resizeMode={['center']} style={{ flex:1,width:'100%',height:'100%', }}/></View> */}
            <View  style={styles.container19}>
            <Image source={require('../assets/ca2.jpg')} style={{width:100,height:100,marginBottom:20}} resizeMode='contain'/>
            <Text style={{fontSize:10,textAlign:'center',marginBottom:5,fontWeight:'300',color:'#000',letterSpacing:0.1}}>@in1 Tropical Sensations Handwash Washing Pow...</Text>
            {/* <Text style={{fontSize:12,fontWeight:Platform.OS === 'ios'? '600' : '800'}}>₦555</Text> */}
            </View>
            <View style={styles.container20}>
            <Image source={require('../assets/ca3.jpg')} style={{width:100,height:100,marginBottom:20}} resizeMode='contain'/>
            <Text style={{fontSize:10,textAlign:'center',marginBottom:5,fontWeight:'300',color:'#000',letterSpacing:0.1}}>Protect Handwashing Detergent Powder - 900g</Text>
            {/* <Text style={{fontSize:12,fontWeight:Platform.OS === 'ios'? '600' : '800'}}>₦499</Text> */}
            </View>
           </View>
          </View>
        </View>
   </View>

 <View style={{backgroundColor:'#fff',paddingVertical:12,paddingHorizontal:10,marginBottom:15}}><Text style={{color:'#000',fontSize:12,fontWeight:'300'}}>Report incorrect product information</Text></View>

<View style={{paddingHorizontal:10,paddingBottom:10}}>
    <Text style={{fontSize:12,fontWeight:'400',letterSpacing:0.1,color:'grey'}}>SPONSORED PRODUCTS</Text>
</View>

{/* <FlatList  
        horizontal
         data={does1}
        renderItem={ wego1}
        keyExtractor={item => item.id}/> */}


<ScrollView horizontal showsHorizontalScrollIndicator={false}>
     { does1.map((eat)=>{return(

   <View style={styles.container14}>
  <Image source={eat.img41} resizeMode="contain" style={{width:'100%',height:120,marginBottom:15}}/>
   <Text style={{fontSize:9,color:'red',backgroundColor:'#cfefe2',position:'absolute',top:7,right:10,padding:2}}>-49%</Text>
     <Text numberOfLines={1} style={{fontSize:12,fontWeight:'300',letterSpacing:0.1,textAlign:'left',marginBottom:5}}>UMIDIGI A9 Andriod 11fg ghiofrd  </Text>
   <Text style={{fontSize:11,fontWeight:'bold',letterSpacing:0.1}}>₦ 450</Text>
    <Text style={{fontSize:10,fontWeight:'300',color:'grey',letterSpacing:0.1,textDecorationLine:'line-through'}}>₦ 45,000</Text>
  </View>

)})  }

</ScrollView>


<View style={{paddingHorizontal:10,paddingBottom:10,paddingTop:15,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
    <Text style={{fontSize:12,fontWeight:'400',letterSpacing:0.1,color:'#000'}}>RECENTLY VIEWED</Text>
    <Text style={{fontSize:12,color:'green'}}>SEE ALL</Text>
</View>

{/* <FlatList  
        horizontal
         data={does1}
        renderItem={ wego1}
        keyExtractor={item => item.id}/> */}




<ScrollView horizontal showsHorizontalScrollIndicator={false}>
     { does1.map((eat)=>{return(

   <View style={styles.container14}>
  <Image source={eat.img41} resizeMode="contain" style={{width:'100%',height:120,marginBottom:15}}/>
   <Text style={{fontSize:9,color:'red',backgroundColor:'#cfefe2',position:'absolute',top:7,right:10,padding:2}}>-49%</Text>
     <Text numberOfLines={1} style={{fontSize:12,fontWeight:'300',letterSpacing:0.1,textAlign:'left',marginBottom:5}}>UMIDIGI A9 Andriod 11fg ghiofrd  </Text>
   <Text style={{fontSize:11,fontWeight:'bold',letterSpacing:0.1}}>₦ 450</Text>
    <Text style={{fontSize:10,fontWeight:'300',color:'grey',letterSpacing:0.1,textDecorationLine:'line-through'}}>₦ 45,000</Text>
  </View>

)})  }

</ScrollView>
             
  
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
         borderRadius:5,
         backgroundColor:'#fff',
        //  width:'100%',
         padding: 20,
         marginRight:10,
         marginLeft:2
       
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
// container10:{
//     height:260,
// },
container11:{
    padding:10,borderRadius:3,backgroundColor:'#fff',
    shadowColor:'grey',
         shadowOffset:{width:0,height:2},
         shadowRadius:8,
         elevation:1,
         shadowOpacity:0.8,
         alignSelf:'flex-start'
},
container12:{
  backgroundColor:'#fff',
  paddingHorizontal:10,
  paddingVertical:15,borderTopColor:'grey',
  borderTopWidth:0.3,
  borderBottomLeftRadius:3,
  borderBottomRightRadius:3,
},
container13:{
    paddingHorizontal:10,
    paddingTop:15,
    paddingBottom:10
},
container14:{
    paddingHorizontal:10,
    paddingVertical:10,
    borderRadius:3,
    backgroundColor:'#fff',
    width:150,
    marginRight:10
    
},container15:{
  flexDirection:'row' ,
  justifyContent:'space-between',
  backgroundColor:'#fff',
  padding:10,
  alignItems:'center',


},
container16:{
    flexDirection:'row',
    alignItems:'center',
 //    width:'100%'
    
  },
 
   container17:{
     width:"48%",height:180,
     borderRightColor:'#d7d7d7',
     borderRightWidth:0.5,
     borderBottomColor:'#d7d7d7',
     borderBottomWidth:0.5,
    //  borderLeftColor:'#e6e6e6',
    //  borderLeftWidth:0.5,
     alignItems:'center',
     paddingTop:12,
     paddingHorizontal:4
   },
   container18:{
    width:"48%",height:180,
    borderLeftColor:'#d7d7d7',
    borderLeftWidth:0.5,
    borderBottomColor:'#d7d7d7',
    borderBottomWidth:0.5,
    // borderRightColor:'#e6e6e6',
    // borderRightWidth:0.5,
    alignItems:'center',
    paddingTop:12,
    paddingHorizontal:4
   
  },

  container19:{
    width:"48%",height:180,
    borderRightColor:'#d7d7d7',
    borderRightWidth:0.5,
    borderBottomColor:'#e6e6e6',
    borderBottomWidth:0.5,
    // borderLeftColor:'#e6e6e6',
    // borderLeftWidth:0.5,
    alignItems:'center',
    paddingTop:12,
    paddingHorizontal:4
  },
  container20:{
    width:"48%",height:180,
    borderLeftColor:'#d7d7d7',
    borderLeftWidth:0.5,
    borderBottomColor:'#e6e6e6',
    borderBottomWidth:0.5,
    // borderRightColor:'#e6e6e6',
    // borderRightWidth:0.5,
    alignItems:'center',
    paddingTop:12,
    paddingHorizontal:4
   
  },
  container28:{
      backgroundColor:'green',
      paddingVertical:8,
      paddingHorizontal:10,
      flexDirection:'row',
      position:'absolute',
      bottom:0,
      left:0,
      right:0,zIndex:8

      
  }
})

export default detailScreen;