import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, ActivityIndicator } from "react-native";
import CommonBtn from "../common/CommonButton";
import CommonInput from "../common/CommonInput";
import { login } from "../store/user/authentication/userAction";
import { useDispatch, useSelector } from "react-redux";



const LoginScreen = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const { token, loading, success } = useSelector((state) => state.user)

  const dispatch = useDispatch();

  const handleLogin = async () => {

    if (!userName) alert('User name required');
    else if (!password) alert('Password required');

    else {
      try {
        const res = await dispatch(login(userName, password));
        console.log(res);

      } catch (error) {

      }

    }


  }

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#FFF", alignItems: 'center', justifyContent: 'center' }}
    >
      {
        loading ? <ActivityIndicator size="large" color="#00ff00" /> : (
          <>
            <Text>User Name</Text>
            <CommonInput
              placeholder="Enter User Name"
              secureTextEntry={false}
              editable={true}
              keyboardType="default"
              iname="phone"
              value={userName}
              onChangeText={(t) => setUserName(t)}
              onFocus={(t) => setIsFocus(t)}
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
              onFocus={(t) => setIsFocus(t)}
            />

            <CommonBtn
              title='Log In'
              backColor="#004dcf"
              titleColor='#FFF'
              onPress={handleLogin}
            />
            <View style={{ flexDirection: 'row' }}>

              <Text>Not Register ? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={{ color: '#004dcf', fontWeight: 'bold' }}>Register</Text>
              </TouchableOpacity>

            </View>
          </>
        )
      }

    </SafeAreaView>
  );
};

export default LoginScreen;
