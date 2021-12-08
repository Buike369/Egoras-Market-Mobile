import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const nextLoginE =({navigation})=>{

   const [name, setName] = useState('');

//    const getData =()=>{

//    }

useEffect(()=>{
    getData();
},[])


const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('userName')
      if(value !== null) {
        // value previously stored
        setName(value)
      }
    } catch(error) {
      // error reading value
      console.log(error)
    }
  }
  

//   const getData = () => {
//     try {
//       AsyncStorage.getItem('userName')
//       .then(value=>{
//         if(value != null) {
//             // value previously stored
//             setName(value)
//           }
//       })
     
//     } catch(error) {
//       // error reading value
//       console.log(error)
//     }
//   }

    return(
        <View style={styles.container}>

            <Text> Welcome{name}</Text>
          <Pressable onPress={()=>navigation.goBack()}><Text>Welcome</Text></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
   container:{
       flex:1,
       alignItems:'center',
       justifyContent:'center'
   }
})

export default nextLoginE;