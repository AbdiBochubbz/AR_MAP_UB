import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Animatable from 'react-native-animatable';

const Stack = createStackNavigator();

const logoImage = require ("./assets/logo.png");
const bg = require("./assets/bg.png");

export default function HomeScreen({ navigation }) {
  useEffect(() => {
    // Use the fadeIn animation on mount
    fadeIn();
  }, []);

  const fadeIn = () => {
    // Use the fadeIn animation on each text element
    if (textRef.current) {
      textRef.current.fadeIn(1500);
    }

    if (descriptionRef.current) {
      descriptionRef.current.fadeIn(1500);
    }
  };

  const handleButtonPress = () => {
    // Your logic when the button is pressed
    navigation.navigate('Details');
  };

  const textRef = React.createRef();
  const descriptionRef = React.createRef();

  return (
      <ImageBackground
      style={styles.image}
      source={require("./assets/bg2.jpg")}
      blurRadius={1}>
         {/* Apply fadeIn to the University name */}
      <View style={styles.child}>
      <Animatable.Text ref={textRef} animation="fadeIn" duration={2500} style={styles.text}>
        University of Belize
      </Animatable.Text>

      <Image source={logoImage} />

      {/* Apply fadeIn to the AR Map text */}
      <Animatable.Text ref={descriptionRef} animation="fadeIn" duration={2500} style={styles.text}>
        AR Map {"\n"}
      </Animatable.Text>

      {/* Apply fadeIn to the Campus AR Map text */}
      <Animatable.Text ref={descriptionRef} animation="fadeIn" duration={2500} style={styles.text}>
        Campus AR Map {"\n"}
      </Animatable.Text>

      <Animatable.Text ref={descriptionRef} animation="fadeIn" duration={2500} style={styles.description}>
        Navigate the campus with ease! Find buildings, locate staff offices, and much more with our AR-Powered campus map! {"\n"} {"\n"}
      </Animatable.Text>

      {/* Wrapping the Animatable.View around the Button to apply the bouncing animation */}
      <Animatable.View animation="bounce" iterationCount={2}>
        <Button title="Get Started" color={'purple'} onPress={handleButtonPress} />
      </Animatable.View>

      <StatusBar style="auto" />
     </View>
      </ImageBackground>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
  },

  description: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Times New Roman',
    textAlign: 'center',
  },

  image: {
    width: '100%',
    height: '100%',
  },
  child: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  bg : {
    resizeMode:'cover',
    blurRadius: 1,
  }
});
