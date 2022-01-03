
import React,{useEffect,useState} from 'react';
import {View,Text,StyleSheet, SafeAreaView,Pressable, ScrollView,Image,Dimensions} from 'react-native';
import {Ionicons } from 'react-native-vector-icons';



const {width,height} = Dimensions.get('screen');

const HeaderImg = [{id:3,img:require('../assets/phoneswap.webp')},{id:4,img:require('../assets/phonesBanner3.jpg')},{id:5,img:require('../assets/phonesBanner4.jpg')}]

const HeaderImg1 = [{id:3,img:require('../assets/phns.jpg')},{id:4,img:require('../assets/phns1.jpg')},{id:5,img:require('../assets/phns3.jpg')},{id:6,img:require('../assets/phns4.png')},{id:7,img:require('../assets/phns5.png')},{id:8,img:require('../assets/phns1.jpg')},{id:9,img:require('../assets/phns.jpg')}]



const output4=[{id:1,img:require('../assets/samp.jpg'),img1:require('../assets/samp1.jpg')},{id:2,img:require('../assets/samp3.jpg'),img1:require('../assets/samp4.jpg')},{id:3,img:require('../assets/samp5.jpg'),img1:require('../assets/samp6.jpg')},
{id:4,img:require('../assets/samp7.jpg'),img1:require('../assets/samp8.jpg')},{id:5,img:require('../assets/samp9.jpg'),img1:require('../assets/samp10.jpg')},{id:6,img:require('../assets/samp11.jpg'),img1:require('../assets/samp12.jpg')},{id:7,img:require('../assets/samp13.jpg'),img1:require('../assets/samp.jpg')},{id:8,img:require('../assets/samp1.jpg'),img1:require('../assets/samp2.jpg')},{id:9,img:require('../assets/samp3.jpg'),img1:require('../assets/samp4.jpg')},{id:10,img:require('../assets/samp5.jpg'),img1:require('../assets/samp5.jpg')},{id:11,img:require('../assets/samp6.jpg'),img1:require('../assets/samp7.jpg')},{id:12,img:require('../assets/samp8.jpg'),img1:require('../assets/samp9.jpg')},{id:13,img:require('../assets/samp10.jpg'),img1:require('../assets/samp11.jpg')},{id:14,img:require('../assets/samp12.jpg'),img1:require('../assets/samp11.jpg')}]


// const week =()=>{
    
//         let  i;
//         let rate = 0;
//         let rate1 = HeaderImg.length;
//         for(i=0; i< rate1; i++ ){
//             rate1[i].style.display = "none";
//         }
//            rate++

//            if( rate > rate1 ){
//              rate =1  
//            }
//            rate1[rate -1].style.display = "flex";
//            setInternal(week, 2000);
    
// }






