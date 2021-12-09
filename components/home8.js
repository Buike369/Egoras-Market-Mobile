import React,{useState} from 'react';
import {View,Text,StyleSheet,SafeAreaView,Image, ScrollView,Pressable} from 'react-native';
import Search1 from './home7';
import {Ionicons } from 'react-native-vector-icons';
import AppLog6 from './home10';
import AppLog1 from './home11';
import AppLog2 from './home12';
import AppLog3 from './home13';
import AppLog4 from './home14';



const secondBottomPage =()=>{


 const [tab2,setTab2]=useState(<AppLog6/>)
 const [colorChange,setColorChange]= useState(styles.container1);
 const [colorChange1,setColorChange1]= useState(styles.container1);
const [speed,setSpeed]= useState('bouy');
// const [tab2,setTab] = useState(['orange1','orange2','orange3','orange4','orange5','orange6']);

// const brief = ()=>{
    
//     if(speed === 'bouy'){
//         setSpeed('bouy');
//         setTab2(<AppLog6/>) 
//     }

//     if(speed === 'bouy1'){
//         setSpeed('bouy1');
//         setTab2(<AppLog1/>)   
//     }
// }

const send =()=>{
setSpeed('bouy1');
setTab2(<AppLog1/>);
}

const send1 =()=>{
    setSpeed('bouy');
    setTab2(<AppLog6/>);
    }

    const send2 =()=>{
        setSpeed('bouy2');
        setTab2(<AppLog2/>);
        }


    const send3 =()=>{
        setSpeed('bouy3');
        setTab2(<AppLog3/>);
        }

        const send4 =()=>{
            setSpeed('bouy4');
            setTab2(<AppLog4/>);
            }

            const send5=()=>{
                setSpeed('bouy5');
                setTab2(<AppLog1/>);
                }
    
         const send6=()=>{
        setSpeed('bouy6');
        setTab2(<AppLog2/>);
        }

    const send7=()=>{
     setSpeed('bouy7');
     setTab2(<AppLog3/>);
    }


    const send8=()=>{
    setSpeed('bouy8');
    setTab2(<AppLog4/>);
    }

    const send9=()=>{
    setSpeed('bouy9');
    setTab2(<AppLog6/>);
    }

    const send10=()=>{
        setSpeed('bouy10');
        setTab2(<AppLog1/>);
        }
     const send11=()=>{
    setSpeed('bouy11');
    setTab2(<AppLog2/>);
    }
// const see = ()=>{ 
//     setTab2(<AppLog1/>);
//     setColorChange1(color);
// }

// const see1= ()=>{
//     setColorChange(color);
//     setTab2(<AppLog6/>)
// }

// const wen = ()=>{
//     tab2[0]=== <AppLog6/>
// }

const color ={
    backgroundColor:'#f7f7f7',
    // backgroundColor:'#28b67d',
    // color:'white',
    color:'#000',
    paddingVertical:18,
    paddingHorizontal:5,
    fontSize:9,
    textAlign:'center',
    fontWeight:'300',
    borderLeftWidth:3,
    borderLeftColor:'#28b67d'
    
} 


    return(

       
            <SafeAreaView  >
               <Search1/>
            
                   <View  style={{flexDirection:'row'}}>

                      
                      <View style={styles.container2}>
                      <ScrollView showsVerticalScrollIndicator={false}>
                      <Pressable onPress={send1}><View  style={speed === 'bouy'? color : styles.container1 } testID='bouy'><Text style={styles.yam}>Grocery</Text></View></Pressable>
                      <Pressable onPress={send}><View style={speed === 'bouy1'? color : styles.container1} testID='bouy1'><Text style={styles.yam}>Health & Beauty</Text></View></Pressable>
                       <Pressable onPress={send2}><View style={speed === 'bouy2'? color :styles.container1} testID='bouy2'><Text  style={styles.yam}>Home & Office</Text></View></Pressable>
                       <Pressable  onPress={send3}><View style={speed === 'bouy3'? color :styles.container1} testID='bouy3'><Text style={styles.yam}>Phones & Tablets</Text></View></Pressable>
                       <Pressable  onPress={send4}><View  style={speed === 'bouy4'? color :styles.container1} testID='bouy4'><Text style={styles.yam}>Computing</Text></View></Pressable>
                       <Pressable onPress={send5}><View style={speed === 'bouy5'? color :styles.container1} testID='bouy5'><Text style={styles.yam}>Electronics</Text></View></Pressable>
                       <Pressable onPress={send6}><View style={speed === 'bouy6'? color :styles.container1} testID='bouy6'><Text style={styles.yam}>Women's Fashion</Text></View></Pressable>
                       <Pressable  onPress={send7}><View style={speed === 'bouy7'? color :styles.container1} testID='bouy7'><Text style={styles.yam}>Men's Fashion</Text></View></Pressable>
                       <Pressable  onPress={send8}><View style={speed === 'bouy8'? color :styles.container1} testID='bouy8'><Text style={styles.yam}>Baby Products</Text></View></Pressable>
                       <Pressable  onPress={send9}><View style={speed === 'bouy9'? color :styles.container1} testID='bouy9'><Text style={styles.yam}>Gaming</Text></View></Pressable>
                       <Pressable onPress={send10}><View style={speed === 'bouy10'? color :styles.container1} testID='bouy10'><Text  style={styles.yam} >Sporting & Goods</Text></View></Pressable>
                       <Pressable onPress={send11}><View style={speed === 'bouy11'? color :styles.container1} testID='bouy11'><Text  style={styles.yam} >Automobile</Text></View></Pressable>
                       </ScrollView>
                      </View>


                      

                      <View style={styles.container3}>
                         <ScrollView showsVerticalScrollIndicator={false}> 
                        

                     {
                         tab2
                         
                     }
  
                         {/* <AppLog6/> */}

                        </ScrollView>

                      </View>
                   </View>
               
           </SafeAreaView>
   
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    container1:{
        paddingVertical:18,
        paddingHorizontal:5,
       
       
    },

   container2:{
       backgroundColor:'white',
       flex:1,
     

   },
   container3:{
    // backgroundColor:'#f5f5f5',
    flex:3.4,
    // alignItems:'center'
    paddingLeft:7,
    paddingRight:3,
    paddingTop:7
},
yam:{
    fontSize:9,
    color:'#000',
    textAlign:'center',
    fontWeight:'300'
}

})

export default secondBottomPage;