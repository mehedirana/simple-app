import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, ActivityIndicator } from "react-native";
import CommonBtn from "../common/CommonButton";
import { useDispatch, useSelector } from "react-redux";
import CommonInput from "../common/CommonInput";
import { profileDetails, profileUpdate } from "../store/user/profile/profileUpdateAction";

const UpdateProfileScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const { token } = useSelector((state) => state.user);
  const { userProfile, loading, msg, success } = useSelector((state) => state.profile);

  console.log('yes', userProfile);

  const dispatch = useDispatch();

  useEffect(()=>{
    if(loading === false && success === true && msg){
      alert(msg)
    }
  },[msg, loading])

  useEffect(() => {
    let mounted = true;

    if (token) {
      dispatch(profileDetails(token))
    }

    return function cleanup() {
      mounted = false;
    };
  }, [token]);



  const handleProfileUpdate = async () => {
    dispatch(profileUpdate(token, firstName, lastName));
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

          </>
        )
      }

    </SafeAreaView>
  );
};

export default UpdateProfileScreen;
