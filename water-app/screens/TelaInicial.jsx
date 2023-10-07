import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View } from 'react-native';
import Buttonn from '../components/button';

export default function TelaInicial() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to ssssstart working on your app!</Text>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      <Buttonn></Buttonn>
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
