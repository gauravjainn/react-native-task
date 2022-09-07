import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icons from "../assets/Icons/Icons";
import styles from "./Commanview.style";


export interface IHeaderProps {
  text: string;
  name: string;
  style: any;
  textstyle: any;
  onPress: () => void;
}


const Backview = ({  
  onPress,
  style,
}: IHeaderProps) => {
  return (
      <TouchableOpacity onPress={onPress} style={styles.view1style}>
    <View style={[styles.viewstyle, style]}>
     <Icons.BackIcon/>
    </View>
      </TouchableOpacity>
  );
};


export default {

  Backview,
};
