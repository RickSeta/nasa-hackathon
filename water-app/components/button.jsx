import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function Buttonn({callback, color, text}) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: color?color:'red',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignItems: 'center',
      color: 'read',
      fontWeight: 'bold',
      cursor: 'pointer'
    },
    font: {
      color: 'black',
      fontWeight: 'bold',
    },
  });

  return (
    <Pressable style={styles.container} onPress={callback?callback:() => {}}>
      <Text style={styles.font}>{text?text:'Pressione'}</Text>
      {/* <StatusBar style="auto" /> */}
    </Pressable>
  );
}


