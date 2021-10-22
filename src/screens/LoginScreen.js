import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import CommonBtn from "../common/CommonButton";
import CommonInput from "../common/CommonInput";
import  axios  from 'axios';

const URL = 'https://apptest.dokandemo.com/wp-json/jwt-auth/v1/token'

const LoginScreen = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  // 'Content-Type': 'application/x-www-form-urlencoded',
  const handleLogin = async()=>{
  
    const config = {
      headers: {
      'Content-Type': 'application/json',
    
 
      }
    };

    try {

      console.log(URL, userName, password);
      
      const res = await axios.post(
        URL,
        {
          username: userName,
          password: password,
        },
        config
      );

      console.log("gd", res.data);
    } catch (error) {
      console.log(error);
    }
    // navigation.navigate('Home')
  }

  return (
    <SafeAreaView
      style={{ flex: 1,  backgroundColor: "#FFF", alignItems:'center', justifyContent:'center' }}
    >
      <Text>User Name</Text>
      <CommonInput
        placeholder="Enter User Name"
        secureTextEntry={false}
        editable={true}
        keyboardType="numeric"
        iname="phone"
        value={userName}
        onChangeText={(t) => setUserName(t)}
        onFocus={(t)=> setIsFocus(t)}
      />
      <Text>Password</Text>
      <CommonInput
        placeholder="Enter Your Password"
        secureTextEntry={false}
        editable={true}
        keyboardType="default"
        iname="lock"
        secureTextEntry={true}
        value={password}
        onChangeText={(t) => setPassword(t)}
        onFocus={(t)=> setIsFocus(t)}
      />

      <CommonBtn
        title='Log In'
        backColor="#004dcf"
        titleColor='#FFF'
        onPress={handleLogin}
      />
      <View style={{flexDirection:'row'}}>
       
          <Text>Not Register ? </Text>
          <TouchableOpacity  onPress={()=> navigation.navigate('Register')}>
            <Text style={{color:'#004dcf' , fontWeight:'bold'}}>Register</Text>  
          </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
