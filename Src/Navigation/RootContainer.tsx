import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import ApplicationStyles from '../Themes/ApplicationStyles';
import Navigation from './Navigation';
import 'react-native-gesture-handler';

export default function RootContainer() {
  return (
    <View style={ApplicationStyles.applicationView}>
      <StatusBar barStyle="light-content" />
      <Navigation />
    </View>
  );
}
