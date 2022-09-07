import {
  ViewStyle,
  ImageStyle,
  Dimensions,
  StyleSheet,
  TextStyle,
} from "react-native";
const { width: ScreenWidth } = Dimensions.get("screen");
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from "../../Themes/Colors";

interface Style {
  container: ViewStyle;
  headingviewStyle: ImageStyle;
  textInputContainer: ViewStyle;
  codeview: ViewStyle;
  numberInputText: TextStyle;

  passwordTextInputContainer: ViewStyle;
  loginButtonStyle: ViewStyle;
  sendOtpview: ViewStyle;
  sendOtpTextStyle: TextStyle;
  OtpInputviewStyle: ViewStyle;
  OtpInputview1Style: ViewStyle;
  OtpinputTextStyle: TextStyle;
  textInputview: ViewStyle;
  loginTextStyle: TextStyle;
  signupStyle: ViewStyle;
  signupTextStyle: TextStyle;
  signupTextStyle1: TextStyle;
  dividerStyle: ViewStyle;
  socialLoginContainer: ViewStyle;
  facebookSocialButtonTextStyle: TextStyle;
  twitterSocialButtonTextStyle: TextStyle;
  discordSocialButtonTextStyle: TextStyle;
  heding1viewStyle: ViewStyle;
  heding1TextStyle: TextStyle;
  heding2TextStyle: TextStyle;
  socialButtonStyle: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    paddingHorizontal: hp(3),
  },
  headingviewStyle: {
    // alignSelf: "center",
    marginVertical: hp(2),
  },
  heding1viewStyle: {
    width: '100%',
    alignItems: 'center'
  },
  heding1TextStyle: {
    alignSelf: 'center',
    fontSize: 13,
    fontWeight: '400',
    color: colors.Textcolor,
    marginVertical:hp(1)
  },
  heding2TextStyle: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.Textcolor,
    // marginHorizontal:hp(3)
    // marginTop:hp(1)
  },
  codeview: {
    backgroundColor: '#E8ECF4',
    padding: hp(1),
    marginVertical: hp(3),
    height: 55,
    borderWidth: 1,
    borderColor: '#E8ECF4',
    // backgroundColor:'#F7F8F9',
    borderTopLeftRadius: 13,
    borderBottomLeftRadius: 13,
    width: '25%',
    flexDirection: 'row',
    justifyContent:"space-around",
    alignItems: 'center'


  },
  numberInputText: {
    // padding: hp(1),
    marginTop: hp(3),
    marginBottom:hp(1),
    height: 55,
    borderWidth: 1,
    borderColor: '#E8ECF4',
    backgroundColor:'#F7F8F9',
    borderRadius: 13,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  },
  textInputview: {
    height: 45,
    borderRadius: 13,
    width: '70%',
    fontWeight: '400',
    fontSize:15,
    color: colors.black
  },
  sendOtpview: {
    padding: hp(1),
    backgroundColor: colors.backOtp,
    borderColor: colors.blue,
    borderWidth: 1,
    borderRadius: 6,
  },
  sendOtpTextStyle: {
    color: colors.blue,
    fontSize: 16,
    fontWeight: "500"
  },
  OtpInputviewStyle: {
    paddingHorizontal: hp(4),
    paddingVertical: hp(2),
    width: '30%',
    borderColor: colors.bodercolor,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  OtpInputview1Style: {
    marginVertical: hp(2)
  },
  OtpinputTextStyle: {
    padding: hp(1),
    height: 40,
    paddingHorizontal: hp(2),
    borderWidth: 1,
    borderColor: colors.Gray300,
    borderRadius: 8,
    width: '100%',
    fontWeight: "500",
    color: colors.black

  },

  textInputContainer: {
    marginVertical: hp(1.5),
    // flexDirection:'row',
    // justifyContent: 'space-between',

  },
  passwordTextInputContainer: {
    marginTop: 16,
  },
  loginButtonStyle: {
    padding: hp(1.5),
    width: '100%',
    backgroundColor: colors.blue,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: hp(2.5),

  },
  loginTextStyle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  signupStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(10)
  },
  signupTextStyle: {
    color: colors.Gray700,
    fontSize: 16,
    fontWeight: '500',
    marginRight: hp(0.5)
  },
  signupTextStyle1: {
    color: colors.blue,
    fontSize: 16,
    fontWeight: '600'
  },
  dividerStyle: {
    height: 0.5,
    marginTop: 24,
    marginBottom: 12,
    borderRadius: 16,
    width: ScreenWidth * 0.8,
    alignSelf: "center",
    backgroundColor: "#ccc",
  },
  socialLoginContainer: {
    marginVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  facebookSocialButtonTextStyle: {
    color: "#4267B2",
  },
  twitterSocialButtonTextStyle: {
    color: "#56bfe8",
  },
  discordSocialButtonTextStyle: {
    color: "#5865F2",
  },
  socialButtonStyle: {
    marginTop: 16,
  },
});
