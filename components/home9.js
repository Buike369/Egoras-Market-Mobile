import React from 'react';
import {View,Text,StyleSheet,Pressable,SafeAreaView, ScrollView,Image, TouchableOpacity, TouchableNativeFeedback} from 'react-native';
import {Ionicons } from 'react-native-vector-icons';
import { 
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic 
  } from '@expo-google-fonts/roboto';
  import {useFonts} from 'expo-font';
  import AppLoading from 'expo-app-loading';


   


     const outPut=[{id:1,img:require('../assets/apple.jpg'),text:-45,text1:'1,890'},{id:2,img:require('../assets/apple1.jpg'),text:-40,text1:'1,260'},{id:3,img:require('../assets/apple2.jpg'),text:-75,text1:'2,890'},{id:4,img:require('../assets/apple3.jpg'),text:-25,text1:'4,896'},{id:5,img:require('../assets/apple4.jpg'),text:-35,text1:'890'},{id:6,img:require('../assets/apple5.jpg'),text:-15,vtext1:'1,890'},{id:7,img:require('../assets/apple6.jpg'),text:-27,text1:'5,090'},{id:8,img:require('../assets/apple7.jpg'),text:-45,text1:'1,830'},{id:9,img:require('../assets/apple8.jpg'),text:-15,text1:'1,200'}]




    const output4=[{id:1,img:require('../assets/samp.jpg'),img1:require('../assets/samp1.jpg')},{id:2,img:require('../assets/samp3.jpg'),img1:require('../assets/samp4.jpg')},{id:3,img:require('../assets/samp5.jpg'),img1:require('../assets/samp6.jpg')},
    {id:4,img:require('../assets/samp7.jpg'),img1:require('../assets/samp8.jpg')},{id:5,img:require('../assets/samp9.jpg'),img1:require('../assets/samp10.jpg')},{id:6,img:require('../assets/samp11.jpg'),img1:require('../assets/samp12.jpg')},{id:7,img:require('../assets/samp13.jpg'),img1:require('../assets/samp.jpg')},{id:8,img:require('../assets/samp1.jpg'),img1:require('../assets/samp2.jpg')},{id:9,img:require('../assets/samp3.jpg'),img1:require('../assets/samp4.jpg')},{id:10,img:require('../assets/samp5.jpg'),img1:require('../assets/samp5.jpg')},{id:11,img:require('../assets/samp6.jpg'),img1:require('../assets/samp7.jpg')},{id:12,img:require('../assets/samp8.jpg'),img1:require('../assets/samp9.jpg')},{id:13,img:require('../assets/samp10.jpg'),img1:require('../assets/samp11.jpg')},{id:14,img:require('../assets/samp12.jpg'),img1:require('../assets/samp11.jpg')}]



     const outPut2=[{id:1,img:require('../assets/apple8.jpg'),text:-45,text1:'1,890'},{id:2,img:require('../assets/apple7.jpg'),text:-40,text1:'1,260'},{id:3,img:require('../assets/apple6.jpg'),text:-75,text1:'2,890'},{id:4,img:require('../assets/apple5.jpg'),text:-25,text1:'4,896'},{id:5,img:require('../assets/apple4.jpg'),text:-35,text1:'890'},{id:6,img:require('../assets/apple3.jpg'),text:-15,vtext1:'1,890'},{id:7,img:require('../assets/apple2.jpg'),text:-27,text1:'5,090'},{id:8,img:require('../assets/apple1.jpg'),text:-45,text1:'1,830'},{id:9,img:require('../assets/apple.jpg'),text:-15,text1:'1,200'}]
   
     const outPut1 =[{id:1,service:require('../assets/pw.png'),service1:require('../assets/pw1.png'),service2:require('../assets/pw2.png'),},{id:1,service:require('../assets/pw4.png'),service1:require('../assets/pw5.png'),service2:require('../assets/pw6.png')},{id:1,service:require('../assets/pw7.png'),service1:require('../assets/pw8.png'),service2:require('../assets/pw9.png')},{id:1,service:require('../assets/pw.png'),service1:require('../assets/pw1.png'),service2:require('../assets/pw2.png')}]

