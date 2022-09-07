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
import { CommonActions, useNavigation } from "@react-navigation/native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import styles from "./SignUpScreen.style";
import { CommanButton,  } from "../SignUpScreen";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { TOAST } from "../../Redux/Types";
import Icons from "../../assets/Icons/Icons";
import { CommanView } from "../FirstScreen";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

const dummyFunction = () => { };
export interface ISingUPScreenProps {
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

const SingUPScreen: React.FC<ISingUPScreenProps> = ({
  style,
  signupTextStyle,
  signupTextStyle1,
  textInputContainerStyle,
  numberInputTextStyle,
  sendOtpviewStyle,
  textInputviewStyle,
  signupText = "Don't have an account?",
  signupText1 = "Sign Up",
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
  const [otp, setotp] = React.useState("");


  const dispatchErrorAction = (dispatch, message) => {
    dispatch({
      type: TOAST,
      payload: {
        message: "Notification",
        message2: message,
        type: "error",
      },
    });
  };
  const validation = async (e) => {

    if (!mobileNo || mobileNo == ' ' || mobileNo.length < 10) {
      dispatchErrorAction(dispatch, "Please enter valid mobile number");
      // alert("Please enter valid mobile number")
    } else if (mobileNo) {
      let data = { mobile_no: mobileNo };
      let obj = { data };
      dispatch(sendLoginOtp(obj));
    }


  }
  const signIn = () => {
    navigation.navigate("OTPScreen")

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
              Insert your phone
              numbers
      </Text>
          </View>
   
          <View style={[styles.textInputContainer, textInputContainerStyle]}>
          <View style={styles.numberInputText}>
          <View style={styles.codeview}>
            <Icons.Flagicon/>
            <Icons.Arrowdown/>
            </View>
          <TextInput
              style={styles.textInputview}
              placeholderTextColor={"#A4ADBC"}
              placeholder={numberPlaceholder}
              keyboardType="numeric"
              value={mobileNo}
              maxLength={10}
              onChangeText={(text) => setmobileNo(text)}
            />
              </View>
              <Text style={styles.heding1TextStyle}>By joining us you’re agreeing to our <Text style={{color:'#EF6969',textDecorationLine: 'underline'}}>Terms of Use</Text> & <Text style={{color:'#EF6969',textDecorationLine: 'underline'}}>Privacy Policy.</Text></Text>
           <View style={{marginTop:hp(5)}}>

            <CommanButton
              text="GET OTP"
              onPress={() => {
                signIn();
                // navigation.navigate("HomeScreen");
              }}
              />
              </View>

          </View>

        </ScrollView>
      </View>
    )
 
};

export default SingUPScreen;
