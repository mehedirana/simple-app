import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import CommonBtn from "../common/CommonButton";
import { logout } from "../store/user/userAction";
import { useDispatch, useSelector } from "react-redux";

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

    const handleLogOut =()=>{
        dispatch(logout())
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
      <CommonBtn
        title="Log Out"
        backColor="#004dcf"
        titleColor="#FFF"
        onPress={handleLogOut}
      />
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.navigate("UpdatePro")}>
          <Text style={{ color: "#004dcf", fontWeight: "bold" }}>Profile Update</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
