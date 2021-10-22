import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import CommonBtn from '../common/CommonButton';
import { useDispatch, useSelector } from "react-redux";

const UpdateProfileScreen = ({ navigation }) => {

  const handleProfileUpdate = () => {

  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
      <CommonBtn
        title="Submit"
        backColor="#004dcf"
        titleColor="#FFF"
        onPress={handleProfileUpdate}
      />
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={{ color: "#004dcf", fontWeight: "bold" }}>Back To Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default UpdateProfileScreen;
