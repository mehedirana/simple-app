import React from "react";
import { Button } from 'react-native-elements';
import { RFValue } from "react-native-responsive-fontsize";
const CommonBtn = ({ title, onPress, cWidth , backColor, cHeight, titleColor, bWidth }) => {
 
  return (
   
      <Button    
        buttonStyle={{
          // height:cHeight,
          // width: cWidth ? cWidth : '38%',
          alignSelf: "center",
          // borderRadius: cWidth ? 20 : 8,
          // borderWidth: bWidth,
          borderColor: bWidth ? 'rgba(167,203,62,255)' : null,
          paddingTop:RFValue(5), paddingLeft:RFValue(5), paddingRight:RFValue(5), paddingBottom:RFValue(5)
          
        }}
        theme={{ colors: { primary: backColor}}}
        onPress={onPress}
        title={title}
        titleStyle={{color: titleColor}}
      
      />
  );
};
export default CommonBtn;