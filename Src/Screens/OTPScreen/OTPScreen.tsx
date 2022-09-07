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
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";

import styles from './OTPScreen.style';

import { CommanButton,  } from "../SignUpScreen";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

import { TOAST } from "../../Redux/Types";
import { CommanView } from "../FirstScreen";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

const dummyFunction = () => { };
export interface IOTPScreenProps {
  signupText?: string;
  signupText1?: string;
  disableDivider?: boolean;
  logoImageSource: any;
  disableSocialButtons?: boolean;
  numberPlaceholder?: string;
  otpPlaceholer?: string;
  disableSignup?: boolean;
  style?: CustomStyleProp;
  logoImageStyle?: CustomImageStyleProp;
  textInputContainerStyle?: CustomStyleProp;
  numberInputTextStyle?: CustomStyleProp;
  sendOtpviewStyle?: CustomStyleProp;
  textInputviewStyle?: CustomStyleProp;
  signupStyle?: CustomStyleProp;
  signupTextStyle?: CustomTextStyleProp;
  signupTextStyle1?: CustomTextStyleProp;
  children?: any;
  navigation?: any;
  onLoginPress: () => void;
  onSignupPress: () => void;
  onMobNumberChange: (email: string) => void;
  onOTpChange: (otp: string) => void;
  mobileNo?: string;
  otp?: string;
}

const OTPScreen: React.FC<IOTPScreenProps> = ({
  style,
  signupTextStyle,
  signupTextStyle1,
  textInputContainerStyle,
  numberInputTextStyle,
  sendOtpviewStyle,
  textInputviewStyle,
  signupText = "Don't have an account?",
  signupText1 = "Enter the verification code we just sent on your phone number.",
  onLoginPress,
  onMobNumberChange,
  onOTpChange,

  numberPlaceholder = "Phone number*",
  otpPlaceholer = "Enter OTP",
  disableSignup = false,
  children,
  navigation,
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const loading = useSelector((state: RootState) => state.auth.loading);
  const [mobileNo, setmobileNo] = React.useState("");
  const [otp1, setotp1] = React.useState("");
  const [otp2, setotp2] = React.useState("");
  const [otp3, setotp3] = React.useState("");
  const [otp4, setotp4] = React.useState("");



  const signIn = () => {
    // let data = { mobile_no: mobileNo, otp: Number(otp) };
    // let obj = { data, navigation };
    // dispatch(getLogin(obj));
  };



  return (
   
      <View style={[styles.container]}>
        <StatusBar barStyle="default" />
 
        <ScrollView showsVerticalScrollIndicator={false} style-={{}}>

        <View style={styles.headingviewStyle}></View>
          <View style={styles.headingviewStyle}>

            <CommanView.Backview
              onPress={() => { navigation.goBack() }}
            />
          </View>
          <View style={styles.headingviewStyle}>
            <Text style={styles.heding2TextStyle}>
            OTP Verification
      </Text>
          </View>
          <Text style={styles.heding1TextStyle}>{signupText1}</Text>
          <View style={[styles.textInputContainer, textInputContainerStyle]}>
          <View style={styles.numberInputText}>
  
          <TextInput
              style={styles.textInputview}
              keyboardType="numeric"
              value={otp1}
              maxLength={1}
              onChangeText={(text) => setotp1(text)}
            />
              </View>
          <View style={styles.numberInputText}>
  
          <TextInput
              style={styles.textInputview}
              keyboardType="numeric"
              value={otp2}
              maxLength={1}
              onChangeText={(text) => setotp2(text)}
            />
              </View>
          <View style={styles.numberInputText}>
  
          <TextInput
              style={styles.textInputview}
              keyboardType="numeric"
              value={otp3}
              maxLength={1}
              onChangeText={(text) => setotp3(text)}
            />
              </View>
          <View style={styles.numberInputText}>
  
          <TextInput
              style={styles.textInputview}
              keyboardType="numeric"
              value={otp4}
              maxLength={1}
              onChangeText={(text) => setotp4(text)}
            />
              </View>
             </View>

            <CommanButton
              text="Confirm"
              onPress={() => {
                signIn();
                // navigation.navigate("HomeScreen");
              }}
              />

              <Text style={styles.heding1TextStyle}>Didn’t recieve the OTP?</Text>
              <Text style={[styles.heding3TextStyle]}>Resend  <Text style={{color:'#000'}}>00:15</Text></Text>

        </ScrollView>
      </View>
    )

};

export default OTPScreen;
