import React from 'react';
import { View, Button, Text } from 'react-native';

const StartScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Start Screen</Text>
    <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
  </View>
);
export default StartScreen;
