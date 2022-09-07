import {
    ViewStyle,
    StyleSheet,
    Dimensions,
    ImageStyle,
    TextStyle,
    Platform,
  } from "react-native";
  import { heightPercentageToDP as hp } from "react-native-responsive-screen";
  import colors from "../Themes/Colors";
  const { width: ScreenWidth } = Dimensions.get("screen");
  
  interface Style {

    viewstyle: ViewStyle;
    view1style: ViewStyle;
 
  }
  
  export default StyleSheet.create<Style>({

    viewstyle: {
      paddingHorizontal: hp(2),
      borderWidth: 1,
      borderColor: colors.bodercolor,
      borderRadius:12,
      backgroundColor:'#fff',
      alignItems:'center',
      justifyContent:'center',
      height:41,
      width:41
 

  
    },


view1style:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between',
  width:'100%',
},

     
  });
  