import { Text, View, StyleSheet, Image, Button } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
       <Text style={[styles.paragraph, styles.blue]}>
        Новости
      </Text>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <Text style={styles.text}>
        Превращаем стресс в своего помощника
      </Text>
      <Text style={styles.text2}>
        Исследователи Йельскогоуниверситета заявляют, что люди которые рассматривают стресс, как возможность личностного роста, отмечают улучшение качества жизни. Сегодня узнаем, как это работает и как увидеть положительные стороны стресса.
      </Text>
      
     <Button title="Читать далее" color='darksalmon' style={styles.button}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'left',
    justifyContent: 'center',
    padding: 24,
    marginTop:20,
  },
  paragraph: {
    marginBottom:20,
    marginTop: 0,
    fontSize: 12,
    textAlign: 'left',
    color:'black',
    
  },
  text:{
    fontSize:26,
    fontWeight: 'bold',
  },
  text2: {
    fontSize:'16',
  },
  logo: {
    height: 150,
    width: 260,
  },

  blue: {
  color:'blue',
  fontSize:16,
  },
  
  button: {
    fontSize:35,

  },

});
