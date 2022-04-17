import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView  } from 'react-native';
import {LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react/cjs/react.production.min';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors.js';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen />;

  if (userNumber) {
    screen = <GameScreen onPickNumber={pickedNumberHandler} />
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/background.png')} 
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView styles={styles.rootScreen}>
          {screen} 
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});
