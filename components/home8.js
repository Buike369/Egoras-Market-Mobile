import React from 'react';
import {View,Text,StyleSheet,SafeAreaView,Image} from 'react-native';
import Search1 from './home7'
import {Ionicons } from 'react-native-vector-icons';


const secondBottomPage =()=>{
    return(

        <View style={styles.container}>
            <SafeAreaView>
               <Search1/>
            
                   <View  style={{flexDirection:'row'}}>
                      <View style={styles.container2}>
                        <Text style={styles.container1}>Grocery</Text>
                        <Text style={styles.container1}>Health & Beauty</Text>
                        <Text style={styles.container1}>Home & Office</Text>
                        <Text style={styles.container1}>Phones & Tablets</Text>
                        <Text style={styles.container1}>Computing</Text>
                        <Text style={styles.container1}>Electronics</Text>
                        <Text style={styles.container1}>Women's Fashion</Text>
                        <Text style={styles.container1}>Men's Fashion</Text>
                        <Text style={styles.container1}>Baby Products</Text>
                        <Text style={styles.container1}>Gaming</Text>
                        <Text style={styles.container1}>Sporting & Goods</Text>
                        <Text style={styles.container1}>Automobile</Text>
                      </View>
                      <View style={styles.container3}>
                          <View style={[styles.container6,styles.container7]}> 
                             <Text style={{fontSize:9,color:'#000'}}>ALL PRODUCTS</Text>
                             <Ionicons name="md-chevron-forward" size={15} color="#000"  />
                          </View>

                          <View style={[styles.container6,styles.container8]}>
                             <Text style={styles.container4}>FOOD CUPBOARD</Text>
                             <Text style={styles.container5}>SEE ALL</Text>
                          </View>

                          <View style={{backgroundColor:'#28b67d',padding:3,borderBottomLeftRadius:3,borderBottomRightRadius:3,marginTop:3,marginBottom:10}}>
                              <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                                <View style={{alignItems:'center'}}>
                                    <View style={{width:90,backgroundColor:'white',alignItems:'center',marginBottom:5}}>
                                      <Image source={require('../assets/dream.jpg')} resizeMode="contain" style={{width:50,height:50,}}/>
                                    </View>
                                    <Text style={{fontSize:8,fontWeight:'300',color:'#000'}}>Grain & Rice</Text>
                                </View>
                                <View style={{alignItems:'center'}}>
                                    <View style={{width:90,backgroundColor:'white',alignItems:'center',marginBottom:5}}>
                                      <Image source={require('../assets/dream1.jpg')} resizeMode="contain" style={{width:50,height:50}}/>
                                    </View>
                                    <Text style={{fontSize:8,fontWeight:'300',color:'#000'}}>Paste</Text>
                                </View>
                                <View style={{alignItems:'center'}}>
                                    <View style={{width:90,backgroundColor:'white',alignItems:'center',marginBottom:5}}>
                                      <Image source={require('../assets/dream2.jpg')} resizeMode="contain" style={{width:50,height:50}}/>
                                    </View>
                                    <Text style={{fontSize:8,fontWeight:'300',color:'#000'}}>Noodles</Text>
                                </View>
                              </View>


                              <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                                <View style={{alignItems:'center'}}>
                                    <View style={{width:90,backgroundColor:'white',alignItems:'center',marginBottom:5}}>
                                      <Image source={require('../assets/dream4.jpg')} resizeMode="contain" style={{width:50,height:50,}}/>
                                    </View>
                                    <Text style={{fontSize:8,fontWeight:'300',color:'#000'}}>Grain & Rice</Text>
                                </View>
                                <View style={{alignItems:'center'}}>
                                    <View style={{width:90,backgroundColor:'white',alignItems:'center',marginBottom:5}}>
                                      <Image source={require('../assets/dream6.jpg')} resizeMode="contain" style={{width:50,height:50}}/>
                                    </View>
                                    <Text style={{fontSize:8,fontWeight:'300',color:'#000'}}>Paste</Text>
                                </View>
                                <View style={{alignItems:'center'}}>
                                    <View style={{width:90,backgroundColor:'white',alignItems:'center',marginBottom:5}}>
                                      <Image source={require('../assets/dream7.jpg')} resizeMode="contain" style={{width:50,height:50}}/>
                                    </View>
                                    <Text style={{fontSize:8,fontWeight:'300',color:'#000'}}>Noodles</Text>
                                </View>
                              </View>



                              <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                                <View style={{alignItems:'center'}}>
                                    <View style={{width:90,backgroundColor:'white',alignItems:'center',marginBottom:5}}>
                                      <Image source={require('../assets/dream8.jpg')} resizeMode="contain" style={{width:50,height:50,}}/>
                                    </View>
                                    <Text style={{fontSize:8,fontWeight:'300',color:'#000'}}>Grain & Rice</Text>
                                </View>
                                <View style={{alignItems:'center'}}>
                                    <View style={{width:90,backgroundColor:'white',alignItems:'center',marginBottom:5}}>
                                      <Image source={require('../assets/dream9.jpg')} resizeMode="contain" style={{width:50,height:50}}/>
                                    </View>
                                    <Text style={{fontSize:8,fontWeight:'300',color:'#000'}}>Paste</Text>
                                </View>
                                <View style={{alignItems:'center'}}>
                                    <View style={{width:90,backgroundColor:'white',alignItems:'center',marginBottom:5}}>
                                      <Image source={require('../assets/dream10.jpg')} resizeMode="contain" style={{width:50,height:50}}/>
                                    </View>
                                    <Text style={{fontSize:8,fontWeight:'300',color:'#000'}}>Noodles</Text>
                                </View>
                              </View>


                              <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                                <View style={{alignItems:'center'}}>
                                    <View style={{width:90,backgroundColor:'white',alignItems:'center',marginBottom:5}}>
                                      <Image source={require('../assets/dream.jpg')} resizeMode="contain" style={{width:50,height:50,}}/>
                                    </View>
                                    <Text style={{fontSize:8,fontWeight:'300',color:'#000'}}>Grain & Rice</Text>
                                </View>
                                <View style={{alignItems:'center'}}>
                                    <View style={{width:90,backgroundColor:'white',alignItems:'center',marginBottom:5}}>
                                      <Image source={require('../assets/dream1.jpg')} resizeMode="contain" style={{width:50,height:50}}/>
                                    </View>
                                    <Text style={{fontSize:8,fontWeight:'300',color:'#000'}}>Paste</Text>
                                </View>
                                <View style={{alignItems:'center'}}>
                                    <View style={{width:90,backgroundColor:'white',alignItems:'center',marginBottom:5}}>
                                      <Image source={require('../assets/dream2.jpg')} resizeMode="contain" style={{width:50,height:50}}/>
                                    </View>
                                    <Text style={{fontSize:8,fontWeight:'300',color:'#000'}}>Noodles</Text>
                                </View>
                              </View>


                              <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20}}>
                                <View style={{alignItems:'center'}}>
                                    <View style={{width:90,backgroundColor:'white',alignItems:'center',marginBottom:5}}>
                                      <Image source={require('../assets/dream.jpg')} resizeMode="contain" style={{width:50,height:50,}}/>
                                    </View>
                                    <Text style={{fontSize:8,fontWeight:'300',color:'#000'}}>Grain & Rice</Text>
                                </View>
                                <View style={{alignItems:'center'}}>
                                    <View style={{width:90,backgroundColor:'white',alignItems:'center',marginBottom:5}}>
                                      <Image source={require('../assets/dream1.jpg')} resizeMode="contain" style={{width:50,height:50}}/>
                                    </View>
                                    <Text style={{fontSize:8,fontWeight:'300',color:'#000'}}>Paste</Text>
                                </View>
                                <View style={{alignItems:'center'}}>
                                    <View style={{width:90,backgroundColor:'white',alignItems:'center',marginBottom:5}}>
                                      <Image source={require('../assets/dream2.jpg')} resizeMode="contain" style={{width:50,height:50}}/>
                                    </View>
                                    <Text style={{fontSize:8,fontWeight:'300',color:'#000'}}>Noodles</Text>
                                </View>
                              </View>

                          </View>

                          <View style={[styles.container6,styles.container8]}>
                             <Text style={styles.container4}>BEER WINE & SPIRIT</Text>
                             <Text style={styles.container5}>SEE ALL</Text>
                          </View>  

                          <View style={[styles.container6,styles.container8]}>
                             <Text style={styles.container4}>BEER WINE & SPIRIT</Text>
                             <Text style={styles.container5}>SEE ALL</Text>
                          </View> 

                      </View>
                   </View>
               
           </SafeAreaView>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    container1:{
        paddingVertical:18,
        paddingHorizontal:5,
        fontSize:9,
        color:'#000',
        textAlign:'center',
        fontWeight:'300'
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
container4:{
    fontSize:10,
    color:'#000',

},
container5:{
   color:'red',
   fontSize:8,

},
container6:{
   width:'100%',
  
   paddingHorizontal:8, 
   flexDirection:'row',
   justifyContent:'space-between',
   backgroundColor:'white',
   alignItems:'center'
},

container7:{
    marginBottom:8,
    borderRadius:4,
    paddingVertical:14,
},
container8:{
    paddingVertical:8,
    borderTopLeftRadius:4,
    borderTopRightRadius:4
},
container9:{
    backgroundColor:'white',

}
})

export default secondBottomPage;