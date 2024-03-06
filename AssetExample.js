import { TouchableOpacity, ScrollView, Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.item}>      
        <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Нажми меня</Text>
    </TouchableOpacity>
        <Image style={styles.logo} source={require('../assets/jack-anstey-XVoyX7l9ocY-unsplash.jpg')} />
        <Text style={styles.text}>Путешествия на поезде многие вспоминают с особой теплотой, ведь они дают возможность отключиться от суеты и окунуться в наблюдение проплывающих пейзажей, познакомиться с интересными людьми и небольшими населенными пунктами на маршруте. Если вы задумываетесь о необычном странствии под стук колес, рассказываем о самых впечатляющих в мире железнодорожных маршрутах. Чтобы стать пассажиром этих поездов, вам сначала придется долететь до места, откуда они отправляются. Но это стоит того. 
        Поезд на Мачу-Пикчу
Существует железнодорожный маршрут, по которому можно добраться до одного из самых интересных мест на нашей планете — Мачу-Пикчу. Современный поезд, следующий на Мачу-Пикчу, пересекает Священную долину инков от станции Ольянтайтамбо до Агуас-Кальентес. Отличным бонусом этих поездов являются панорамные окна, которые позволяют любоваться красотой местных земель.</Text>
      </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:390,
    alignItems: 'center',
    justifyContent: 'center',

  },
  
  item: {
  
    backgroundColor: 'lightgray',
    width: '100%',
    alignItems: 'center',
    },
  
  text:{
    fontSize:30,
    padding:20,
  },
  logo:{
    width:390,
    height:250,
  },
  button: {
    backgroundColor: 'rosybrown',
    borderRadius: 8,
    padding: 10,
    width:'100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
