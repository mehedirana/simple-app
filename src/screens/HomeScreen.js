import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import CommonBtn from "../common/CommonButton";

const HomeScreen = ({navigation}) => {

    const handleLogOut =()=>{

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
