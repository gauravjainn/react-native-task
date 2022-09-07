import {
  ViewStyle,
  StyleSheet,
  Dimensions,
  ImageStyle,
  TextStyle,
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import colors from "../../Themes/Colors";
const { width: ScreenWidth } = Dimensions.get("screen");

interface Style {
  ButtonStyle: ViewStyle;
  buttonTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({

  ButtonStyle: {
    padding: hp(2),
    width: '100%',
    backgroundColor: colors.buttoncolor,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    
 
  },

  buttonTextStyle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});
