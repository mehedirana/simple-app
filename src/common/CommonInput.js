import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";

const CustomInput = ({
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
  color,
}) => {
  return (
    <Input
      inputStyle={{ color: "black",borderColor:'red' }}
      style={{
        paddingLeft: RFValue(10),
        paddingRight: RFValue(10),
        borderRadius: RFValue(4),
        fontSize: RFValue(15),
        borderColor:'red'
      }}
      leftIcon={{
        type: "font-awesome",
        name: iname,
        color: "rgba(167,203,62,255)",
      }}
      secureTextEntry={secureTextEntry}
      placeholderTextColor={color}
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
export default CustomInput;