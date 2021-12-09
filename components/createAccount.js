import  React from 'react';
import {View,Text,StyleSheet,SafeAreaView,Pressable,TextInput, ScrollView,TouchableOpacity} from 'react-native';
import {Ionicons } from 'react-native-vector-icons';



const createAccount =({navigation})=>{
    return(
        <SafeAreaView  style={styles.body}>

        <View style={{backgroundColor:'#28b67d',paddingVertical:15}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
               <Pressable onPress={()=>navigation.goBack()}><Ionicons name="arrow-back-sharp" size={22}   color="#fff" style={{marginLeft:5}}/></Pressable>
              <Text style={{marginLeft:14,fontSize:16,fontWeight:'700',letterSpacing:0.1,color:'#fff'}}>Create Account</Text>
           </View>
           </View>
         <ScrollView showsVerticalScrollIndicator={false}>

         <View style={{paddingHorizontal:12}}>
             <Text style={{marginTop:30,marginBottom:35}}>Create a new account</Text>
             <View style={{flexDirection:'row',alignItems:'center',marginBottom:30}}>
                <View style={{width:'8%'}}><Ionicons name="person-outline" size={22}   color="#28b67d" /></View>
                     <TextInput placeholder='First Name' style={styles.body1}/>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',marginBottom:25}}>
                <View style={{width:'8%'}}></View>
                     <TextInput placeholder='Last Name' style={styles.body1}/>
                </View>

                <View style={{flexDirection:'row',alignItems:'center',marginBottom:30}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                       <Ionicons name="radio-button-off" size={22}   color="#28b67d" />
                       <Text>  Male</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',marginLeft:30}}>
                       <Ionicons name="radio-button-off" size={22}   color="#28b67d" />
                       <Text>  Female</Text>
                     </View>
                </View>

                <View style={{flexDirection:'row',alignItems:'center',marginBottom:30}}>
                <View style={{width:'8%'}}><Ionicons name="mail-outline" size={22}   color="#28b67d" /></View>
                     <TextInput placeholder='Email' style={styles.body1}/>
                </View>

                <View style={{flexDirection:'row',alignItems:'center',marginBottom:13}}>
                <View style={{width:'8%'}}><Ionicons name="lock-open-outline" size={22}   color="#28b67d" /></View>
                     <TextInput placeholder='password' style={styles.body1}/>
                </View>

                <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                  <View style={{width:'8%'}}><Ionicons name="call-outline" size={22}   color="#28b67d" /></View>
                   <View style={{width:'92%',flexDirection:'row'}}>
                   <View style={{flexDirection:'row',borderBottomWidth:0.3,borderBottomColor:'#000000',paddingVertical:10}}>
                       <Text>+234</Text>
                       <Ionicons name="caret-down" size={15}   color="grey" style={{marginLeft:10}} />
                   </View>
                   <TextInput placeholder="Mobile Phone number" style={{marginLeft:15,borderBottomWidth:0.3,borderBottomColor:'#000000',width:'77.5%',paddingVertical:10}}/>
                   </View>

                </View>

                <View style={{flexDirection:'row',alignItems:'center',marginTop:20}}> 
                   <View style={{width:'8%'}}><View style={{width:14,height:14,borderWidth:1,borderColor:'#28b67d',borderRadius:1}}></View></View>
                    <Text style={{width:'92%',fontSize:13,fontWeight:'300',color:'#000000'}}>I agree with the</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{width:'8%'}}></View>
                    <Text style={{width:'92%',color:'#28b67d',fontSize:12,marginTop:10,fontWeight:'400'}}>Terms and Conditions</Text>
                </View>

                <TouchableOpacity style={{paddingVertical:15,backgroundColor:'#28b67d',alignItems:'center',marginTop:30,borderRadius:5}}><Text style={{color:'#fff',fontWeight:'600',fontSize:14}}>CREATE</Text></TouchableOpacity>
         </View>
         </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
 body:{
     flex:1,
     backgroundColor:'#fff'
 },
 body1:{
    paddingVertical:10,
    borderBottomWidth:0.3,
    borderBottomColor:'#000000',
    width:'92%',
},
})

export default createAccount;