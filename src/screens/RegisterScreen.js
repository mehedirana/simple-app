import axios from "axios";
import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import CommonBtn from "../common/CommonButton";
import CommonInput from "../common/CommonInput";
const url = "https://developer.wordpress.org/rest-api/reference/users/#create-a-user";


const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const handleRegister = async () => {
    const res = await axios.post(url, {
      username: "john",
      email: "john@doe.com",
      password: "demo",
    });

    console.log(res.data);
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
      <CommonInput
        placeholder="User Name"
        secureTextEntry={false}
        editable={true}
        keyboardType="numeric"
        iname="lock"
        value={name}
        onChangeText={(t) => setName(t)}
        onFocus={(t) => setIsFocus(t)}
        errMess="Please add your name"
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
