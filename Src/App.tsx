import "./Config";
import React from "react";
import RootContainer from "./Navigation/RootContainer";
import "react-native-gesture-handler";

import {
  View,
} from "react-native";


function App() {


  return (
    <View style={{ flex: 1 }}>
      <RootContainer />


    </View>
  );
}
export default App;


