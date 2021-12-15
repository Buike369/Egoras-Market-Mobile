import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,SafeAreaView, ImageBackground,Image,Pressable} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from './searchHeader';
import {Ionicons } from 'react-native-vector-icons';



const output4=[{id:1,img:require('../assets/samp.jpg'),img1:require('../assets/samp1.jpg')},{id:2,img:require('../assets/samp3.jpg'),img1:require('../assets/samp4.jpg')},{id:3,img:require('../assets/samp5.jpg'),img1:require('../assets/samp6.jpg')},
{id:4,img:require('../assets/samp7.jpg'),img1:require('../assets/samp8.jpg')},{id:5,img:require('../assets/samp9.jpg'),img1:require('../assets/samp10.jpg')},{id:6,img:require('../assets/samp11.jpg'),img1:require('../assets/samp12.jpg')},{id:7,img:require('../assets/samp13.jpg'),img1:require('../assets/samp.jpg')},{id:8,img:require('../assets/samp1.jpg'),img1:require('../assets/samp2.jpg')},{id:9,img:require('../assets/samp3.jpg'),img1:require('../assets/samp4.jpg')},{id:10,img:require('../assets/samp5.jpg'),img1:require('../assets/samp5.jpg')},{id:11,img:require('../assets/samp6.jpg'),img1:require('../assets/samp7.jpg')},{id:12,img:require('../assets/samp8.jpg'),img1:require('../assets/samp9.jpg')},{id:13,img:require('../assets/samp10.jpg'),img1:require('../assets/samp11.jpg')},{id:14,img:require('../assets/samp12.jpg'),img1:require('../assets/samp11.jpg')}]




const FlashSales =({navigation})=>{





    const [countDown2,setCountDown]=useState("");


    const [count1,setCount] = useState(0);
    const [count3,setCount2] = useState(true);
    const [count5,setCount3] = useState(false);


    const counting1 = ()=>{

        setCount(rate=> rate + 1);
        setCount2(!count3);
        setCount3(!count5)

    }

    const countingReduce1 =()=>{
     setCount(rate=> rate - 1);
      if(count1 <= 1){
         setCount2(!count3);
         setCount3(!count5)
      }
    }


    const countingIncrement1 =()=>{
     setCount(rate=> rate + 1);
     
      }


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
          <Header dats={()=>navigation.goBack()} title='Flash Sales' book={count1}/>

          {/* another section*/}

          <ScrollView showsVerticalScrollIndicator={false}>
          <View>
              <Image source={require('../assets/banner.jpg')} style={{width:'100%',height:200}} resizeMode="cover"/>
          </View>
          


          {/* another section*/}

          <View style={{alignItems:'center',paddingVertical:10,paddingHorizontal:5,marginTop:5,backgroundColor:'#28b67d'}}>
              <Text style={{color:'#fff',fontWeight:'500'}}>Time Left {countDown2}</Text>
          </View>
           {/* another section*/}

           <View style={{backgroundColor:'#fff',paddingVertical:13,paddingHorizontal:10,flexDirection:'row',alignItems:'center'}}>
               <Text style={{color:'grey',marginRight:20}}>LIVE</Text>
               <Text style={{color:'grey',marginRight:20}}>12:00PM</Text>
               <Text style={{color:'grey',marginRight:20}}>2:00PM</Text>
               <Text style={{color:'grey',marginRight:20}}>4:00PM</Text>
           </View>

           {/*another section*/}
           <View style={styles.container2}>

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

   {/*another section*/}

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
                 {count3 ?
                <Pressable onPress={counting1}><View style={styles.container12} testID='atta'>
                    <Text style={{color:'#fff',fontSize:12,fontWeight:'700'}}>ADD TO CART</Text>
                </View></Pressable>: null}

                { count5 ?
                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:40,}}>
                     <Pressable onPress={countingReduce1}><View style={{paddingVertical:8,paddingHorizontal:12,backgroundColor:'#28b67d',borderRadius:3}}><Text Style={{fontSize:22,color:'#fff'}}>-</Text></View></Pressable>
                      <Text>{count1}</Text>
                     <Pressable onPress={countingIncrement1}><View style={{paddingVertical:8,paddingHorizontal:12,backgroundColor:'#28b67d',borderRadius:3}}><Text Style={{fontSize:22,color:'#fff'}}>+</Text></View></Pressable>
                  </View>:null
                  }

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

          </ScrollView> 
        </SafeAreaView>
      
    )
}

const styles = StyleSheet.create({

    container2:{
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
    }
})

export default FlashSales;