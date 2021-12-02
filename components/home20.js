import React from 'react';
import {View,Text,StyleSheet, SafeAreaView,Pressable, ScrollView} from 'react-native';
import {Ionicons } from 'react-native-vector-icons';


const detailScreen =({navigation})=>{

    const Sami =()=>{
        navigation.goBack()
    }

    return(
        <SafeAreaView>
              <View style={styles.container}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Pressable onPress={Sami}><Ionicons name="arrow-back-sharp" size={22} color="#fff" style={{marginLeft:5}}/></Pressable>
                    <Text style={{marginLeft:14,fontSize:16,fontWeight:'700',letterSpacing:0.1,color:'#fff'}}>Details</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Ionicons name="md-search" size={18} color="#fff" />
                    <Ionicons name="cart-outline" size={22} color="#fff" style={{marginLeft:5}}/>
                </View>
            </View>


            <ScrollView>
               <View style={{padding:10,alignItems:'center'}}>
                 <View style={styles.container1}>

                 </View>
              </View>

              <View style={[styles.container1,styles.container3]}>
                  <View style={[styles.container4,styles.container5]}><Text style={{fontSize:10,color:'#fff',fontWeight:'500',}}>Official Store</Text></View>
                  <Text style={{fontWeight:'400',fontSize:13,marginBottom:5,letterSpacing:0.1,color:'#000'}}>LED Complete Insecticide (Device + Refill) - Pack Of 2</Text>
                  <Text style={{fontSize:10,letterSpacing:0.1,color:'#000',marginBottom:8}}>Brand: Mortein</Text>
                 <View style={[styles.container4,styles.container6]}><Text  style={{fontSize:10,color:'#fff'}}>JPrime Discount</Text></View>
                  <View>
                      <View>
                          <View>
                              <Text>Flash Sales</Text>
                          </View>
                          <View>
                              <Text>Time Left 20th : 33m :18s</Text>
                          </View>
                      </View>
                     <Text>2,994</Text>
                     <View>
                         <Text>4000</Text>
                         <Text>-25%</Text>
                     </View>
                     <View>
                         <Text>13 items left</Text>
                         <View>
                             <View></View>
                         </View>
                     </View>
                  </View>

                  <View>
                      <Text>+shipping from 180 to LEKKI-AJAH(SANGOTEDO)</Text>
                      <Text>See options</Text>
                  </View>

                  <View>
                      <View>
                           <View></View>
                           <Text>(15 ratings)</Text>
                      </View>
                      <View>
                           <Ionicons name="md-search" size={18} color="#fff" />
                           <Ionicons name="cart-outline" size={22} color="#fff" style={{marginLeft:5}}/>
                      </View>
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
         backgroundColor:'#28b67d', 
         borderRadius:3,
         backgroundColor:'#fff',
         width:'100%',
         height:260
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
    backgroundColor:'red',width:90,
}


})

export default detailScreen;