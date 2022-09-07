import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from './Colors';

export default StyleSheet.create({
  applicationView: {
    flex: 1,
  },
  logoImageStyle: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    alignSelf: "center",
    height: hp(6),
    width: hp(26),

  },
  logoImageviewStyle: {
    alignItems:'center',
  
    // alignSelf: "center",
    marginHorizontal: hp(3),
    // borderWidth:1
    // marginVertical:20
  },
  hedingTextStyle: {
    alignSelf: 'center', 
    fontSize: 21, 
    fontWeight: '400',
    marginTop:hp(1.9),
    color:colors.Textcolor
  },
  
});
