import { View, Text, Image } from "react-native";
import React from "react";
import ApplicationStyles from "../Themes/ApplicationStyles";
import Icons from "../assets/Icons/Icons";

export default function LogoIcon() {
  return (
    <View style={ApplicationStyles.logoImageviewStyle}>
      <Icons.MainLogo />
      <Text style={ApplicationStyles.hedingTextStyle}>
      the social learning platform made for dynamic learners
      </Text>
    </View>
  );
}
