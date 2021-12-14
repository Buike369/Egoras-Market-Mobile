import React,{useState,useEffect} from 'react';
import {View,Text,FlatList,Image,Animated,Dimensions,StyleSheet,TouchableOpacity,TextInput,SafeAreaView, ScrollView, ImageBackground, VirtualizedList, Pressable,Platform,StatusBar} from 'react-native';
import {Ionicons } from 'react-native-vector-icons';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import Search from './home7';
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



const {width,height} = Dimensions.get('screen');

const windowWidth = Dimensions.get('window').width;

// const [document,setDocument]=useState([]);

  


const DATA = [
    {
      id: 1,
      img1: require("../assets/skip5.jpg"),
     
    },
    {
      id: 2,
      img1: require("../assets/skip.jpg"),
   
    },
    {
        id: 3,
        img1: require("../assets/skip1.jpg"),
       
    },
    {
        id: 4,
        img1: require("../assets/skip3.jpg"),
      
    },
    {
        id: 5,
        img1: require("../assets/skip2.jpg"),
      
    },
    {
        id: 6,
        img1: require("../assets/col.jpg"),
      
    },
    {
        id: 7,
        img1: require("../assets/skip.jpg"),
      
    },
    {
        id: 8,
        img1: require("../assets/skip3.jpg"),
      
    },
    {
        id: 9,
        img1: require("../assets/skip4.jpg"),
      
    },
    {
        id: 10,
        img1: require("../assets/skip2.jpg"),
      
    },
    {
        id: 11,
        img1: require("../assets/skip1.jpg"),
      
    },
  ];


//   const getItem = (data, index) => ({
//     id: Math.random().toString(12).substring(0),
//     title: `Item ${index+1}`
//   });

//   const getItemCount = (data) => 4;

//   const Item =({img4,img5})=>(

//     <View style={{alignItems:'center',marginBottom:7}}>
//     <View style={{flexDirection:'row',width:'96%',justifyContent:'space-between'}}>
//         <View style={styles.container21}>
//             <View style={{alignItems:'center',marginBottom:10}}>
//                 <Image source={img4} style={{width:150,height:150}} resizeMode='contain'/>
//             </View>
//             <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
//             <Text styles={{fontWeight:'400',marginBottom:3}}>₦3,750</Text>
//             <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text  style={styles.container22}>-54%</Text></View>
//         </View>
//         <View style={styles.container21}>
//            <View style={{alignItems:'center',marginBottom:10}}>
//               <Image source={img5} style={{width:150,height:150}} resizeMode='contain'/>
//            </View>
//            <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
//            <Text styles={{fontWeight:'400',marginBottom:3}}>₦2,750</Text>
//            <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text style={styles.container22}>-54%</Text></View>
//         </View>
//     </View>
//     </View>
//   )


const Item = ({img4})=>(
    <View style={{backgroundColor:'white',padding:5}}>
    <Image  source={img4} style={{width:110,height:110,marginBottom:15}} resizeMode="contain"/>
    <Text style={{fontSize:10,marginBottom:8}}>Cherry Blossom & jojoba..</Text>
    <Text style={{fontSize:12,marginBottom:10}}>₦3,750</Text>
    <Text style={{fontSize:8,marginBottom:4,letterSpacing:0.1}}>89 items left</Text>
    <View style={styles.container24}>
    <View style={styles.container25}></View>
    </View>
</View>
)

