import axios from "axios";
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Alert
} from "react-native";
import CommonBtn from "../common/CommonButton";
import CommonInput from "../common/CommonInput";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../store/user/register/registerAction";


const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  // const [error, setError] = useState(false);

  const isNotValidName = name == "";
  const isNotValidEmail = email == "";
  const isNotValidPassword = password == "";
  const errorMsgName = isNotValidName ? "Name is required." : "";
  const errorMsgEmail = isNotValidEmail ? "Email is required." : "";
  const errorMsgPassword = isNotValidPassword ? "Password is required." : "";

  const { error, loading, success } = useSelector((state) => state.userRegister)

  const dispatch = useDispatch();


  const handleRegister = async () => {
    if (!name) {
      alert('User name required')
    }
    else if (!email) {
      alert('User email required')
    }
    else if (!password) {
      alert('password required')
    } else {
      try {
        const res = await dispatch(register(name, email, password))

        if (res && res.message) {
          alert(res.message)
        }


      } catch (error) {
        console.log(error);
      }

    }

  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {
        loading ? <ActivityIndicator size="large" color="#00ff00" /> : (
          <>
            <Text>user name</Text>
            <CommonInput
              placeholder="User Name"
              secureTextEntry={false}
              editable={true}
              keyboardType="default"
              iname="user"
              value={name}
              onChangeText={(t) => setName(t)}
              onFocus={(t) => setIsFocus(t)}
              errMess={errorMsgName}
            // renderErrorMessage={name ==='' ? true : false}
            />
            <Text>user email</Text>
            <CommonInput
              placeholder="User Email"
              secureTextEntry={false}
              editable={true}
              keyboardType="email-address"
              iname="envelope"
              value={email}
              // renderErrorMessage={email === '' ? true : false}
              onChangeText={(t) => setEmail(t)}
              onFocus={(t) => setIsFocus(t)}
              errMess={errorMsgEmail}
            />
            <Text>user password</Text>
            <CommonInput
              placeholder="User Password"
              secureTextEntry={false}
              editable={true}
              keyboardType="default"
              iname="key"
              value={password}
              onChangeText={(t) => setPassword(t)}
              // renderErrorMessage={password == '' ? true : false }
              onFocus={(t) => setIsFocus(t)}
              errMess={errorMsgPassword}
              secureTextEntry={true}
            />

            <CommonBtn
              title="Confirm"
              backColor="#004dcf"
              titleColor="#FFF"
              onPress={handleRegister}
            />
            <View style={{ flexDirection: "row" }}>
              <Text>Already Registered ? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={{ color: "#004dcf", fontWeight: "bold" }}>Log in</Text>
              </TouchableOpacity>
            </View>

          </>
        )
      }

    </SafeAreaView>
  );
};

export default RegisterScreen;
