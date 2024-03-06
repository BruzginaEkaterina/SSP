import {ScrollView, Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
       Путешествия на поезде: пять самых красивых в мире маршрутов
      </Text>
      <Card>
        <AssetExample />
      </Card>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'plum',
   
 
  },
  paragraph: {
    marginTop:150,
    padding:20,
  
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
