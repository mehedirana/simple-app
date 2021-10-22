import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import CommonBtn from '../common/CommonButton';
import { useDispatch, useSelector } from "react-redux";

const UpdateProfileScreen =({navigation})=> {

    const handleProfileUpdate =()=>{
       
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
