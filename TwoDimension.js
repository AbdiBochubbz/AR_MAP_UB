// DetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';


function TwoD() {

  return <WebView source={{ uri: 'https://www.google.com/maps/d/viewer?mid=1Z8BEXM7Wz4C84R5Q6Dz50CEmuVkQbgI&usp=sharing' }} style={{ flex: 1 }} />;

}


export default TwoD ;

const styles = StyleSheet.create({


});