const carl =({navigation})=>{


      useEffect(()=>{
       
     
     changeR

      },[])


      async function saveNewPerson() {
        const person = new Parse.Object("Person");
      
        person.set("name", "John Snow");
        person.set("age", 27);
        try {
          let result = await person.save()
          alert('New object created with objectId: ' + result.id);
          } catch(error) {
              alert('Failed to create new object, with error code: ' + error.message);
          }
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

    //   const farway1 = ()=>{
    //       navigation.navigate('City')
    //   }


      const farway2 =()=>{
          navigation.navigate('City1')
      }
   
        const renderItem = ({ item }) => (
          <Pressable onPress={ farway2}>
          <Item img4={item.img1} />
          </Pressable>  
        );


    const data =[{id:2,wan:require('../assets/pad.jpg')}, {id:3,wan:require('../assets/pad2.jpg')},{id:4,wan:require('../assets/pad1.gif')},{id:5,wan:require('../assets/pad3.gif')},{id:6,wan:require('../assets/pad.jpg')}];
    const imageW = width * 1;
    const imageH = (imageW * 0.57)- 5;


    const changeR=()=>{
       let i ;
        for (i = 0; i < data.wan.lenght; i++){
            console.log('hello Mr Kingsley');
        }
    }


    const Changes =(item)=>{

        let keyss = item.id
        if (keyss == 2){
            navigation.navigate('City')
        }

         if( keyss == 3){
            navigation.navigate('City2')
            }
        
        if(keyss == 4){
            navigation.navigate('City6')
           }
        if (keyss == 5){
            navigation.navigate('City')
           }
        if(keyss == 6){
            navigation.navigate('City5')
        }
      
        }

    return( 
        
        <SafeAreaView style={styles.container}>
            <StatusBar   />
      
         
        <View > 
            <SafeAreaView >

                
           <View style={styles.container1}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Ionicons name="md-search" size={20} color="#808080" style={styles.container2} />
                   <TextInput placeholder='search on Egoroas Market' style={{width:'90%',paddingVertical:15,paddingLeft:30,borderRadius:8,backgroundColor:'white'}}/>
                <Pressable onPress={()=>navigation.goBack()}><Ionicons name="cart-outline" size={30} color="#fff" style={{marginLeft:5}} /></Pressable>
                </View>
           </View>
        
           {/* <Search/> */}
     <ScrollView showsVerticalScrollIndicator={false}>

        <View>
             <FlatList  data={data}
             horizontal
             pagingEnabled
             showsHorizontalScrollIndicator={false}
            //    keyExtractor={(_,index)=>index.toString()}
               keyExtractor={(item)=>item.id}
               renderItem={({item})=>{
                   return  <Pressable onPress={()=>Changes(item)}>
                   <View style={{width,alignItems:'center'}}>
                       <Image source={item.wan} style={{width:'100%',height:imageH,resizeMode:'contain',alignItems:'center'}}/>
                     
                   </View>
                   </Pressable>
               }}
             />
{/* 
             {
                 data.map((items,yan)=>(
                         <View style={styles.circleDiv}>
                             <View  key={yan} style={styles.circleDivContent}></View>
                         </View>
                     )
                 )
             } */}
             </View>
            

             <View style={{paddingHorizontal:10,marginBottom:5}}>
                 <View style={styles.container4}>

             <View style={{flexDirection:'row',marginBottom:20,justifyContent:'space-around',alignItems:'center'}}>
                 <Pressable onPress={()=>navigation.navigate('topdeals')}>
                       <View style={{width:80,alignItems:'center'}}>
                       <Image source={require('../assets/black.png')} style={styles.container3} />
                       <Text style={{fontSize:10,fontWeight:'300',color:'#000'}}>Top Deals</Text>
                   </View>
                 </Pressable>
                 <View style={{width:80,alignItems:'center'}}>
                     <Image source={require('../assets/black2.png')} style={styles.container3} />
                     <Text style={{fontSize:10,fontWeight:'300',color:'#000'}}>Brand Day</Text>
                 </View>
                 <View style={{width:80,alignItems:'center'}}>
                     <Image source={require('../assets/black1.png')} style={styles.container3} />
                     <Text style={{fontSize:10,fontWeight:'300',color:'#000'}}>Borrow Money</Text>
                 </View>
                 <View style={{width:80,alignItems:'center'}}>
                     <Image source={require('../assets/black3.png')} style={styles.container3} />
                     <Text style={{fontSize:10,fontWeight:'300',color:'#000'}}>Egoras Prime</Text>
                 </View>
             </View>


             <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                 <View style={{width:80,alignItems:'center'}}>
                     <Image source={require('../assets/black1.png')} style={styles.container3} />
                     <Text style={{fontSize:10,fontWeight:'300',color:'#000'}}>Flash Sales</Text>
                 </View>
                 <Pressable onPress={()=>navigation.navigate('phonestr')}>
                 <View style={{width:80,alignItems:'center'}}>
                     <Image source={require('../assets/tu.jpg')} style={styles.container3} />
                     <Text style={{fontSize:10,fontWeight:'300',color:'#000'}}>Phones</Text>
                 </View>
                 </Pressable>
                 <View style={{width:80,alignItems:'center'}}>
                     <Image source={require('../assets/download.jpg')} style={styles.container3} />
                     <Text style={{fontSize:10,fontWeight:'300',color:'#000'}}>Foot wears</Text>
                 </View>
                 <View style={{width:80,alignItems:'center'}}>
                     <Image source={require('../assets/download-1.jpg')} style={styles.container3} />
                     <Text style={{fontSize:10,fontWeight:'300',color:'#000'}}>Sneakers</Text>
                 </View>
             </View>
             </View>
             </View>

           <View  style={styles.container5}>
               <View>
                   <Text style={{fontSize:12,color:'white',fontWeight:'500'}}>Flash Sale</Text>
                   <Text style={{fontSize:10,color:'white'}}>TIME LEFT</Text> 
               </View>
                   <Text style={{fontSize:10,color:'white',fontWeight:'600',}}>SEE ALL</Text>
           </View>

             
  <View style={{paddingHorizontal:1}}>
   <SafeAreaView >
       <FlatList
          data={DATA}
         renderItem={renderItem}
          keyExtractor={item => item.id}
         horizontal
         showsHorizontalScrollIndicator={false}
         />
   </SafeAreaView> 
   </View>


           <View style={[styles.container6,styles.container26]}>
           {/* <View style={{width:200,height:180}}><Image source={require('../assets/sec.png')} resizeMode={['center']} style={{ flex:1,width:'100%',height:'100%', }}/></View> */}
           <View style={{flex:1}}>
               <Image source={require('../assets/sec1.jpg')}resizeMode={'contain'} style={{height:90,width:'100%'}}/>
            </View>
            <View style={{flex:1}}>
               <Image source={require('../assets/sec.png')} resizeMode="contain" style={{height:90,width:'100%'}}/>
            </View>
           </View>
           <View style={styles.container6}>
           {/* <View style={{width:200,height:180}}><Image source={require('../assets/sec.png')} resizeMode={['center']} style={{ flex:1,width:'100%',height:'100%', }}/></View> */}
            <Image source={require('../assets/sec2.jpg')}resizeMode="contain" style={{width:'100%',height:100,flex:1,marginTop:-10}}/>
            <Image source={require('../assets/sec3.jpg')} resizeMode="contain" style={{width:'100%',height:100,flex:1,marginTop:-10}}/>
           </View>

           <View  style={[styles.container5,styles.container15]}>
               <View>
                   <Text style={{fontSize:12,color:'#fff',fontWeight:'500'}}>UNILEVER BRAND DAY</Text>
                   <Text style={{fontSize:10,color:'#fff',letterSpacing:0.1}}>Extra 10% off at checkout</Text> 
               </View>
                   <Text style={{fontSize:10,color:'#fff',fontWeight:'600'}}>SEE ALL</Text>
           </View>


        <View style={{alignItems:'center'}}>
           <View style={styles.container6}>
           {/* <View style={{width:200,height:180}}><Image source={require('../assets/sec.png')} resizeMode={['center']} style={{ flex:1,width:'100%',height:'100%', }}/></View> */}
            <View style={styles.container7}>
                <Image source={require('../assets/ca.jpg')} style={{width:100,height:100,marginBottom:20}} resizeMode='contain'/>
                <Text style={{fontSize:10,textAlign:'center',marginBottom:5,fontWeight:'300',color:'#000',letterSpacing:0.1}}>Triple Protection Toothpaste Cavity Fighter 140g</Text>
                <Text style={{fontSize:12,fontWeight:Platform.OS === 'ios'? '600' : '800'}}>₦250</Text>
            </View>
            <View style={styles.container8}>
            <Image source={require('../assets/ca1.jpg')} style={{width:100,height:100,marginBottom:20}} resizeMode='contain'/>
            <Text style={{fontSize:10,textAlign:'center',marginBottom:5,fontWeight:'300',color:'#000',letterSpacing:0.1}}>Multi-Purpose Washing Liquid Lemon 1l</Text>
            <Text style={{fontSize:12,fontWeight:Platform.OS === 'ios'? '600' : '800'}}>₦380</Text>
            </View>
           </View>
           <View style={styles.container6}>
           {/* <View style={{width:200,height:180}}><Image source={require('../assets/sec.png')} resizeMode={['center']} style={{ flex:1,width:'100%',height:'100%', }}/></View> */}
            <View  style={styles.container9}>
            <Image source={require('../assets/ca2.jpg')} style={{width:100,height:100,marginBottom:20}} resizeMode='contain'/>
            <Text style={{fontSize:10,textAlign:'center',marginBottom:5,fontWeight:'300',color:'#000',letterSpacing:0.1}}>@in1 Tropical Sensations Handwash Washing Pow...</Text>
            <Text style={{fontSize:12,fontWeight:Platform.OS === 'ios'? '600' : '800'}}>₦555</Text>
            </View>
            <View style={styles.container10}>
            <Image source={require('../assets/ca3.jpg')} style={{width:100,height:100,marginBottom:20}} resizeMode='contain'/>
            <Text style={{fontSize:10,textAlign:'center',marginBottom:5,fontWeight:'300',color:'#000',letterSpacing:0.1}}>Protect Handwashing Detergent Powder - 900g</Text>
            <Text style={{fontSize:12,fontWeight:Platform.OS === 'ios'? '600' : '800'}}>₦499</Text>
            </View>
           </View>
          </View>
<Text style={styles.container11}>BRAND DAYS - SAVE THE DATES</Text>
      

      <View style={{alignItems:'center'}}>
     <View style={styles.container13}>

 <View style={styles.container12}>
          <View style={{alignItems:'center'}}>
            <Image source={require('../assets/sam.png')} style={{width:70,height:40,marginBottom:10}}/>
            <Text style={{fontSize:9,fontWeight:'300'}}>November 23</Text>
          </View>
          <View style={{alignItems:'center'}}>
             <Image source={require('../assets/sam1.png')} style={{width:70,height:40,marginBottom:10}}/>
             <Text style={{fontSize:9,fontWeight:'300'}}>November 24</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/sam2.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>November 25</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/sam4.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>November 26</Text>
          </View>   
      </View>
     

      <View style={styles.container12}>
          <View style={{alignItems:'center'}}>
            <Image source={require('../assets/sam5.png')} style={{width:70,height:40,marginBottom:10}}/>
            <Text style={{fontSize:9,fontWeight:'300'}}>November 23</Text>
          </View>
          <View style={{alignItems:'center'}}>
             <Image source={require('../assets/sam6.png')} style={{width:70,height:40,marginBottom:10}}/>
             <Text style={{fontSize:9,fontWeight:'300'}}>November 24</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/sam7.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>November 25</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/sam8.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>November 26</Text>
          </View>   
      </View>
      </View>
      </View>

      <Text style={styles.container14}>ENJOY EXCITING OFFERS THIS BLACK FRIDAY</Text>

      <View style={styles.container6}>
           {/* <View style={{width:200,height:180}}><Image source={require('../assets/sec.png')} resizeMode={['center']} style={{ flex:1,width:'100%',height:'100%', }}/></View> */}
            <Image source={require('../assets/me.png')}resizeMode="contain" style={styles.container19}/>
            <Image source={require('../assets/me1.jpg')} resizeMode="contain" style={styles.container19}/>
           </View>
           <View style={styles.container6}>
           {/* <View style={{width:200,height:180}}><Image source={require('../assets/sec.png')} resizeMode={['center']} style={{ flex:1,width:'100%',height:'100%', }}/></View> */}
            <Image source={require('../assets/me2.gif')}resizeMode="contain" style={{width:'50%',height:100,marginTop:-10}}/>
            <Image source={require('../assets/me3.gif')} resizeMode="contain" style={{width:'50%',height:100,marginTop:-10}}/>
           </View>

           <Text style={[styles.container14,styles.container15]}>SHOP FROM OUR BLACK FRIDAY COLLECTIONS!</Text>  


           <View style={{alignItems:'center',marginTop:4}}>
     <View style={styles.container13}>

      <View style={styles.container12}>

          <Pressable onPress={()=>navigation.navigate('City2')}>
          <View style={{alignItems:'center'}}>
            <Image source={require('../assets/pw7.png')} style={{width:70,height:40,marginBottom:10}}/>
            <Text style={{fontSize:9,fontWeight:'300'}}>Health & Beauty</Text>
          </View>
          </Pressable>
          <View style={{alignItems:'center'}}>
             <Image source={require('../assets/pw.png')} style={{width:70,height:40,marginBottom:10}}/>
             <Text style={{fontSize:9,fontWeight:'300'}}>Phone Deals</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/pw1.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>Fashion Deals</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/pw2.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>Supermarket</Text>
          </View>   
      </View>

      <View style={styles.container12}>
          <View style={{alignItems:'center'}}>
            <Image source={require('../assets/pw3.png')} style={{width:70,height:40,marginBottom:10}}/>
            <Text style={{fontSize:9,fontWeight:'300'}}>Home & Appliances</Text>
          </View>
          <View style={{alignItems:'center'}}>
             <Image source={require('../assets/pw4.png')} style={{width:70,height:40,marginBottom:10}}/>
             <Text style={{fontSize:9,fontWeight:'300'}}>Kids Corner</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/pw5.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>Computing Deals</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/pw6.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>Television & Audio</Text>
          </View>   
      </View>
      </View>
      </View>

      <Text style={styles.container11}>MORE COLLECTIONS!</Text>

      <View style={{alignItems:'center'}}>
     <View style={styles.container13}>

      <View style={styles.container12}>
          <View style={{alignItems:'center'}}>
          <Image source={require('../assets/pw8.png')} style={{width:70,height:40,marginBottom:10}}/>
            <Text style={{fontSize:9,fontWeight:'300'}}>Gaming</Text>
          </View>
          <View style={{alignItems:'center'}}>
             <Image source={require('../assets/pw9.png')} style={{width:70,height:40,marginBottom:10}}/>
             <Text style={{fontSize:9,fontWeight:'300'}}>Staying Fit</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/pw10.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>New Hobby</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/pw11.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>Exploring Trends</Text>
          </View>   
      </View>

     
      </View>
      </View>


      <View style={styles.container16}>
         <Text style={{fontSize:10}}>TOP FASHION DEAL</Text>
         <Text style={{fontSize:10,fontWeight:'600',letterSpacing:0.3}}>SEE ALL</Text>
      </View>

   

      <View style={{alignItems:'center'}}>
           <View style={styles.container6}>
           {/* <View style={{width:200,height:180}}><Image source={require('../assets/sec.png')} resizeMode={['center']} style={{ flex:1,width:'100%',height:'100%', }}/></View> */}
            <View style={styles.container7}>
                <Image source={require('../assets/shoe.jpg')} style={{width:100,height:100,marginBottom:20,borderRadius:2}} resizeMode='contain'/>
                <Text style={{fontSize:10,textAlign:'center',marginBottom:5,fontWeight:'300',color:'#000'}}>Men's Business Dress Casual ...</Text>
                <Text style={{fontSize:12,fontWeight:'600',color:'#000',letterSpacing:0.1}}>₦250</Text>
                <Text style={{position:'absolute',color:'red',paddingVertical:7,paddingHorizontal:5,top:8,right:15,backgroundColor:'#cfefe2',fontSize:10,}}>-50%</Text>
            </View>
            <View style={styles.container8}>
            <Image source={require('../assets/shoe1.jpg')} style={{width:100,height:100,marginBottom:20,borderRadius:2}} resizeMode='contain'/>
            <Text style={{fontSize:10,textAlign:'center',marginBottom:5,fontWeight:'300',color:'#000'}}>Men's Cotton Casual Short sl...</Text>
            <Text style={{fontSize:12,fontWeight:'600',color:'#000',letterSpacing:0.1}}>₦380</Text>
            <Text style={{position:'absolute',color:'red',paddingVertical:7,paddingHorizontal:5,top:8,right:15,backgroundColor:'#cfefe2',fontSize:10}}>-30%</Text>
            </View>
           </View>
           <View style={styles.container6}>
           {/* <View style={{width:200,height:180}}><Image source={require('../assets/sec.png')} resizeMode={['center']} style={{ flex:1,width:'100%',height:'100%', }}/></View> */}
            <View  style={styles.container9}>
            <Image source={require('../assets/shoe2.jpg')} style={{width:100,height:100,marginBottom:20,borderRadius:2}} resizeMode='contain'/>
            <Text style={{fontSize:10,textAlign:'center',marginBottom:5,fontWeight:'300',color:'#000'}}>@in1 Tropical Sensations Handwash Washing Pow...</Text>
            <Text style={{fontSize:12,fontWeight:'600',color:'#000',letterSpacing:0.1}}>₦555</Text>
            <Text style={{position:'absolute',color:'red',paddingVertical:7,paddingHorizontal:5,top:8,right:15,backgroundColor:'#cfefe2',fontSize:10}}>-20%</Text>
            </View>
            <View style={styles.container10}>
            <Image source={require('../assets/shoe3.jpg')} style={{width:100,height:100,marginBottom:20,borderRadius:2}} resizeMode='contain'/>
            <Text style={{fontSize:10,textAlign:'center',marginBottom:5,fontWeight:'300',color:'#000'}}>Unisex Anti Blue Light Protection</Text>
            <Text style={{fontSize:12,fontWeight:'600',color:'#000',letterSpacing:0.1}}>₦499</Text>
            <Text style={{position:'absolute',color:'red',paddingVertical:7,paddingHorizontal:5,top:8,right:15,backgroundColor:'#cfefe2',fontSize:10}}>-50%</Text>
            </View>
           </View>
          </View>



      <View style={styles.container6}>
           {/* <View style={{width:200,height:180}}><Image source={require('../assets/sec.png')} resizeMode={['center']} style={{ flex:1,width:'100%',height:'100%', }}/></View> */}
            <Image source={require('../assets/tit.gif')}resizeMode="contain" style={{width:'50%',height:95}}/>
            <Image source={require('../assets/tit1.gif')} resizeMode="contain" style={{width:'50%',height:95}}/>
           </View>
          
           <Text style={[styles.container14,styles.cup]}>EXCLUSIVE DEALS</Text> 


           <View style={{alignItems:'center',marginTop:4}}>
     <View style={styles.container13}>

      <View style={styles.container12}>
          <View style={{alignItems:'center'}}>
          <Image source={require('../assets/pick.png')} style={{width:70,height:40,marginBottom:10}}/>
            <Text style={{fontSize:9,fontWeight:'300'}}>Phones</Text>
          </View>
          <View style={{alignItems:'center'}}>
             <Image source={require('../assets/pick1.png')} style={{width:70,height:40,marginBottom:10}}/>
             <Text style={{fontSize:9,fontWeight:'300'}}>Home Appliances</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/pick2.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>Electronics</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/pick3.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>Computing</Text>
          </View>   
      </View>

      <View style={styles.container12}>
          <View style={{alignItems:'center'}}>
            <Image source={require('../assets/pick4.png')} style={{width:70,height:40,marginBottom:10}}/>
            <Text style={{fontSize:9,fontWeight:'300'}}>Baby Products</Text>
          </View>
          <View style={{alignItems:'center'}}>
             <Image source={require('../assets/pick5.png')} style={{width:70,height:40,marginBottom:10}}/>
             <Text style={{fontSize:9,fontWeight:'300'}}>Health & Beauty</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/pick6.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>Food Cupboard</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/pick7.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>Pasta & Noodles</Text>
          </View>   
      </View>
      </View>
      </View>

      <ImageBackground source={require('../assets/Copy.jpg')} style={{width:'100%',height:200,flex:1}} resizeMode='cover'></ImageBackground>

      <Text style={styles.container11}>PHONE DEALS</Text>

      <View style={{alignItems:'center'}}>
     <View style={styles.container13}>

      <View style={styles.container12}>
          <View style={{alignItems:'center'}}>
          <Image source={require('../assets/race.png')} style={{width:70,height:40,marginBottom:10}}/>
            <Text style={{fontSize:9,fontWeight:'300'}}>Andriod Phones</Text>
          </View>
          <View style={{alignItems:'center'}}>
             <Image source={require('../assets/race1.png')} style={{width:70,height:40,marginBottom:10}}/>
             <Text style={{fontSize:9,fontWeight:'300'}}>iPhones</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/race2.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>Accessories</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/race3.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>Exploring Below 50k</Text>
          </View>   
      </View>

     
      </View>
      </View>


      <View  style={styles.container5}>
               <View>
                   <Text style={{fontSize:12,color:'white'}}>EDIFIER OFFICIAL STORE</Text>
                   <Text style={{fontSize:10,color:'white'}}>Extra 10% off at checkout</Text> 
               </View>
                   <Text style={{fontSize:10,color:'white',fontWeight:'500'}}>SEE ALL</Text>
           </View>



      <View style={{alignItems:'center'}}>
           <View style={styles.container6}>
           {/* <View style={{width:200,height:180}}><Image source={require('../assets/sec.png')} resizeMode={['center']} style={{ flex:1,width:'100%',height:'100%', }}/></View> */}
            <View style={[styles.container7,styles.container18]}>
                <Image source={require('../assets/pro.jpg')} style={{width:100,height:100,marginBottom:20}} resizeMode='contain'/>
                <Text style={{fontSize:9,textAlign:'center',marginBottom:5,fontWeight:'300'}}>Men's Business Dress Casual ...</Text>
                <Text style={{fontSize:12,fontWeight:'600'}}>₦15,990</Text>
                <Text style={{position:'absolute',color:'red',paddingVertical:7,paddingHorizontal:5,top:8,right:15,backgroundColor:'#cfefe2',fontSize:10,}}>-50%</Text>
            </View>
            <View style={[styles.container8,styles.container18]}>
            <Image source={require('../assets/pro1.jpg')} style={{width:100,height:100,marginBottom:20}} resizeMode='contain'/>
            <Text style={{fontSize:9,textAlign:'center',marginBottom:5,fontWeight:'300'}}>Men's Cotton Casual Short sl...</Text>
            <Text style={{fontSize:12,fontWeight:'600'}}>₦7,400</Text>
            <Text style={{position:'absolute',color:'red',paddingVertical:7,paddingHorizontal:5,top:8,right:15,backgroundColor:'#cfefe2',fontSize:10}}>-30%</Text>
            </View>
           </View>
           <View style={styles.container6}>
           {/* <View style={{width:200,height:180}}><Image source={require('../assets/sec.png')} resizeMode={['center']} style={{ flex:1,width:'100%',height:'100%', }}/></View> */}
            <View  style={[styles.container9,styles.container18]}>
            <Image source={require('../assets/pro3.jpg')} style={{width:100,height:100,marginBottom:20}} resizeMode='contain'/>
            <Text style={{fontSize:9,textAlign:'center',marginBottom:5,fontWeight:'300'}}>@in1 Tropical Sensations Handwash Washing Pow...</Text>
            <Text style={{fontSize:12,fontWeight:'600'}}>₦4,999</Text>
            <Text style={{position:'absolute',color:'red',paddingVertical:7,paddingHorizontal:5,top:8,right:15,backgroundColor:'#cfefe2',fontSize:10}}>-20%</Text>
            </View>
            <View style={[styles.container10,styles.container18]}>
            <Image source={require('../assets/pro2.jpg')} style={{width:100,height:100,marginBottom:20}} resizeMode='contain'/>
            <Text style={{fontSize:9,textAlign:'center',marginBottom:5,fontWeight:'300'}}>Unisex Anti Blue Light Protection</Text>
            <Text style={{fontSize:12,fontWeight:'600'}}>₦10,499</Text>
            <Text style={{position:'absolute',color:'red',paddingVertical:7,paddingHorizontal:5,top:8,right:15,backgroundColor:'#cfefe2',fontSize:10}}>-50%</Text>
            </View>
           </View>
          </View>


          <Text style={styles.container11}>MORE BRANDS</Text>


          
      <View style={{alignItems:'center'}}>
     <View style={styles.container13}>

      <View style={styles.container12}>
          <View style={{alignItems:'center'}}>
            <Image source={require('../assets/sam.png')} style={{width:70,height:40,marginBottom:10}}/>
            
          </View>
          <View style={{alignItems:'center'}}>
             <Image source={require('../assets/sam1.png')} style={{width:70,height:40,marginBottom:10}}/>
          
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/sam2.png')} style={{width:70,height:40,marginBottom:10}}/>
              
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/sam4.png')} style={{width:70,height:40,marginBottom:10}}/>
              
          </View>   
      </View>

      <View style={styles.container12}>
          <View style={{alignItems:'center'}}>
            <Image source={require('../assets/sam5.png')} style={{width:70,height:40,marginBottom:10}}/>
           
          </View>
          <View style={{alignItems:'center'}}>
             <Image source={require('../assets/sam6.png')} style={{width:70,height:40,marginBottom:10}}/>
            
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/sam7.png')} style={{width:70,height:40,marginBottom:10}}/>
             
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/sam8.png')} style={{width:70,height:40,marginBottom:10}}/>
            
          </View>   
      </View>
      </View>
      </View>

      <Text style={styles.container11}>EVEN MORE BRANDS</Text>


      <View style={{alignItems:'center'}}>
     <View style={styles.container13}>

      <View style={styles.container12}>
          <View style={{alignItems:'center'}}>
            <Image source={require('../assets/sam.png')} style={{width:70,height:40,marginBottom:10}}/>
            
          </View>
          <View style={{alignItems:'center'}}>
             <Image source={require('../assets/sam1.png')} style={{width:70,height:40,marginBottom:10}}/>
           
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/sam2.png')} style={{width:70,height:40,marginBottom:10}}/>
             
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/sam4.png')} style={{width:70,height:40,marginBottom:10}}/>
            
          </View>   
      </View>

      <View style={styles.container12}>
          <View style={{alignItems:'center'}}>
            <Image source={require('../assets/sam5.png')} style={{width:70,height:40,marginBottom:10}}/>
           
          </View>
          <View style={{alignItems:'center'}}>
             <Image source={require('../assets/sam6.png')} style={{width:70,height:40,marginBottom:10}}/>
        
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/sam7.png')} style={{width:70,height:40,marginBottom:10}}/>
          
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/sam8.png')} style={{width:70,height:40,marginBottom:10}}/>
            
          </View>   
      </View>
      </View>
      </View>

    

      <View style={styles.container6}>
           {/* <View style={{width:200,height:180}}><Image source={require('../assets/sec.png')} resizeMode={['center']} style={{ flex:1,width:'100%',height:'100%', }}/></View> */}
            <Image source={require('../assets/mob1.jpg')}resizeMode="contain" style={{width:200,height:95}}/>
            <Image source={require('../assets/mob2.jpg')} resizeMode="contain" style={{width:200,height:95}}/>
           </View>

           <Image  source={require('../assets/mob.jpg')} style={{width:'100%',height:120}} resizeMode="cover"/>

           <Text style={[styles.container14,styles.container17]}>FASHION DEALS</Text> 


           <View style={{alignItems:'center',marginTop:4}}>
     <View style={styles.container13}>

      <View style={styles.container12}>
          <View style={{alignItems:'center'}}>
          <Image source={require('../assets/wom.png')} style={{width:70,height:40,marginBottom:10}}/>
            <Text style={{fontSize:9,fontWeight:'300'}}>Women's Clothing</Text>
          </View>
          <View style={{alignItems:'center'}}>
             <Image source={require('../assets/wom1.png')} style={{width:70,height:40,marginBottom:10}}/>
             <Text style={{fontSize:9,fontWeight:'300'}}>Men's Clothing</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/wom2.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>Women's Shoes</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/wom3.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>Men's Shoes</Text>
          </View>   
      </View>

      <View style={styles.container12}>
          <View style={{alignItems:'center'}}>
            <Image source={require('../assets/wom4.png')} style={{width:70,height:40,marginBottom:10}}/>
            <Text style={{fontSize:9,fontWeight:'300'}}>Women's Accessories</Text>
          </View>
          <View style={{alignItems:'center'}}>
             <Image source={require('../assets/wom5.png')} style={{width:70,height:40,marginBottom:10}}/>
             <Text style={{fontSize:9,fontWeight:'300'}}>Men's Accessories</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/wom6.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>Women's Bags</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/wom7.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>Men's Bags</Text>
          </View>   
      </View>
      </View>
      </View>



      <View  style={styles.container5}>
               <View>
                  
                   <Text style={{fontSize:10,color:'white'}}>TOP FASHION DEALS</Text> 
               </View>
                   <Text style={{fontSize:10,color:'white',fontWeight:'500'}}>SEE ALL</Text>
           </View>




      <View style={{alignItems:'center'}}>
           <View style={styles.container6}>
           {/* <View style={{width:200,height:180}}><Image source={require('../assets/sec.png')} resizeMode={['center']} style={{ flex:1,width:'100%',height:'100%', }}/></View> */}
            <View style={styles.container7}>
                <Image source={require('../assets/farn.jpg')} style={{width:100,height:100,marginBottom:20,borderRadius:2}} resizeMode='contain'/>
                <Text style={{fontSize:9,textAlign:'center',marginBottom:5,fontWeight:'300'}}>Ladies Fancy RedDress</Text>
                <Text style={{fontSize:12,fontWeight:'600'}}>₦3,720</Text>
                <Text style={{position:'absolute',color:'red',paddingVertical:7,paddingHorizontal:5,top:8,right:15,backgroundColor:'#cfefe2',fontSize:10,}}>-50%</Text>
            </View>
            <View style={styles.container8}>
            <Image source={require('../assets/farn1.jpg')} style={{width:100,height:100,marginBottom:20,borderRadius:2}} resizeMode='contain'/>
            <Text style={{fontSize:9,textAlign:'center',marginBottom:5,fontWeight:'300'}}>White And Black Stretch Tight Skinny High-waste...</Text>
            <Text style={{fontSize:12,fontWeight:'600'}}>₦7,900</Text>
            <Text style={{position:'absolute',color:'red',paddingVertical:7,paddingHorizontal:5,top:8,right:15,backgroundColor:'#cfefe2',fontSize:10}}>-30%</Text>
            </View>
           </View>
           <View style={styles.container6}>
           {/* <View style={{width:200,height:180}}><Image source={require('../assets/sec.png')} resizeMode={['center']} style={{ flex:1,width:'100%',height:'100%', }}/></View> */}
            <View  style={styles.container9}>
            <Image source={require('../assets/farn2.jpg')} style={{width:100,height:100,marginBottom:20,borderRadius:2}} resizeMode='contain'/>
            <Text style={{fontSize:9,textAlign:'center',marginBottom:5,fontWeight:'300'}}>@in1 Tropical Sensations Handwash Washing Pow...</Text>
            <Text style={{fontSize:12,fontWeight:'600'}}>₦2,550</Text>
            <Text style={{position:'absolute',color:'red',paddingVertical:7,paddingHorizontal:5,top:8,right:15,backgroundColor:'#cfefe2',fontSize:10}}>-20%</Text>
            </View>
            <View style={styles.container10}>
            <Image source={require('../assets/farn3.jpg')} style={{width:100,height:100,marginBottom:20,borderRadius:2}} resizeMode='contain'/>
            <Text style={{fontSize:9,textAlign:'center',marginBottom:5,fontWeight:'300'}}>Unisex Anti Blue Light Protection</Text>
            <Text style={{fontSize:12,fontWeight:'600'}}>₦4,099</Text>
            <Text style={{position:'absolute',color:'red',paddingVertical:7,paddingHorizontal:5,top:8,right:15,backgroundColor:'#cfefe2',fontSize:10}}>-50%</Text>
            </View>
           </View>
          </View>


          <ImageBackground source={require('../assets/banner.jpg')} style={{width:'100%',height:200,flex:1}} resizeMode='cover'></ImageBackground>
          

          <Text style={[styles.container20,styles.container17]}>SUPERMARKET DEALS</Text> 


          <View style={{alignItems:'center',}}>
     <View style={styles.container13}>

      <View style={styles.container12}>
          <View style={{alignItems:'center'}}>
          <Image source={require('../assets/doof.png')} style={{width:70,height:40,marginBottom:10}}/>
            <Text style={{fontSize:9,fontWeight:'300'}}>Food Cupboard</Text>
          </View>
          <View style={{alignItems:'center'}}>
             <Image source={require('../assets/doof1.png')} style={{width:70,height:40,marginBottom:10}}/>
             <Text style={{fontSize:9,fontWeight:'300'}}>Break Fast</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/doof2.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>Breverages & Drinks</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/doof3.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>Home Care</Text>
          </View>   
      </View>

      <View style={styles.container12}>
          <View style={{alignItems:'center'}}>
            <Image source={require('../assets/doof4.png')} style={{width:70,height:40,marginBottom:10}}/>
            <Text style={{fontSize:9,fontWeight:'300'}}>Canned Foods</Text>
          </View>
          <View style={{alignItems:'center'}}>
             <Image source={require('../assets/doof5.png')} style={{width:70,height:40,marginBottom:10}}/>
             <Text style={{fontSize:9,fontWeight:'300'}}>Exclusive Deals</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/doof6.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>Cooking & Baking</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/doof7.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>Snacks</Text>
          </View>   
      </View>
      </View>
      </View>

      <View style={styles.container16}>
         <Text style={{fontSize:10}}>TOP SUPERMARKET DEALS</Text>
         <Text style={{fontSize:10,fontWeight:'600',letterSpacing:0.3}}>SEE ALL</Text>
      </View>



      <View style={{alignItems:'center'}}>
           <View style={styles.container6}>
           {/* <View style={{width:200,height:180}}><Image source={require('../assets/sec.png')} resizeMode={['center']} style={{ flex:1,width:'100%',height:'100%', }}/></View> */}
            <View style={[styles.container7,styles.container18]}>
                <Image source={require('../assets/pp.jpg')} style={{width:100,height:100,marginBottom:20}} resizeMode='contain'/>
                <Text style={{fontSize:9,textAlign:'center',marginBottom:5,fontWeight:'300'}}>Cool Cow Powderded Milk 350g Refill-2 pieces</Text>
                <Text style={{fontSize:12,fontWeight:'600'}}>₦15,990</Text>
                <Text style={{position:'absolute',color:'red',paddingVertical:7,paddingHorizontal:5,top:8,right:15,backgroundColor:'#cfefe2',fontSize:10,}}>-50%</Text>
            </View>
            <View style={[styles.container8,styles.container18]}>
            <Image source={require('../assets/pp1.jpg')} style={{width:100,height:100,marginBottom:20}} resizeMode='contain'/>
            <Text style={{fontSize:9,textAlign:'center',marginBottom:5,fontWeight:'300'}}>Beef Seasoning Cubes Taste The Knorr Difference ... </Text>
            <Text style={{fontSize:12,fontWeight:'600'}}>₦7,400</Text>
            <Text style={{position:'absolute',color:'red',paddingVertical:7,paddingHorizontal:5,top:8,right:15,backgroundColor:'#cfefe2',fontSize:10}}>-30%</Text>
            </View>
           </View>
           <View style={styles.container6}>
           {/* <View style={{width:200,height:180}}><Image source={require('../assets/sec.png')} resizeMode={['center']} style={{ flex:1,width:'100%',height:'100%', }}/></View> */}
            <View  style={[styles.container9,styles.container18]}>
            <Image source={require('../assets/pp3.jpg')} style={{width:100,height:100,marginBottom:20}} resizeMode='contain'/>
            <Text style={{fontSize:9,textAlign:'center',marginBottom:5,fontWeight:'300'}}>Palm Oil 2L Bottle</Text>
            <Text style={{fontSize:12,fontWeight:'600'}}>₦4,999</Text>
            <Text style={{position:'absolute',color:'red',paddingVertical:7,paddingHorizontal:5,top:8,right:15,backgroundColor:'#cfefe2',fontSize:10}}>-20%</Text>
            </View>
            <View style={[styles.container10,styles.container18]}>
            <Image source={require('../assets/pp2.jpg')} style={{width:100,height:100,marginBottom:20}} resizeMode='contain'/>
            <Text style={{fontSize:9,textAlign:'center',marginBottom:5,fontWeight:'300'}}>London Dreams choco cream wafer 30G X 12</Text>
            <Text style={{fontSize:12,fontWeight:'600'}}>₦10,499</Text>
            <Text style={{position:'absolute',color:'red',paddingVertical:7,paddingHorizontal:5,top:8,right:15,backgroundColor:'#cfefe2',fontSize:10}}>-50%</Text>
            </View>
           </View>
          </View>


          <ImageBackground source={require('../assets/land.jpg')} style={{width:'100%',height:200,flex:1}} resizeMode='cover'></ImageBackground>


          <Text style={[styles.container14,styles.container17]}>HOME & APPLIANCES</Text> 


          <View style={{alignItems:'center',}}>
     <View style={styles.container13}>

      <View style={styles.container12}>
          <View style={{alignItems:'center'}}>
          <Image source={require('../assets/ant.png')} style={{width:70,height:40,marginBottom:10}}/>
            <Text style={{fontSize:9,fontWeight:'300'}}>Blender</Text>
          </View>
          <View style={{alignItems:'center'}}>
             <Image source={require('../assets/ant1.png')} style={{width:70,height:40,marginBottom:10}}/>
             <Text style={{fontSize:9,fontWeight:'300'}}>Microwaves</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/ant2.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>Cookers</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/ant3.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>Bundles</Text>
          </View>   
      </View>

      <View style={styles.container12}>
          <View style={{alignItems:'center'}}>
            <Image source={require('../assets/ant4.png')} style={{width:70,height:40,marginBottom:10}}/>
            <Text style={{fontSize:9,fontWeight:'300'}}>Air Conditioners</Text>
          </View>
          <View style={{alignItems:'center'}}>
             <Image source={require('../assets/ant5.png')} style={{width:70,height:40,marginBottom:10}}/>
             <Text style={{fontSize:9,fontWeight:'300'}}>Fans</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/ant6.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>Washer</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/ant7.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>Cosy Bedroom</Text>
          </View>   
      </View>
      </View>
      </View>



      <View  style={styles.container5}>
               <View>
                   <Text style={{fontSize:12,color:'white'}}>TOP DEALS</Text>
                   <Text style={{fontSize:10,color:'white'}}>Home & Appliances</Text> 
               </View>
                   <Text style={{fontSize:10,color:'white',fontWeight:'500'}}>SEE ALL</Text>
           </View>



      <View style={{alignItems:'center'}}>
           <View style={styles.container6}>
           {/* <View style={{width:200,height:180}}><Image source={require('../assets/sec.png')} resizeMode={['center']} style={{ flex:1,width:'100%',height:'100%', }}/></View> */}
            <View style={[styles.container7,styles.container18]}>
                <Image source={require('../assets/ame.jpg')} style={{width:100,height:100,marginBottom:20}} resizeMode='contain'/>
                <Text style={{fontSize:9,textAlign:'center',marginBottom:5,fontWeight:'300'}}>PV_WD 4.5kg Single Tub Washing Machine-White </Text>
                <Text style={{fontSize:12,fontWeight:'600'}}>₦35,000</Text>
                <Text style={{position:'absolute',color:'red',paddingVertical:7,paddingHorizontal:5,top:8,right:15,backgroundColor:'#cfefe2',fontSize:10,}}>-50%</Text>
            </View>
            <View style={[styles.container8,styles.container18]}>
            <Image source={require('../assets/ame1.jpg')} style={{width:100,height:100,marginBottom:20}} resizeMode='contain'/>
            <Text style={{fontSize:9,textAlign:'center',marginBottom:5,fontWeight:'300'}}>Bluetooth sound Bar  System -204</Text>
            <Text style={{fontSize:12,fontWeight:'600'}}>₦19,890</Text>
            <Text style={{position:'absolute',color:'red',paddingVertical:7,paddingHorizontal:5,top:8,right:15,backgroundColor:'#cfefe2',fontSize:10}}>-30%</Text>
            </View>
           </View>
           <View style={styles.container6}>
           {/* <View style={{width:200,height:180}}><Image source={require('../assets/sec.png')} resizeMode={['center']} style={{ flex:1,width:'100%',height:'100%', }}/></View> */}
            <View  style={[styles.container9,styles.container18]}>
            <Image source={require('../assets/ame3.jpg')} style={{width:100,height:100,marginBottom:20}} resizeMode='contain'/>
            <Text style={{fontSize:9,textAlign:'center',marginBottom:5,fontWeight:'300'}}>Quality Bedsheet with pillow Cases</Text>
            <Text style={{fontSize:12,fontWeight:'600'}}>₦2,520</Text>
            <Text style={{position:'absolute',color:'red',paddingVertical:7,paddingHorizontal:5,top:8,right:15,backgroundColor:'#cfefe2',fontSize:10}}>-20%</Text>
            </View>
            <View style={[styles.container10,styles.container18]}>
            <Image source={require('../assets/ame2.jpg')} style={{width:100,height:100,marginBottom:20}} resizeMode='contain'/>
            <Text style={{fontSize:9,textAlign:'center',marginBottom:5,fontWeight:'300'}}>1HP Split Air Conditioner + Installation Kit NX-MS...</Text>
            <Text style={{fontSize:12,fontWeight:'600'}}>₦10,499</Text>
            <Text style={{position:'absolute',color:'red',paddingVertical:7,paddingHorizontal:5,top:8,right:15,backgroundColor:'#cfefe2',fontSize:10}}>-50%</Text>
            </View>
           </View>
          </View>

          <Text style={[styles.container20,styles.container17]}>FEATURED CATEGORIES</Text> 


          <View style={{alignItems:'center',}}>
     <View style={styles.container13}>

      <View style={styles.container12}>
          <View style={{alignItems:'center'}}>
          <Image source={require('../assets/ph.png')} style={{width:70,height:40,marginBottom:10}}/>
            <Text style={{fontSize:9,fontWeight:'300'}}>Phones & Tablets</Text>
          </View>
          <View style={{alignItems:'center'}}>
             <Image source={require('../assets/ph1.png')} style={{width:70,height:40,marginBottom:10}}/>
             <Text style={{fontSize:9,fontWeight:'300'}}>Fashion</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/ph2.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>Groceries</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/ph3.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>Baby & Products</Text>
          </View>   
      </View>

      <View style={styles.container12}>
          <View style={{alignItems:'center'}}>
            <Image source={require('../assets/ph4.png')} style={{width:70,height:40,marginBottom:10}}/>
            <Text style={{fontSize:9,fontWeight:'300'}}>Home & Office</Text>
          </View>
          <View style={{alignItems:'center'}}>
             <Image source={require('../assets/ph5.png')} style={{width:70,height:40,marginBottom:10}}/>
             <Text style={{fontSize:9,fontWeight:'300'}}>Computing</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/ph6.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>Electronics</Text>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/ph7.png')} style={{width:70,height:40,marginBottom:10}}/>
              <Text style={{fontSize:9,fontWeight:'300'}}>Health & Beauty</Text>
          </View>   
      </View>
      </View>
      </View>

     <Text style={{paddingVertical:10,paddingLeft:10,fontSize:10,backgroundColor:'#28b67d'}}>JUST FOR YOU</Text>


      <View style={{alignItems:'center',marginBottom:7}}>
       <View style={{flexDirection:'row',width:'96%',justifyContent:'space-between'}}>
           <View style={styles.container21}>
               <View style={{alignItems:'center',marginBottom:10}}>
                   <Image source={require('../assets/col.jpg')} style={{width:150,height:150}} resizeMode='contain'/>
               </View>
               <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
               <Text styles={{fontWeight:'400',marginBottom:3}}>₦3,750</Text>
               <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text  style={styles.container22}>-54%</Text></View>
           </View>
           <View style={styles.container21}>
              <View style={{alignItems:'center',marginBottom:10}}>
                 <Image source={require('../assets/col.jpg')} style={{width:150,height:150}} resizeMode='contain'/>
              </View>
              <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
              <Text styles={{fontWeight:'400',marginBottom:3}}>₦2,750</Text>
              <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text style={styles.container22}>-54%</Text></View>
           </View>
       </View>
       </View>


       <View style={{alignItems:'center',marginBottom:7}}>
       <View style={{flexDirection:'row',width:'96%',justifyContent:'space-between'}}>
           <View style={styles.container21}>
               <View style={{alignItems:'center',marginBottom:10}}>
                   <Image source={require('../assets/col.jpg')} style={{width:150,height:150}} resizeMode='contain'/>
               </View>
               <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
               <Text styles={{fontWeight:'400',marginBottom:3}}>₦3,750</Text>
               <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text  style={styles.container22}>-54%</Text></View>
           </View>
           <View style={styles.container21}>
              <View style={{alignItems:'center',marginBottom:10}}>
                 <Image source={require('../assets/col.jpg')} style={{width:150,height:150}} resizeMode='contain'/>
              </View>
              <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
              <Text styles={{fontWeight:'400',marginBottom:3}}>₦2,750</Text>
              <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text style={styles.container22}>-54%</Text></View>
           </View>
       </View>
       </View>


       <View style={{alignItems:'center',marginBottom:7}}>
       <View style={{flexDirection:'row',width:'96%',justifyContent:'space-between'}}>
           <View style={styles.container21}>
               <View style={{alignItems:'center',marginBottom:10}}>
                   <Image source={require('../assets/col.jpg')} style={{width:150,height:150}} resizeMode='contain'/>
               </View>
               <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
               <Text styles={{fontWeight:'400',marginBottom:3}}>₦3,750</Text>
               <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text  style={styles.container22}>-54%</Text></View>
           </View>
           <View style={styles.container21}>
              <View style={{alignItems:'center',marginBottom:10}}>
                 <Image source={require('../assets/col.jpg')} style={{width:150,height:150}} resizeMode='contain'/>
              </View>
              <Text style={{fontSize:11,fontWeight:'300',marginBottom:3}}>Skyrun Double Door Top Mount...</Text>
              <Text styles={{fontWeight:'400',marginBottom:3}}>₦2,750</Text>
              <View style={{flexDirection:'row'}}><Text style={styles.container23}>₦3900</Text><Text style={styles.container22}>-54%</Text></View>
           </View>
       </View>
       </View>




{/* 
       <SafeAreaView >
       <FlatList
          data={DATA}
         renderItem={renderItem}
          keyExtractor={item => item.id}
         
         />
  </SafeAreaView> */}

{/* 
      <View style={{alignItems:'center',marginBottom:7}}>
       <View style={{flexDirection:'row',width:'96%',justifyContent:'space-between'}}>
           <View style={styles.container21}>
           <Image source={require('../assets/col.jpg')} style={{width:100,height:100}} resizeMode='contain'/>
           </View>
           <View style={styles.container21}>
           <Image source={require('../assets/col.jpg')} style={{width:100,height:100}} resizeMode='contain'/>
           </View>
       </View>
       </View>

       <View style={{alignItems:'center',marginBottom:7}}>
       <View style={{flexDirection:'row',width:'96%',justifyContent:'space-between'}}>
           <View style={styles.container21}></View>
           <View style={styles.container21}></View>
       </View>
       </View> */}

        </ScrollView>
          </SafeAreaView>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
 container:{
     flex:1,
    //  alignItems:'center',
    // paddingHorizontal:1
     
 },
 container1:{
     width:'100%',
    //  maxWidth:800,
     alignItems:'center',
   backgroundColor:'#28b67d',
     paddingVertical:5,
     paddingHorizontal:10,
     marginBottom:3

 },
 container2:{
     position:'absolute',
   top:'35%',
   left:10,
   zIndex:3
 },




 container3:{
     width:40,
     height:40,
     borderRadius:100,
     marginBottom:5

 },
 container4:{
    //  shadowColor:'grey',
    //  shadowOffset:{width:0,height:2},
    //  shadowRadius:8,
    //  elevation:1,
    //  shadowOpacity:0.8,
     backgroundColor:'white',
     paddingVertical:10,
     width:'100%', 
     borderRadius:2
 },
 container5:{
     backgroundColor:'#28b67d',
     flexDirection:'row',
     paddingVertical:10,
     paddingHorizontal:15,
     justifyContent:'space-between',
     
 },
 container6:{
   flexDirection:'row',
   alignItems:'center',
//    width:'100%'
   
 },

  container7:{
    width:"48%",height:180,
    borderRightColor:'#d7d7d7',
    borderRightWidth:0.5,
    borderBottomColor:'#d7d7d7',
    borderBottomWidth:0.5,
    borderLeftColor:'#e6e6e6',
    borderLeftWidth:0.5,
    alignItems:'center',
    paddingTop:12,
    paddingHorizontal:4
  },
  container8:{
    width:"48%",height:180,
    borderLeftColor:'#d7d7d7',
    borderLeftWidth:0.5,
    borderBottomColor:'#d7d7d7',
    borderBottomWidth:0.5,
    borderRightColor:'#e6e6e6',
    borderRightWidth:0.5,
    alignItems:'center',
    paddingTop:12,
    paddingHorizontal:4
   
  },

  container9:{
    width:"48%",height:180,
    borderRightColor:'#d7d7d7',
    borderRightWidth:0.5,
    borderBottomColor:'#e6e6e6',
    borderBottomWidth:0.5,
    borderLeftColor:'#e6e6e6',
    borderLeftWidth:0.5,
    alignItems:'center',
    paddingTop:12,
    paddingHorizontal:4
  },
  container10:{
    width:"48%",height:180,
    borderLeftColor:'#d7d7d7',
    borderLeftWidth:0.5,
    borderBottomColor:'#e6e6e6',
    borderBottomWidth:0.5,
    borderRightColor:'#e6e6e6',
    borderRightWidth:0.5,
    alignItems:'center',
    paddingTop:12,
    paddingHorizontal:4
   
  },
container11:{
    paddingLeft:10,
    paddingVertical:15,
    fontSize:10,
    fontWeight:'400',
    backgroundColor:'#cfefe2',
    color:'#000',
    letterSpacing:0.1
},
container12:{
   flexDirection:'row',
   paddingVertical:5,
   paddingHorizontal:10,
   justifyContent:'space-between'
},
container13:{
    backgroundColor:'white',
    paddingVertical:8,
    shadowColor:'#cfefe2',
    shadowOffset:{width:0,height:2},
    shadowRadius:8,
    elevation:1,
    shadowOpacity:0.8,
    width:'97%'
},
container14:{
    paddingLeft:10,
    paddingVertical:15,
    fontSize:10,
    fontWeight:'500',
    backgroundColor:'#28b67d',
    color:'#fff'
},
container15:{
    marginTop:-2.5},
    

    container16:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:10,
        paddingHorizontal:10,
        backgroundColor:'white',
        marginTop:5
    },
    container17:{
        marginTop:-3.1},

        cup:{
            marginTop:-4.5},
        
container18:{
    backgroundColor:'white'
},
container19:{
    width:windowWidth/2,
    height:95,
},
container20:{
    paddingLeft:10,
    paddingVertical:15,
    fontSize:10,
    fontWeight:'400',
    backgroundColor:'#cfefe2',
    color:'black'

},
container21:{
    width:'49%',
    height:270,
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
container24:{
    width:110,
    height:7,
    borderRadius:10,
    backgroundColor:'#f3f3f3',
},
container25:{
    position:'absolute',
    top:0,left:0,right:0, bottom:0,
    backgroundColor:'green',width:"30%",borderTopLeftRadius:10,borderBottomLeftRadius:10
},
container26:{
    width:'100%'
},
circleDiv:{
    position:'absolute',
    bottom:15,
    height:10,
    flexDirection:'row',
    // justifyContent:'center',
    alignItems:'center'


},
circleDivContent:{
    width:6,
    height:6,
    borderRadius:50,
    backgroundColor:'#fff',
    marginRight:5
}


})

export default carl;