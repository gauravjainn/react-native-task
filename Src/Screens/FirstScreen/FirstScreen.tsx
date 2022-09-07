import * as React from "react";
import {
  Image,
  View,
  Text,
  StyleProp,
  ViewStyle,
  StatusBar,
  TextStyle,
  ImageStyle,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";

import styles from "./FirstScreen.style";
import LogoIcon from "../../Components/LogoIcon";
import { CommanButton, } from "../SignUpScreen";

import Icons from "../../assets/Icons/Icons";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

const dummyFunction = () => { };
export interface IFirstScreenProps {
  signupText?: string;
  signupText1?: string;
  disableDivider?: boolean;
  logoImageSource: any;
  disableSocialButtons?: boolean;
  numberPlaceholder?: string;
  otpPlaceholer?: string;
  disableSignup?: boolean;
  style?: CustomStyleProp;

  children?: any;
  navigation?: any;
  onLoginPress: () => void;
  onSignupPress: () => void;
  onMobNumberChange: (email: string) => void;
  onOTpChange: (otp: string) => void;
  mobileNo?: string;
  otp?: string;
}

const FirstScreen: React.FC<IFirstScreenProps> = ({

  textInputContainerStyle,
  navigation,
}) => {

  const signIn = () => {
    navigation.navigate("SignUpScreen");
  };

  const Heading1 = () => (
    <View style={styles.heding1viewStyle}>
      <Icons.Headerlogo />
    </View>
  );



  return (

    <View style={[styles.container]}>
      <StatusBar barStyle="default" />

      <ScrollView showsVerticalScrollIndicator={false} style-={{}}>
        <View style={styles.headingviewStyle}></View>
        <LogoIcon />
        <View style={styles.headingviewStyle}>{<Heading1 />}</View>
        <Text style={styles.heding2TextStyle}>
          Login/register via
      </Text>
        <View style={[styles.textInputContainer, textInputContainerStyle]}>
          <View style={{ width: '45%' }}>
            <CommanButton
              text="Phone"
              onPress={() => {
                signIn();
              }}
            />
          </View>
          <View style={{ width: '45%' }}>
            <CommanButton
              text="Email"
              onPress={() => {
                signIn();
              }}
            />
          </View>
        </View>
        <View style={[styles.textInputContainer, { alignItems: 'center' }]}>
          <View style={{ width: '30%', height: 1, backgroundColor: '#E8ECF4' }}>

          </View>
          <Text style={styles.heding2TextStyle}>Or connect with</Text>

          <View style={{ width: '30%', height: 1, backgroundColor: '#E8ECF4' }}>

          </View>

        </View>
        <View style={[styles.textInputContainer, { alignItems: 'center' }]}>
          <View style={[styles.OtpInputviewStyle,]}>
            <Icons.FacebookIcon />
          </View>
          <View style={[styles.OtpInputviewStyle,]}>
            <Icons.GoogleIcon />

          </View>
          <View style={[styles.OtpInputviewStyle,]}>
            <Icons.AppleIcon />

          </View>


        </View>

      </ScrollView>
    </View>
  )

};

export default FirstScreen;
