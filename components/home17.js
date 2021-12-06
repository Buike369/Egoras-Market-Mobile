import React,{useState} from 'react';
// import {View,Text,StyleSheet,Image,ScrollView,} from 'react-native';
import {Feather } from 'react-native-vector-icons';
import {View,Text,StyleSheet,SafeAreaView, ScrollView, Image,FlatList,Pressable,StatusBar} from 'react-native';
import {Ionicons } from 'react-native-vector-icons';



const Section =()=>{

    const [changeFlow,setChangeFlow]=useState("make");
    // const [changeFlow2,setChangeFlow2]=useState(<Sections/>);

    const firm = ()=>{
        setChangeFlow("make");
        // setChangeFlow2(<Sections/>)
    }


    const firm1 = ()=>{
        setChangeFlow("make1");
        // setChangeFlow2(<Sections1/>)
    }

    const firm2 = ()=>{
        setChangeFlow("make2");
        // setChangeFlow2(<Section2/>)
    }


    return(

        // <View style ={styles.container}>
         <View>
      
        {/* <View style={styles.container2}>
            <Text style={{color:'#fff',fontWeight:'700',}}>Feed</Text>
            <View style={styles.container3}><Ionicons name="md-search" size={20} color="#fff" style={styles.container2}/>
            <Ionicons name="cart-outline" size={24} color="#fff" style={{marginLeft:5}} />
            </View>
        </View> */}

        {/* <View style={styles.container4}>
          <Pressable onPress={firm}><View testID="make" style={changeFlow === "make"? [styles.container111,styles.container112]:styles.container112}><Text style={changeFlow === 'make'? [styles.container5,styles.container113]:styles.container5}>FOLLOWING</Text></View></Pressable>
           <Pressable onPress={firm1}><View testID="make1"  style={changeFlow === "make1"? [styles.container111,styles.container112]:styles.container112}><Text style={ changeFlow === 'make1'?[styles.container5,styles.container6,styles.container113]:[styles.container5,styles.container6]}>EXPLORE</Text></View></Pressable>
          <Pressable onPress={firm2}><View testID="make2"  style={changeFlow === "make2"? [styles.container111,styles.container112]: styles.container8}><Text style={ changeFlow === "make2" ? [styles.container5,styles.container6,styles.container113]:[styles.container5,styles.container6]}>BLACK FRIDAY</Text></View></Pressable>
        </View>
        */}
        <ScrollView>
        <View style={styles.container7}>
            <View style={styles.container8}>
                <Text style={{fontSize:10,letterSpacing:0.8,fontWeight:'500',marginBottom:8}}>Fashionable hot sale</Text>
                <Image source={require('../assets/logo.png')}  resizeMode='cover' style={{width:'100%',height:150,marginBottom:10,borderRadius:5}}/>
                <Text style={{fontSize:10,letterSpacing:0.5,fontWeight:'300',marginBottom:20}}>Fashionwholesale hot sale</Text>
                <View style={styles.container9}>
                    <Text style={{fontSize:9,letterSpacing:0.5,color:'grey'}}>116 minutes ago</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Feather name="share-2" size={12} color="#28b67d" style={{marginLeft:5}} />
                        <Text style={{fontSize:10,marginLeft:5,color:'#28b67d'}}>SHARE</Text>
                    </View>
                </View>
            </View>


            <View style={styles.container8}>
                <Text style={{fontSize:10,letterSpacing:0.8,fontWeight:'500',marginBottom:8}}>Fashionable hot sale</Text>
                <Image source={require('../assets/logo1.jpg')}  resizeMode='cover' style={{width:'100%',height:150,marginBottom:10 ,borderRadius:5}}/>
                <Text style={{fontSize:10,letterSpacing:0.5,fontWeight:'300',marginBottom:20}}>Fashionwholesale hot sale</Text>
                <View style={styles.container9}>
                    <Text style={{fontSize:9,letterSpacing:0.5,color:'grey'}}>116 minutes ago</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Feather name="share-2" size={12} color="#28b67d" style={{marginLeft:5}} />
                        <Text style={{fontSize:10,marginLeft:5,color:'#28b67d'}}>SHARE</Text>
                    </View>
                </View>
            </View>



            <View style={styles.container8}>
                <Text style={{fontSize:10,letterSpacing:0.8,fontWeight:'500',marginBottom:8}}>Fashionable hot sale</Text>
                <Image source={require('../assets/logo.png')}  resizeMode='cover' style={{width:'100%',height:150,marginBottom:10 ,borderRadius:5}}/>
                <Text style={{fontSize:10,letterSpacing:0.5,fontWeight:'300',marginBottom:20}}>Fashionwholesale hot sale</Text>
                <View style={styles.container9}>
                    <Text style={{fontSize:9,letterSpacing:0.5,color:'grey'}}>116 minutes ago</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Feather name="share-2" size={12} color="#28b67d" style={{marginLeft:5}} />
                        <Text style={{fontSize:10,marginLeft:5,color:'#28b67d'}}>SHARE</Text>
                    </View>
                </View>
            </View>


            <View style={styles.container8}>
                <Text style={{fontSize:10,letterSpacing:0.8,fontWeight:'500',marginBottom:8}}>Fashionable hot sale</Text>
                <Image source={require('../assets/logo2.gif')}  resizeMode='cover' style={{width:'100%',height:150,marginBottom:10 ,borderRadius:5}}/>
                <Text style={{fontSize:10,letterSpacing:0.5,fontWeight:'300',marginBottom:20}}>Fashionwholesale hot sale</Text>
                <View style={styles.container9}>
                    <Text style={{fontSize:9,letterSpacing:0.5,color:'grey'}}>116 minutes ago</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Feather name="share-2" size={12} color="#28b67d" style={{marginLeft:5}} />
                        <Text style={{fontSize:10,marginLeft:5,color:'#28b67d'}}>SHARE</Text>
                    </View>
                </View>
            </View>


            <View style={styles.container8}>
                <Text style={{fontSize:10,letterSpacing:0.8,fontWeight:'500',marginBottom:8}}>Fashionable hot sale</Text>
                <Image source={require('../assets/logo15.jpg')}  resizeMode='cover' style={{width:'100%',height:150,marginBottom:10,borderRadius:5}}/>
                <Text style={{fontSize:10,letterSpacing:0.5,fontWeight:'300',marginBottom:20}}>Fashionwholesale hot sale</Text>
                <View style={styles.container9}>
                    <Text style={{fontSize:9,letterSpacing:0.5,color:'grey'}}>116 minutes ago</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Feather name="share-2" size={12} color="#28b67d" style={{marginLeft:5}} />
                        <Text style={{fontSize:10,marginLeft:5,color:'#28b67d'}}>SHARE</Text>
                    </View>
                </View>
            </View>


            <View style={styles.container8}>
                <Text style={{fontSize:10,letterSpacing:0.8,fontWeight:'500',marginBottom:8}}>Fashionable hot sale</Text>
                <Image source={require('../assets/logo.png')}  resizeMode='cover' style={{width:'100%',height:150,marginBottom:10 ,borderRadius:5}}/>
                <Text style={{fontSize:10,letterSpacing:0.5,fontWeight:'300',marginBottom:20}}>Fashionwholesale hot sale</Text>
                <View style={styles.container9}>
                    <Text style={{fontSize:9,letterSpacing:0.5,color:'grey'}}>116 minutes ago</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Feather name="share-2" size={12} color="#28b67d" style={{marginLeft:5}} />
                        <Text style={{fontSize:10,marginLeft:5,color:'#28b67d'}}>SHARE</Text>
                    </View>
                </View>
            </View>


            <View style={styles.container8}>
                <Text style={{fontSize:10,letterSpacing:0.8,fontWeight:'500',marginBottom:8}}>Fashionable hot sale</Text>
                <Image source={require('../assets/logo.png')}  resizeMode='cover' style={{width:'100%',height:150,marginBottom:10 ,borderRadius:5}}/>
                <Text style={{fontSize:10,letterSpacing:0.5,fontWeight:'300',marginBottom:20}}>Fashionwholesale hot sale</Text>
                <View style={styles.container9}>
                    <Text style={{fontSize:9,letterSpacing:0.5,color:'grey'}}>116 minutes ago</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Feather name="share-2" size={12} color="#28b67d" style={{marginLeft:5}} />
                        <Text style={{fontSize:10,marginLeft:5,color:'#28b67d'}}>SHARE</Text>
                    </View>
                </View>
            </View>



            <View style={styles.container8}>
                <Text style={{fontSize:10,letterSpacing:0.8,fontWeight:'500',marginBottom:8}}>Fashionable hot sale</Text>
                <Image source={require('../assets/logo.png')}  resizeMode='cover' style={{width:'100%',height:150,marginBottom:10 ,borderRadius:5}}/>
                <Text style={{fontSize:10,letterSpacing:0.5,fontWeight:'300',marginBottom:20}}>Fashionwholesale hot sale</Text>
                <View style={styles.container9}>
                    <Text style={{fontSize:9,letterSpacing:0.5,color:'grey'}}>116 minutes ago</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Feather name="share-2" size={12} color="#28b67d" style={{marginLeft:5}} />
                        <Text style={{fontSize:10,marginLeft:5,color:'#28b67d'}}>SHARE</Text>
                    </View>
                </View>
            </View>





        </View>

    </ScrollView>
    </View>
    // </SafeAreaView>
    )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
       
    },
    container2:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:8,
        paddingHorizontal:10,
        backgroundColor:'#28b67d'
    },
  container3:{
      flexDirection:'row',
      alignItems:'center'
  },
  container4:{
      flexDirection:'row',
      backgroundColor:'#fff',
      shadowColor:'grey',
       shadowOffset:{width:0,height:2},
       shadowRadius:8,
       elevation:1,
       shadowOpacity:0.8,
       marginBottom:8,
       zIndex:5
  
  
  },
  container5:{
      fontSize:11,
      fontWeight:'400',
      color:'#000',
  },
  
  container6:{
      marginLeft:10
  },
  container111:{
    
      borderBottomWidth:2,
      borderBottomColor:'#28b67d',
      color:'#28b67d'
  
  },


container7:{
    paddingHorizontal:5,
    paddingVertical:2,

},
container8:{
    backgroundColor:'#fff',
    width:'100%',
    paddingVertical:7,
    paddingHorizontal:5,
    borderRadius:3,
    marginBottom:10
},
container9:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
},
container112:{
    paddingVertical:12,
    paddingHorizontal:5,
},
container113:{
    color:'#28b67d'
}
});


export default Section;

