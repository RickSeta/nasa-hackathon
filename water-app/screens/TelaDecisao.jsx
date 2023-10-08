import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';
import quizzService from '../util/questions';
import Grid from '../components/fourbutton';
import Balao from '../components/balao';

export default function TelaDecisao({route,navigation}) {
  const {idTela} = route.params
  const [telaAtual, setTelaAtual] = useState(idTela);
  const [dropletState, setDropletState] = useState(0);
  
  let dadosPergunta = quizzService.getQuizzSpecs(telaAtual);

  useEffect(()=>{
    console.log(telaAtual+ dropletState)
  },[telaAtual,dropletState])

  return (
    <ImageBackground source={dadosPergunta.image} resizeMode="center" style={styles.image}>
      <Grid telaAtual={setTelaAtual} resps={dadosPergunta.resps}/>
      <Text style={styles.container}>Tela: {telaAtual} Estado: {dropletState}</Text>
      <Balao></Balao>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  image: {
   
    width: '100%',
    height: '110%', 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#06384D'
  },
});
