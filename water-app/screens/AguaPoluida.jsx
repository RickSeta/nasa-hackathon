import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View } from 'react-native';
import Buttonn from '../components/button';

export default function AguaPoluida() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to ssssstart working on your app!</Text>
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
