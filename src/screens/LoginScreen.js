import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import CommonBtn from "../common/CommonButton";
import CommonInput from "../common/CommonInput";

const LoginScreen = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const handleLogin =()=>{
    navigation.navigate('Home')
  }

  return (
    <SafeAreaView
      style={{ flex: 1,  backgroundColor: "#FFF", alignItems:'center', justifyContent:'center' }}
    >
      <CommonInput
        placeholder="Enter Your Phone"
        secureTextEntry={false}
        editable={true}
        keyboardType="numeric"
        iname="phone"
        value={phone}
        onChangeText={(t) => setPhone(t)}
        onFocus={(t)=> setIsFocus(t)}
      />
      <CommonInput
        placeholder="Enter Your Password"
        secureTextEntry={false}
        editable={true}
        keyboardType="default"
        iname="lock"
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