const Stake5 =({navigation})=>{

    const homeBack5 =()=>{
        navigation.goBack()
    }

    let [fontsLoaded, error ]=useFonts({
       
        Roboto_100Thin,
        Roboto_100Thin_Italic,
        Roboto_300Light,
        Roboto_300Light_Italic,
        Roboto_400Regular,
        Roboto_400Regular_Italic,
        Roboto_500Medium,
        Roboto_500Medium_Italic,
        Roboto_700Bold,
        Roboto_700Bold_Italic,
        Roboto_900Black,
        Roboto_900Black_Italic 
      })



  if(!fontsLoaded){
    return <AppLoading/>
    }
    return(
       <SafeAreaView>
        <View style={styles.container}>
           <View style={{flexDirection:'row',alignItems:'center'}}>
              <Pressable onPress={homeBack5}><Ionicons name="arrow-back-sharp" size={22} color="#fff" style={{marginLeft:5}}/></Pressable>
              <Text style={{marginLeft:14,fontSize:16,fontWeight:'700',letterSpacing:0.1,color:'#fff'}}>EGORAS Market</Text>
           </View>
          <View style={{flexDirection:'row',alignItems:'center'}}>
             <Ionicons name="md-search" size={18} color="#fff" />
             <Ionicons name="cart-outline" size={22} color="#fff" style={{marginLeft:5}}/>
         </View>
    </View>

    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.container1,styles.container3]}>
            <View style={{flex:1}}><Image source={require('../assets/orange.png')}  style={{height:160,width:'100%'}} resizeMode="contain" /></View>
            <View style={{flex:1}} ><Image source={require('../assets/orange1.png')} style={{height:160,width:'100%'}}  resizeMode="contain" /></View>
        </View>

        <View style={[styles.container1,styles.container2]}>
            <View style={{flex:1}}><Image source={require('../assets/orange2.png')}  style={{height:90,width:'100%'}} resizeMode="contain" /></View>
            <View style={{flex:1}} ><Image source={require('../assets/orange3.jpg')} style={{height:90,width:'100%'}}  resizeMode="contain" /></View>
        </View>


      <View style={{paddingHorizontal:8,paddingTop:10,paddingBottom:1}}>
          <View style={{backgroundColor:'#fff'}}>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <View style={styles.container14}>
                        <Text  style={{fontSize:11,fontWeight:'500',letterSpacing:0.1,color:'#000'}}>06.00pm</Text>
                        <Text  style={{fontSize:9,fontWeight:'300',letterSpacing:0.1,color:'#000'}}>Today</Text>
                  </View>
                  <View style={styles.container14}>
                        <Text style={{fontSize:11,fontWeight:'500',letterSpacing:0.1,color:'#000'}}>12.00pm</Text>
                        <Text style={{fontSize:9,fontWeight:'300',letterSpacing:0.1,color:'#000'}}>wed Dec 15</Text>
                  </View>
                  <View style={styles.container14}>
                        <Text style={{fontSize:11,fontWeight:'500',letterSpacing:0.1,color:'#000'}}>06.00pm</Text>
                        <Text style={{fontSize:9,fontWeight:'300',letterSpacing:0.1,color:'#000'}}>wed Dec 15</Text>
                  </View>
                  <View style={styles.container14}>
                       <Text style={{fontSize:11,fontWeight:'500',letterSpacing:0.1,color:'#000'}}>12.00pm</Text>
                       <Text style={{fontSize:9,fontWeight:'300',letterSpacing:0.1,color:'#000'}}>Today</Text>
                  </View>
              </View>
              <Text style={{fontSize:11,fontWeight:'400',marginTop:20,paddingHorizontal:10,marginBottom:5,color:'#000'}}>Starts in 06d : 20h : 54m</Text>
          </View>
      </View>


        <View style={{paddingTop:10,paddingHorizontal:8,paddingBottom:0}}>
            <View style={styles.container13}>
               <View style={{flexDirection:'row'}}>
                  <View>
                     <Image source={require('../assets/apple3.jpg')} style={{width:150,height:150}} resizeMode='contain' />
                     <View style={{width:40,padding:3,borderRadius:10,backgroundColor:'#28b67d',position:'absolute',bottom:0,alignItems:'center'}}><Text style={{color:'#fff',fontSize:10,fontWeight:'600',}}>1 unit</Text></View>
                  </View>
                  <View >
                      <View style={{marginLeft:10,marginTop:40}}>
                        <Text style={{fontSize:12,color:'#000',fontWeight:'300'}}>NGN 200k Voucher</Text>
                        <Text style={{fontSize:13,color:'#000',fontWeight:'500',marginBottom:10}}>??? 2,030</Text>
                       <Text style={{fontSize:12,color:'#000',fontWeight:'400'}}>Search:</Text>
                       <Text style={{fontSize:13,color:'#000',fontWeight:'400'}}>Home $ Kitchen</Text>
                      </View>
                  </View>
              </View>
            <TouchableOpacity activeOpacity={0.5} ><View style={{width:70,paddingVertical:6,paddingHorizontal:5,borderRadius:3,backgroundColor:'#28b67d',alignItems:'center'}}><Text style={{color:'#fff',fontSize:13}}>HUNT</Text></View></TouchableOpacity>
            </View>
      </View>


      <View style={{paddingVertical:10,paddingHorizontal:8}}>
            <View style={styles.container13}>
               <View style={{flexDirection:'row'}}>
                  <View>
                     <Image source={require('../assets/apple.jpg')} style={{width:150,height:150}} resizeMode='contain' />
                     <View style={{width:40,padding:3,borderRadius:10,backgroundColor:'#e4a788',position:'absolute',bottom:0,alignItems:'center'}}><Text style={{color:'#fff',fontSize:10,fontWeight:'600',}}>1 unit</Text></View>
                  </View>
                  <View >
                      <View style={{marginLeft:10,marginTop:40}}>
                        <Text style={{fontSize:12,color:'#000',fontWeight:'300'}}>NGN 200k Voucher</Text>
                        <Text style={{fontSize:13,color:'#000',fontWeight:'500',marginBottom:10}}>??? 2000</Text>
                       <Text style={{fontSize:12,color:'#000',fontWeight:'400'}}>Search:</Text>
                       <Text style={{fontSize:13,color:'#000',fontWeight:'400'}}>Home $ Kitchen</Text>
                      </View>
                  </View>
              </View>
            <TouchableOpacity activeOpacity={0.5} ><View style={{width:70,paddingVertical:6,paddingHorizontal:5,borderRadius:3,backgroundColor:'#e4a788',alignItems:'center'}}><Text style={{color:'#fff',fontSize:13}}>HUNT</Text></View></TouchableOpacity>
            </View>
      </View>





       <View style={{backgroundColor:'#fff',paddingVertical:8}}>
           <Text style={{marginBottom:7}}>Top Deals</Text>
         <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}> 
              {outPut.map((imt)=>{

              return(
                <View style={styles.container4}>
                <Image source={imt.img} resizeMode="contain" style={{width:'100%',height:120,marginBottom:15}}/>
                <Text numberOfLines={1} style={{fontSize:12,fontWeight:'300',letterSpacing:0.1,textAlign:'left',marginBottom:5}}>UMIDIGI A9 Andriod 11fg ghiofrd  </Text>
                <Text style={{fontSize:11,fontWeight:'bold',letterSpacing:0.1}}>??? {imt.text1}</Text>
                <Text style={styles.container5}>{imt.text}</Text>
            </View>
              )
           })
         
            }
            </ScrollView>
        </View>

        <View  style={styles.container6}>
            <Text style={{fontSize:14,fontFamily:'Roboto_400Regular',color:'#000',letterSpacing:0.1}}>Featured Categories</Text>
        </View>
        <View style={{backgroundColor:"#fff"}}>

   {
     outPut1.map((seem)=>{return(
       
        <View style={styles.container7}>

        <Pressable onPress={()=>navigation.navigate('City2')}>
<View style={{alignItems:'center'}}>
<Image source={seem.service} style={{width:70,height:40,marginBottom:10}}/>
<Text style={{fontSize:9,fontWeight:'300'}}>Health & Beauty</Text>
</View>
        </Pressable>
       <View style={{alignItems:'center'}}>
         <Image source={seem.service1} style={{width:70,height:40,marginBottom:10}}/>
         <Text style={{fontSize:9,fontWeight:'300'}}>Phone Deals</Text>
      </View>
      <View style={{alignItems:'center'}}>
         <Image source={seem.service2} style={{width:70,height:40,marginBottom:10}}/>
         <Text style={{fontSize:9,fontWeight:'300'}}>Fashion Deals</Text>
             </View>
<View style={{alignItems:'center'}}>
<Image source={require('../assets/pw2.png')} style={{width:70,height:40,marginBottom:10}}/>
<Text style={{fontSize:9,fontWeight:'300'}}>Supermarket</Text>
   </View>   
       </View> 


     )})
       
  }
    
 </View>

