import { StyleSheet, Image, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Grid from '../components/fourbutton';
import Balao from '../components/balao';

export default function TelaInicial() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <StatusBar style="auto" /> */}
      {/* <Buttonn color='red' text={'Botao parametrizado'} callback={()=>{alert('Pode botar qualquer função aqui!!')}}/> */}
<<<<<<< HEAD
      {/* <Grid color='red' text={'Botao parametrizado'} callback={()=>{alert('Pode botar qualquer função aqui!!')}}/> */}
      <Balao></Balao>
=======
      <Grid color='red' text={'Botao parametrizado'} callback={() => navigation.navigate('TelaDecisao')}/>
      {/* <Fourbutton></Fourbutton> */}
>>>>>>> bd683a1dce95ae2c17e6d6dbd1ec917794b4e7df
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
