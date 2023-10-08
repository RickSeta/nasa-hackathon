import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View } from 'react-native';
import Buttonn from '../components/button';
import GridComponent from '../components/fourbutton';
import Fourbutton from '../components/fourbutton';
import Grid from '../components/fourbutton';

export default function TelaInicial() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <StatusBar style="auto" /> */}
      {/* <Buttonn color='red' text={'Botao parametrizado'} callback={()=>{alert('Pode botar qualquer função aqui!!')}}/> */}
      <Grid color='red' text={'Botao parametrizado'} callback={()=>{alert('Pode botar qualquer função aqui!!')}}/>
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
