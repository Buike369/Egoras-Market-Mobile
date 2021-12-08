import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput, Button, Alert,Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login =({navigation})=>{

   const [name,setName]=useState('');

   const getForm = async ()=>{
       if(name.length < 10){
           Alert.alert('wait', 'you enterded  awrong number')
       }else{
        try {
            await AsyncStorage.setItem('userName', name);
            navigation.navigate('City4');
          } catch (error) {
            // saving error
            console.log(error)
          }
       }
   }

    return(
        <View style={styles.body}>
            <Text>Form Example</Text>
             <TextInput style={{width:'50%',padding:8,borderColor:'grey',borderWidth:0.3}} onChangeText={(value)=>setName(value)} value={name}/>
             <Button title='Login' onPress={getForm} />
          <Button title='Home' onPress={()=>navigation.navigate('Home')} />
        </View>
    )
}

const styles = StyleSheet.create({

    body:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }

})

export default Login;