import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View } from 'react-native';
import React, { useRef, useState } from 'react';
import Buttonn from '../components/button';
import { useNavigation } from "@react-navigation/native";


export default function TelaInicial() {
  const navigation = useNavigation();
  const [isBlue, setIsBlue] = useState(false);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to ssssstart working on your app!</Text>
      
      <Buttonn color='red' text={'Exemplo useState'} callback={()=>{setIsBlue(!isBlue)}}/>
      <Buttonn color={isBlue?'blue':'yellow'} callback={()=>{navigation.navigate('AguaPoluida')}}/>
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
