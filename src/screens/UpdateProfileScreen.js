import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import CommonBtn from "../common/CommonButton";
import { useDispatch, useSelector } from "react-redux";
import CommonInput from "../common/CommonInput";
import axios from "axios";
import { updateUserURL } from "../utils/proxyUrl";

const UpdateProfileScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const { token } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = true;
    const test =()=>{
      handleProfileUpdate()
    }
     test()

     return function cleanup() {
      mounted = false;
    };
  }, [token]);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  };

  const handleProfileUpdate = async () => {
    try {
      const res = await axios.post(
        updateUserURL,
        { firstName, lastName },
        config
      );

      if (res.data) {
        setFirstName(res.data.first_name);
        setLastName(res.data.last_name);
      }
       
    } catch (error) {
      console.log(error, error.response.data);
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
      <Text>User first Name</Text>
      <CommonInput
        placeholder="User first Name"
        secureTextEntry={false}
        editable={true}
        keyboardType="default"
        iname="phone"
        value={firstName}
        onChangeText={(t) => setFirstName(t)}
        onFocus={(t) => setIsFocus(t)}
      />
      <Text>User last Name</Text>
      <CommonInput
        placeholder="User last Name"
        secureTextEntry={false}
        editable={true}
        keyboardType="default"
        iname="phone"
        value={lastName}
        onChangeText={(t) => setLastName(t)}
        onFocus={(t) => setIsFocus(t)}
      />
      <CommonBtn
        title="Submit"
        backColor="#004dcf"
        titleColor="#FFF"
        onPress={handleProfileUpdate}
      />
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={{ color: "#004dcf", fontWeight: "bold" }}>
            Back To Home
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UpdateProfileScreen;
