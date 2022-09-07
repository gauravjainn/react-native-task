import * as React from "react";
import {
  View,
  Image,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
/**
 * ? Local Imports
 */
import styles from "./CommanButton.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

export interface ICommanButtonProps {
  text: string;
  style?: CustomStyleProp;
  textStyle?: CustomTextStyleProp;
  imageSource?: ImageSourcePropType;
  textContainerStyle?: CustomStyleProp;
  iconImageStyle?: CustomImageStyleProp;
  onPress: () => void;
}

const CommanButton: React.FC<ICommanButtonProps> = ({
  style,
  text,

  onPress,
}) => {
  return (
    <TouchableOpacity 
    style={[styles.ButtonStyle,style ]}
    onPress={onPress}
    >
           <Text style={[styles.buttonTextStyle, ]}>{text}</Text>
    </TouchableOpacity>
    
  );
};

export default CommanButton;
