import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";

const CommonInput = ({
  cWidth,
  cleft,
  onChangeText,
  value,
  onFocus,
  placeholder,
  secureTextEntry,
  editable,
  keyboardType,
  iname,
  errMess,
}) => {
  return (
    <Input
      inputStyle={{ color: "#004dcf", borderColor: "red" }}
      style={{
        paddingLeft: RFValue(10),
        paddingRight: RFValue(10),
        borderRadius: RFValue(4),
        fontSize: RFValue(15),
        borderColor: "#004dcf",
      }}
      leftIcon={{
        type: "font-awesome",
        name: iname,
        color: "#004dcf",
      }}
      secureTextEntry={secureTextEntry}
      placeholderTextColor="#004dcf"
      placeholder={placeholder}
      value={value}
      onFocus={() => onFocus()}
      onChangeText={(test) => {
        onChangeText(test);
      }}
      editable={editable}
      keyboardType={keyboardType}
      errorStyle={{ color: "red" }}
      // errMessage="abc"
    />
  );
};
export default CommonInput;
