import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Buttonn() {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>Enviar</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    color: 'read',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  font: {
    color: 'white',
    fontWeight: 'bold',
  },
  meuBotao : addEventListener('click', function() {
    alert('Botão clicado!');
  }),
});
