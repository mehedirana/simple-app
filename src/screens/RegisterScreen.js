import axios from "axios";
import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import CommonBtn from "../common/CommonButton";
import CommonInput from "../common/CommonInput";

const url = 'http://apptest.dokandemo.com/wp-json/wp/v2/users/register';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("mehedi");
  const [email, setEmail] = useState("mehedi@gmail.com");
  const [password, setPassword] = useState("123456");
  const [isFocus, setIsFocus] = useState(false);

  const handleRegister = async () => {
    try {
      
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...'
      }
      const res = await axios.post(url, {params : {
        username: name,
        email: email,
        password: password
  
      }}, headers )
    console.log(res);
    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#FFF", alignItems: 'center', justifyContent: 'center' }}
    >
      <CommonInput
        placeholder="User Name"
        secureTextEntry={false}
        editable={true}
        keyboardType="numeric"
        iname="lock"
        value={name}
        onChangeText={(t) => setName(t)}
        onFocus={(t) => setIsFocus(t)}
      />
      <CommonInput
        placeholder="User Email"
        secureTextEntry={false}
        editable={true}
        keyboardType="numeric"
        iname="phone"
        value={email}
        onChangeText={(t) => setEmail(t)}
        onFocus={(t) => setIsFocus(t)}
      />
      <CommonInput
        placeholder="User Password"
        secureTextEntry={false}
        editable={true}
        keyboardType="default"
        iname="lock"
        value={password}
        onChangeText={(t) => setPassword(t)}
        onFocus={(t) => setIsFocus(t)}
      />

      <CommonBtn
        title='Confirm'
        backColor="#004dcf"
        titleColor='#FFF'
        onPress={handleRegister}
      />
      <View style={{ flexDirection: 'row' }}>

        <Text>Already Registered ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{ color: '#004dcf', fontWeight: 'bold' }}>Log in</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

export default RegisterScreen;




