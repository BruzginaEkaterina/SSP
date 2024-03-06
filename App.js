import React, { useState } from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import StartScreen from './screens/StartScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return <HomeScreen navigation={{ navigate: setCurrentScreen }} />;
      case 'Start':
        return <StartScreen navigation={{ navigate: setCurrentScreen }} />;
      case 'Second':
        return <SecondScreen navigation={{ navigate: setCurrentScreen }} />;
      case 'Third':
        return <ThirdScreen navigation={{ navigate: setCurrentScreen }} />;
      default:
        return null;
    }
  };

  return <View style={{ flex: 1 }}>{renderScreen()}</View>;
}