{/* 
<View style={{backgroundColor:'#fff',paddingVertical:10,marginTop:8}}>
    <View style={{alignItems:'center'}}>
        <Text style={{fontSize:13,marginBottom:10,letterSpacing:0.1,fontFamily:'Roboto_400Regular'}}>Official Store</Text>
    </View>

    <View style={styles.container7}>
          <View style={{alignItems:'center'}}>
            <Image source={require('../assets/sam.png')} style={{width:70,height:40,marginBottom:5}}/>
           
          </View>
          <View style={{alignItems:'center'}}>
             <Image source={require('../assets/sam1.png')} style={{width:70,height:40,marginBottom:5}}/>
             
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/sam2.png')} style={{width:70,height:40,marginBottom:5}}/>
             
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/sam4.png')} style={{width:70,height:40,marginBottom:5}}/>
             
          </View>   
      </View>

     

      <View style={styles.container7}>
          <View style={{alignItems:'center'}}>
            <Image source={require('../assets/sam.png')} style={{width:70,height:40,marginBottom:2}}/>
         
          </View>
          <View style={{alignItems:'center'}}>
             <Image source={require('../assets/sam1.png')} style={{width:70,height:40,marginBottom:2}}/>
        
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/sam2.png')} style={{width:70,height:40,marginBottom:2}}/>
            
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/sam4.png')} style={{width:70,height:40,marginBottom:2}}/>
             
          </View>   
      </View>

      </View> */}