const Phones =({navigation})=>{

    // useEffect(()=>{
       
    //    setInterval(() => {
    //     week()
    //    },1000);

    // week()

    // },[])
       const [count,setCount] = useState(0);
       const [count2,setCount2] = useState(true);
       const [count3,setCount3] = useState(false);

       const imageW = width * 1;
       const imageH = (imageW * 0.27) - 5;


       const counting = ()=>{

           setCount(rate=> rate + 1);
           setCount2(!count2);
           setCount3(!count3)

       }

       const countingReduce =()=>{
        setCount(rate=> rate - 1);
         if(count <= 1){
            setCount2(!count2);
            setCount3(!count3)
         }
       }


       const countingIncrement =()=>{
        setCount(rate=> rate + 1);
        
         }
       

    return(
        <SafeAreaView>
         <View style={styles.container}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <Pressable onPress={()=>navigation.goBack()} ><Ionicons name="arrow-back-sharp" size={22} color="#fff" style={{marginLeft:5}}/></Pressable>
                 <Text style={{marginLeft:14,fontSize:16,fontWeight:'700',letterSpacing:0.1,color:'#fff'}}>Phones & Tablets</Text>
              </View>
             <View style={{flexDirection:'row',alignItems:'center'}}>
               <Pressable onPress={()=>navigation.navigate('search')}><Ionicons name="md-search" size={18} color="#fff" /></Pressable>
                <Ionicons name="cart-outline" size={22} color="#fff" style={{marginLeft:5}}/>
                <View style={{width:14,height:14,backgroundColor:'#fff',borderRadius:100,position:'absolute',top:-4,right:-3,alignItems:'center',justifyContent:'center'}}><Text style={{fontSize:8,color:'#000'}}>{count}</Text></View>
              </View>
         </View>
         {/*second Swection*/}

         <ScrollView showsVerticalScrollIndicator={false}>
           <View style={{paddingHorizontal:15,paddingVertical:10}}>
               <Image source={require('../assets/phonesBanner2.jpg')} resizeMode="contain" style={{width:'100%',height:150}}/>
           </View>

           {/*third section*/}

         

           <ScrollView horizontal style={{paddingVertical:8,backgroundColor:'#fff',marginTop:8}} showsHorizontalScrollIndicator={false}>
           {HeaderImg.map((tm)=>(
                   <View key={tm.id}>
                       <Image source={tm.img} style={{width:250,height:150,marginRight:8}} resizeMode="contain"/>
                   </View>
               ))

               }

               {/* {
                  week() 
               } */}
           </ScrollView >
        

           <View style={{backgroundColor:'#fff',marginTop:8}}>
               <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:10,paddingVertical:8,marginBottom:5}}>
                   <Text style={{fontSize:14,fontWeight:'400',}}>Best Deals on Phones & Accessories</Text>
                   <Text style={{color:'red',fontSize:12,fontWeight:'400'}}>SEE ALL</Text>
               </View>
               <ScrollView horizontal showsHorizontalScrollIndicator={false}>
               {
              HeaderImg1.map((shoe)=>(
                   <View style={{width:130,marginLeft:5,backgroundColor:'#fff',marginRight:10}} key={shoe.id}>
                       <Image source={shoe.img}  style={{width:'100%',height:150,marginBottom:8}} resizeMode="contain"/>
                       <View style={{position:'absolute',top:5,right:5,paddingVertical:5,paddingHorizontal:3,backgroundColor:'#d6f1e7',borderRadius:2}}><Text style={{fontSize:10,color:'red'}}>-50%</Text></View>
                       <Text numberOfLines={1} style={{fontSize:11,color:'#000',fontWeight:'300',marginBottom:5}}>iphone 12 pro 128GB,60mp</Text>
                       <Text style={{fontWeight:'600',marginBottom:14}}>₦ 590,000</Text>
                   </View>
                   ))
          } 
               </ScrollView>

           </View>
  {/*another section*/}
           <View style={{backgroundColor:"#fff",paddingTop:10,paddingBottom:15,alignItems:'center',marginTop:8}}>
               <Text style={{color:'#000',fontSize:16,fontWeight:'400'}}>Phones & Tablets</Text>
           </View>
           <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#fff',paddingHorizontal:3,paddingBottom:15}}>
             <View style={{width:"23%",alignItems:'center'}}>
                <Image source={require('../assets/iphone12.jpg')} style={{width:'100%',height:120,borderRadius:3,marginBottom:8}} resizeMode="cover" />
                <Text style={{fontSize:10,color:'#000',}}>iphone Phones</Text>
             </View>
             <View style={{width:'23%',alignItems:'center'}}>
                <Image source={require('../assets/OppoK3.jpg')} style={{width:'100%',height:120,borderRadius:3,marginBottom:8}} resizeMode="cover" />
                <Text style={{fontSize:10,color:'#000',}}>Oppo Phones</Text>
             </View>
             <View style={{width:'23%',alignItems:'center'}}>
                <Image source={require('../assets/infinixHot10.jpg')} style={{width:'100%',height:120,borderRadius:3,marginBottom:8}} resizeMode="contain" />
                <Text style={{fontSize:10,color:'#000',}}>infinix Phones</Text>
             </View>
             <View style={{width:'23%',alignItems:'center'}}>
                <Image source={require('../assets/Samsung.png')} style={{width:'100%',height:120,borderRadius:3,marginBottom:8}} resizeMode="contain" />
                <Text style={{fontSize:10,color:'#000',}}>Samsung Phones</Text>
             </View>
           </View>

           {/* anothersection */}
         

           <View style={{backgroundColor:'#fff',marginTop:8}}>
               <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:10,paddingVertical:8,marginBottom:5}}>
                   <Text style={{fontSize:14,fontWeight:'400'}}>Samsung</Text>
                   <Text style={{color:'red',fontSize:12,fontWeight:'400'}}>SEE ALL</Text>
               </View>
               <ScrollView horizontal showsHorizontalScrollIndicator={false}>
               {
              HeaderImg1.map((shoe)=>(
                   <View style={{width:130,marginLeft:5,backgroundColor:'#fff',marginRight:10}} key={shoe.id}>
                       <Image source={shoe.img}  style={{width:'100%',height:150,marginBottom:8}} resizeMode="contain"/>
                       <View style={{position:'absolute',top:5,right:5,paddingVertical:5,paddingHorizontal:3,backgroundColor:'#d6f1e7',borderRadius:2}}><Text style={{fontSize:10,color:'red'}}>-50%</Text></View>
                       <Text numberOfLines={1} style={{fontSize:11,color:'#000',fontWeight:'300',marginBottom:5}}>iphone 12 pro 128GB,60mp</Text>
                       <Text style={{fontWeight:'600',marginBottom:14}}>₦ 590,000</Text>
                   </View>
                   ))
          } 
               </ScrollView>

           </View>
     {/* another section*/}
           <View style={{flexDirection:'row',paddingVertical:8}}>
               <View style={{width:'50%'}}>
                   <Image source={require('../assets/fur.jpg')} style={{width:'100%',height:imageH }} resizeMode="cover"/>
                </View>
               <View style={{width:'50%'}}>
                   <Image source={require('../assets/fur1.jpg')} style={{width:'100%',height:imageH }} resizeMode="cover"/>
                </View>
           </View>

           {/* <View style={{flexDirection:'row',paddingTop:10,paddingBottom:14,paddingHorizontal:10,alignItems:'center',justifyContent:'space-between',backgroundColor:'#fff'}}>
               <Text style={{fontSize:12,fontWeight:'400',color:'#000'}}>Top Picks For You</Text>
               <Text style={{fontSize:12,fontWeight:'400',color:'red'}}>SEE ALL</Text>
           </View> */}

           
           





            {/* anothersection*/}
            {/* <View>
               <View style={{paddingTop:10,paddingBottom:15}}><Text>Phone Accessories</Text></View>
            </View> */}

            <View style={{backgroundColor:"#fff",paddingTop:10,paddingBottom:15,alignItems:'center',marginTop:8}}>
               <Text style={{color:'#000',fontSize:16,fontWeight:'400'}}>Phones Accessories</Text>
           </View>
           <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#fff',paddingHorizontal:3,paddingBottom:15}}>
             <View style={{width:"23%",alignItems:'center'}}>
                <Image source={require('../assets/webph.webp')} style={{width:'100%',height:120,borderRadius:3,marginBottom:8}} resizeMode="cover" />
                <Text style={{fontSize:10,color:'#000',}}>iphone Phones</Text>
             </View>
             <View style={{width:'23%',alignItems:'center'}}>
                <Image source={require('../assets/garri.jpg')} style={{width:'100%',height:120,borderRadius:3,marginBottom:8}} resizeMode="cover" />
                <Text style={{fontSize:10,color:'#000',}}>Andriod Phones</Text>
             </View>
             <View style={{width:'23%',alignItems:'center'}}>
                <Image source={require('../assets/garri2.jpg')} style={{width:'100%',height:120,borderRadius:3,marginBottom:8}} resizeMode="cover" />
                <Text style={{fontSize:10,color:'#000',}}>Andriod Phones</Text>
             </View>
             <View style={{width:'23%',alignItems:'center'}}>
                <Image source={require('../assets/rj.jpg')} style={{width:'100%',height:120,borderRadius:3,marginBottom:8}} resizeMode="cover" />
                <Text style={{fontSize:10,color:'#000',}}>Andriod Phones</Text>
             </View>
           </View>

           <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#fff',paddingHorizontal:3,paddingBottom:15}}>
             <View style={{width:"23%",alignItems:'center'}}>
                <Image source={require('../assets/rj.jpg')} style={{width:'100%',height:120,borderRadius:3,marginBottom:8}} resizeMode="cover" />
                <Text style={{fontSize:10,color:'#000',}}>Andriod Phones</Text>
             </View>
             <View style={{width:'23%',alignItems:'center'}}>
                <Image source={require('../assets/rj.jpg')} style={{width:'100%',height:120,borderRadius:3,marginBottom:8}} resizeMode="cover" />
                <Text style={{fontSize:10,color:'#000',}}>Andriod Phones</Text>
             </View>
             <View style={{width:'23%',alignItems:'center'}}>
                <Image source={require('../assets/rj.jpg')} style={{width:'100%',height:120,borderRadius:3,marginBottom:8}} resizeMode="cover" />
                <Text style={{fontSize:10,color:'#000',}}>Andriod Phones</Text>
             </View>
             <View style={{width:'23%',alignItems:'center'}}>
                <Image source={require('../assets/rj.jpg')} style={{width:'100%',height:120,borderRadius:3,marginBottom:8}} resizeMode="cover" />
                <Text style={{fontSize:10,color:'#000',}}>Andriod Phones</Text>
             </View>
           </View>

           {/*anothersection*/}

           <View style={{backgroundColor:'#fff'}}>
               <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:10,paddingVertical:8,marginBottom:5}}>
                   <Text style={{fontSize:14,fontWeight:'500'}}>Mobile Game Controllers</Text>
                   <Text style={{color:'red',fontSize:12,fontWeight:'400'}}>SEE ALL</Text>
               </View>
               <ScrollView horizontal showsHorizontalScrollIndicator={false}>
               {
              HeaderImg1.map((shoe)=>(
                   <View style={{width:130,marginLeft:5,backgroundColor:'#fff',marginRight:10}} key={shoe.id}>
                       <Image source={shoe.img}  style={{width:'100%',height:150,marginBottom:8}} resizeMode="contain"/>
                       <View style={{position:'absolute',top:5,right:5,paddingVertical:5,paddingHorizontal:3,backgroundColor:'#d6f1e7',borderRadius:2}}><Text style={{fontSize:10,color:'red'}}>-50%</Text></View>
                       <Text numberOfLines={1} style={{fontSize:11,color:'#000',fontWeight:'300',marginBottom:5}}>iphone 12 pro 128GB,60mp</Text>
                       <Text style={{fontWeight:'600',marginBottom:14}}>₦ 590,000</Text>
                   </View>
                   ))
          } 
               </ScrollView>

           </View>

           {/* anothersection*/}

          <View>
              <Image source={require('../assets/tabletsBanner.jpg')} style={{width:'100%',height:150}} resizeMode="cover"/>
          </View>
          {/* anothersection*/}

          <View style={{backgroundColor:"#fff",paddingTop:10,paddingBottom:15,alignItems:'center',marginTop:8}}>
               <Text style={{color:'#000',fontSize:16,fontWeight:'400'}}>Tablet Accessories</Text>
           </View>
           <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#fff',paddingHorizontal:3,paddingBottom:15}}>
             <View style={{width:"23%",alignItems:'center'}}>
                <Image source={require('../assets/tablets1.jpg')} style={{width:'100%',height:120,borderRadius:3,marginBottom:8}} resizeMode="contain" />
                <Text style={{fontSize:10,color:'#000',}}>Andriod Phones</Text>
             </View>
             <View style={{width:'23%',alignItems:'center'}}>
                <Image source={require('../assets/tablets2.jpg')} style={{width:'100%',height:120,borderRadius:3,marginBottom:8}} resizeMode="contain" />
                <Text style={{fontSize:10,color:'#000',}}>Andriod Phones</Text>
             </View>
             <View style={{width:'23%',alignItems:'center'}}>
                <Image source={require('../assets/tablet3.jpg')} style={{width:'100%',height:120,borderRadius:3,marginBottom:8}} resizeMode="contain" />
                <Text style={{fontSize:10,color:'#000',}}>Andriod Phones</Text>
             </View>
             <View style={{width:'23%',alignItems:'center'}}>
                <Image source={require('../assets/tablets4.jpg')} style={{width:'100%',height:120,borderRadius:3,marginBottom:8}} resizeMode="contain" />
                <Text style={{fontSize:10,color:'#000',}}>Andriod Phones</Text>
             </View>
           </View>

        {/*anothersection*/}

        <View style={{backgroundColor:"#fff",paddingTop:10,paddingBottom:15,alignItems:'center',marginTop:8}}>
               <Text style={{color:'#000',fontSize:16,fontWeight:'400'}}>Oficial Stores</Text>
           </View>
           <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#fff',paddingHorizontal:3,paddingBottom:15}}>
             <View style={{width:"23%",alignItems:'center'}}>
                <Image source={require('../assets/saur.png')} style={{width:'100%',height:120,borderRadius:3,marginBottom:8}} resizeMode="contain" />
              
             </View>
             <View style={{width:'23%',alignItems:'center'}}>
                <Image source={require('../assets/nokia.png')} style={{width:'100%',height:120,borderRadius:3,marginBottom:8}} resizeMode="contain" />
              
             </View>
             <View style={{width:'23%',alignItems:'center'}}>
                <Image source={require('../assets/lololo.jpg')} style={{width:'100%',height:120,borderRadius:3,marginBottom:8}} resizeMode="cover" />
            
             </View>
             <View style={{width:'23%',alignItems:'center'}}>
                <Image source={require('../assets/infinix.png')} style={{width:'100%',height:120,borderRadius:3,marginBottom:8}} resizeMode="contain" />
              
             </View>
             
           </View>


           <View style={{backgroundColor:'#fff'}}>
               <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:10,paddingVertical:8,marginBottom:5}}>
                   <Text style={{fontSize:14,fontWeight:'500'}}>Anker Official Store</Text>
                   <Text style={{color:'red',fontSize:12,fontWeight:'400'}}>SEE ALL</Text>
               </View>
               <ScrollView horizontal showsHorizontalScrollIndicator={false}>
               {
              HeaderImg1.map((shoe)=>(
                   <View style={{width:130,marginLeft:5,backgroundColor:'#fff',marginRight:10}} key={shoe.id}>
                       <Image source={shoe.img}  style={{width:'100%',height:150,marginBottom:8}} resizeMode="contain"/>
                       <View style={{position:'absolute',top:5,right:5,paddingVertical:5,paddingHorizontal:3,backgroundColor:'#d6f1e7',borderRadius:2}}><Text style={{fontSize:10,color:'red'}}>-50%</Text></View>
                       <Text numberOfLines={1} style={{fontSize:11,color:'#000',fontWeight:'300',marginBottom:5}}>iphone 12 pro 128GB,60mp</Text>
                       <Text style={{fontWeight:'600',marginBottom:14}}>₦ 590,000</Text>
                   </View>
                   ))
          } 
               </ScrollView>

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


{/*anothersectiomn*/}
     
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
                 {count2 ?
                <Pressable onPress={counting}><View style={styles.container12} testID='atta'>
                    <Text style={{color:'#fff',fontSize:12,fontWeight:'700'}}>ADD TO CART</Text>
                </View></Pressable>: null}

                { count3 ?
                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:40,}}>
                     <Pressable onPress={countingReduce}><View style={{paddingVertical:8,paddingHorizontal:12,backgroundColor:'#28b67d',borderRadius:3}}><Text Style={{fontSize:22,color:'#fff'}}>-</Text></View></Pressable>
                      <Text>{count}</Text>
                     <Pressable onPress={countingIncrement}><View style={{paddingVertical:8,paddingHorizontal:12,backgroundColor:'#28b67d',borderRadius:3}}><Text Style={{fontSize:22,color:'#fff'}}>+</Text></View></Pressable>
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
container:{
    backgroundColor:'#28b67d',
    paddingHorizontal:10,
    paddingVertical:12,
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:3
},
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


export default Phones;