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

  OtpInputviewStyle: ViewStyle;
  OtpInputview1Style: ViewStyle;

  heding1viewStyle: ViewStyle;
  heding1TextStyle: TextStyle;
  heding2TextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    paddingHorizontal:hp(3),
  },
  headingviewStyle: {
    alignSelf: "center",
    marginVertical: hp(2),
  },
  heding1viewStyle: { 
    width: '100%', 
    alignItems: 'center' 
  },
  heding1TextStyle: {
    alignSelf: 'center', 
    fontSize: 22, 
    fontWeight: '700',
    color:colors.Textcolor
  },
  heding2TextStyle: {
    alignSelf: 'center', 
    fontSize: 14, 
    fontWeight: '600',
    color:colors.Textcolor,
    // marginTop:hp(1)
  },

    OtpInputviewStyle: {
      paddingHorizontal: hp(4),
      paddingVertical:hp(2),
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


  textInputContainer: {
    marginVertical:hp(1.5),
    flexDirection:'row',
    justifyContent: 'space-between',

  },

});
