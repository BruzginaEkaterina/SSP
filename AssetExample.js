import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={[styles.paragraph, styles.color]}>
     Ходить пешком или бегать: что лучше для нашего здоровья?
      </Text>
     <Text style={[styles.paragraph, styles.color1]}>
     Ходить или бегать? Вот в чем вопрос. Пришло время рассмотреть его с разных сторон.
      </Text>
      <Text style={[styles.paragraph, styles.color2]}>
       Движение — это жизнь! Это мы все знаем, а как именно двигаться выбирать вам. 
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:700,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  paragraph: {
    width:'100%',
    padding:20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  color:{
    backgroundColor:'lightsteelblue',
    height:'30%',
  },
  color1:{
    backgroundColor:'gainsboro',
    height:'40%',
  },
 color2: {
    backgroundColor: 'plum',
    height: '30%',
    flex: 1,}
});