{/* 
     <View>
        <View>
            <Text>Adidas  Official Store</Text>
            <Text>SEE ALL</Text>
        </View>

      </View> */}
     
     <View style={{backgroundColor:'#fff',paddingVertical:8,marginTop:8}}>
         <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:15,paddingHorizontal:10}}>
             <Text>Adidas Official Store</Text>
             <Text style={{fontSize:10,fontWeight:'400',letterSpacing:0.1,color:'red'}}>SEE ALL</Text>
         </View>
          
         <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}> 
              {outPut.map((imt)=>{

              return(
                <View style={styles.container4}>
                <Image source={imt.img} resizeMode="contain" style={{width:'100%',height:120,marginBottom:15}}/>
                <Text numberOfLines={1} style={{fontSize:12,fontWeight:'300',letterSpacing:0.1,textAlign:'left',marginBottom:5}}>UMIDIGI A9 Andriod 11fg ghiofrd  </Text>
                <Text style={{fontSize:11,fontWeight:'bold',letterSpacing:0.1}}>??? {imt.text1}</Text>
                <Text style={styles.container5}>{imt.text}</Text>
            </View>
              )
           })
         
            }
            </ScrollView>
        </View>






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
               <Text styles={{fontWeight:'400',marginBottom:3}}>???3,750</Text>
               <View style={{flexDirection:'row'}}><Text style={styles.container11}>???3900</Text><Text  style={styles.container10}>-54%</Text></View>

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
              <Text styles={{fontWeight:'400',marginBottom:3}}>???2,750</Text>
              <View style={{flexDirection:'row'}}><Text style={styles.container11}>???3900</Text><Text style={styles.container10}>-54%</Text></View>

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








    

    </ScrollView>
    </SafeAreaView>
    )
}


const styles = StyleSheet.create({
 
// container:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center'
// }
container:{
    backgroundColor:'#28b67d',
    paddingHorizontal:10,
    paddingVertical:12,
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:3
},
container1:{
    flexDirection:'row',
    backgroundColor:'#ceefe2',
},
container2:{
    marginTop:-50
},
container3:{
    marginTop:-38
},
container4:{
    paddingHorizontal:10,
    paddingVertical:10,
    borderRadius:3,
    backgroundColor:'#fff',
    width:150,
    marginRight:10
    
},
container5:{
    fontSize:10,paddingHorizontal:5,paddingVertical:5,
    backgroundColor:'#ceefe2',
    position:'absolute',
    top:8,
    right:5,
    color:'red'
},
container6:{
     
    paddingHorizontal:10,
    paddingTop:10,
    paddingBottom:15,alignItems:'center',
    backgroundColor:'#fff',
    marginTop:7


},
container7:{
    flexDirection:'row',
    paddingVertical:5,
    paddingHorizontal:10,
    justifyContent:'space-between'
 },

//  container12:{
//     flexDirection:'row',
//     paddingVertical:5,
//     paddingHorizontal:10,
//     justifyContent:'space-between'
//  },


container8:{
    flexDirection:'row',
    backgroundColor:'#28b67d',
    // paddingVertical:10,
    paddingHorizontal:15,
    alignItems:'center',
    marginTop:8
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
container13:{
    shadowRadius:8,
    shadowColor:'#f5f3f3',
    shadowOffset:{width:0,height:2},
    elevation:1,
    shadowOpacity:0.8,
    backgroundColor:'#fff',
    padding:5,
    borderRadius:3,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'baseline'
},
container14:{
    backgroundColor:'#fff',width:'24%',
    shadowRadius:8,
    shadowColor:'#dadde1',
    shadowOffset:{width:0,height:2},
    elevation:1,
    shadowOpacity:0.8,
    paddingTop:5,
    paddingBottom:4,
    alignItems:'center'
}



})

export default Stake5;