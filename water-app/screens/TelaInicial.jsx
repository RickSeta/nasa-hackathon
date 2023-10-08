import { StyleSheet, Image, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Buttonn from '../components/button';
import Grid from '../components/fourbutton';
import Balao from '../components/balao';

export default function TelaInicial() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <StatusBar style="auto" /> */}
      {/* <Buttonn color='red' text={'Botao parametrizado'} callback={()=>{alert('Pode botar qualquer função aqui!!')}}/> */}
      <Grid color='red' text={'Botao parametrizado'} callback={() => navigation.navigate('TelaDecisao')}/>
      <Grid color='red' text={'Botao parametrizado'} callback={()=>{navigation.navigate('MapaMundi')}}/>
      {/* <Fourbutton></Fourbutton> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
