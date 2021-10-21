import axios from "axios";
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import CommonBtn from "../common/CommonButton";
import CommonInput from "../common/CommonInput";
const url = "https://apptest.dokandemo.com/wp-json/wp/v2/users/register";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [error, setError] = useState(false);

  const isNotValidName = name == "";
  const isNotValidEmail = email == "";
  const isNotValidPassword = password == "";
  const errorMsgName = isNotValidName ? "Name is required." : "";
  const errorMsgEmail = isNotValidEmail ? "Email is required." : "";
  const errorMsgPassword = isNotValidPassword ? "Password is required." : "";

  const handleSubmit = (data) => {
    console.log({ data });
  };

  const handleChange = (input) => {
    console.log({ input });
  };

  const handleRegister = async () => {
    console.log("called", name, email, password, url);
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };

    const config = {
      headers: {
      'Content-Type': 'application/json',
      }
    };

    try {
      const res = await axios.post(
        url,
        {
          username: name,
          email: email,
          password: password,
        },
        config
      );

      console.log("gd", res);
    } catch (error) {
      console.log(error);
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
      <Text>user name</Text>
      <CommonInput
        placeholder="User Name"
        secureTextEntry={false}
        editable={true}
        keyboardType="numeric"
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
        keyboardType="default"
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
    </SafeAreaView>
  );
};

export default RegisterScreen;
