import React from 'react';
import {View,Text,StyleSheet,Image,ImageBackground, Pressable} from 'react-native';
import {Ionicons } from 'react-native-vector-icons';
import { 
  DancingScript_400Regular,
  DancingScript_500Medium,
  DancingScript_600SemiBold,
  DancingScript_700Bold 
} from '@expo-google-fonts/dancing-script';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';




export default function desk({navigation}){

  let [fontsLoaded, error ]=useFonts({
    DancingScript_400Regular,
  DancingScript_500Medium,
  DancingScript_600SemiBold,
  DancingScript_700Bold,
  'bold':require('../assets/fonts/Roboto-Italic.ttf') 
  })


  if(!fontsLoaded){
  return <AppLoading/>
  }
       
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
        fontSize:40,
        // fontWeight:'600',
        color:"#28b67d",
        fontFamily:'DancingScript_600SemiBold'
      
    
      },
      tet:{
        width:70,
        height:70,
      }
    
})