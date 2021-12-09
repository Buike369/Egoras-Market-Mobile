import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View,Text,StyleSheet, SafeAreaView,Pressable, ScrollView} from 'react-native';
import {Ionicons } from 'react-native-vector-icons';
import {AntDesign } from 'react-native-vector-icons';
import {Feather } from 'react-native-vector-icons';


const egoras_M_services =({navigation})=>{


          
        const Div =[{id:1,test1:'Egoras Market Prime'},{id:2,test1:'Pay Airtime & Bills'},{id:3,test1:'Pay Electricity Bills'},{id:4,test1:'Pay Internet Bills'},{id:5,test1:'Buy Data'},{id:6,test1:'Borrow Money'},{id:7,test1:'Egoras Market food'},{id:8,test1:'sell on Egoras Market'},{id:9,test1:'contact Us'}]


        const DivCircle = (
            <View style={{padding:8,borderRadius:100,backgroundColor:'#28b67d'}}>
                 <Ionicons name="star-sharp" size={20} color="#000" style={{marginLeft:5}}/>
            </View>
        )

    return(
        <SafeAreaView>

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
                            <Pressable>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                   {/* <Feather name="mail" size={22} color="#28b67d"  /> */}
                                   <View style={{width:20,height:20,borderRadius:50,backgroundColor:'#28b67d',justifyContent:'center',alignItems:'center'}}>
                                       <Ionicons name="star-sharp" size={14} color="#fff" style={{marginLeft:1}} />
                                   </View>
                                 
                                   <Text style={{fontSize:14,fontWeight:'400',letterSpacing:0.1,marginLeft:10,color:'#000'}}>{letter.test1}</Text>
                                </View>
                            </Pressable>
                            <Pressable >
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

})

export default egoras_M_services;