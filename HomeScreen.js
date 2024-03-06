import React from 'react';
import { View, Button, Text } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ justifyContent: 'center', alignItems: 'center',  fontSize: 26, padding:20, }}>Home Screen</Text>
    <Button title="Go to Start" onPress={() => navigation.navigate('Start')} />
    <Button title="Go to Second" onPress={() => navigation.navigate('Second')} />
    <Button title="Go to Third" onPress={() => navigation.navigate('Third')} />
  </View>
);


export default HomeScreen;
