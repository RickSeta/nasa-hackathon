import { StyleSheet, Text, View, } from 'react-native';
import React, { useState, useEffect } from 'react';
import quizzService from '../util/questions';
import Grid from '../components/fourbutton';

export default function TelaDecisao() {
  let dadosPergunta = quizzService.getQuizzSpecs('id1');
  const [telaAtual, setTelaAtual] = useState('id1');
  const [dropletState, setDropletState] = useState(0);

  useEffect(()=>{
    console.log(telaAtual+ dropletState)
  },[telaAtual,dropletState])


  return (
    <View style={styles.container}>
      <Grid telaAtual={setTelaAtual} resps={dadosPergunta.resps}/>
      <Text style={styles.container}>Tela: {telaAtual} Estado: {dropletState}</Text>
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
