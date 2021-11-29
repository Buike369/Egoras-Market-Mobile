import React from 'react';
import {View,Text,StyleSheet,Image,ImageBackground, Pressable} from 'react-native';
import {Ionicons } from 'react-native-vector-icons';



export default function desk({navigation}){
       
       const way =()=>{
           navigation.navigate('Home1')
       }
    return(
        <ImageBackground source={require('../assets/pic.png')} style={styles.image} resizeMethod="resize">
            <Pressable onPress={way} style={styles.container}>
              <View  style={{alignItems:'center'}}>
                 <Image source={require('../assets/egoras-favicon.png')} style={styles.tet} />
                  <Text style={styles.text1}>Egoras Market</Text>
     
              </View>
            </Pressable>
   </ImageBackground>)
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      image:{
        flex:1,
        width:'100%',
        height:'100%'
      },
      text1:{
        fontSize:30,
        fontWeight:'600',
        color:"#28b67d"
      
    
      },
      tet:{
        width:70,
        height:70,
      }
    
})