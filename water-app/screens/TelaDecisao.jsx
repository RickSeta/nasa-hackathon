import { StyleSheet, Text,Image, View,ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';
import quizzService from '../util/questions';
import Grid from '../components/fourbutton';
import Balao from '../components/balao';
import FloatingView from '../components/animation/FloatingView';
import Gota from '../components/gota';

export default function TelaDecisao({route,navigation}) {
  const {idTela} = route.params
  const [telaAtual, setTelaAtual] = useState(idTela);
  const [dropletState, setDropletState] = useState(0);
  
  let dadosPergunta = quizzService.getQuizzSpecs(telaAtual);

  /*
  useEffect(()=>{
    console.log(telaAtual+ dropletState)
  },[telaAtual,dropletState])
  */

  return (
    <View style={[styles.container]}>
        <View style={[styles.imageContainer]}>
          <Image style={styles.image} resizeMode='center' source={dadosPergunta.image}/>
        </View>
          <View style={[styles.balaoContainer]}>
            <FloatingView>
                <Balao pergunta={dadosPergunta.desc} dropletState={dropletState}></Balao>
            </FloatingView>
          </View>
        
        <View style={[styles.grid]}>
          <Grid telaAtual={setTelaAtual} color={'#FFCB8C'} dadosPergunta={dadosPergunta} dropStateChange={setDropletState} dropletState={dropletState}/>
        </View>

        <View style={styles.comentario}>
          <Gota texto={dadosPergunta.comentario}></Gota>
        </View>
        
        
        {/* <Text style={styles.container}>Tela: {telaAtual} Estado: {dropletState}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06384D',
    overflow: 'hidden'
  },

  comentario:{
    position: 'absolute',
    alignSelf: 'flex-start',
    width: '50%',
    height: '30%',
    bottom: 5
  }
  ,
  image: {
    width: '100%',
    height: '110%', 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute'
  },
  imageContainer:{
    width: '70%',
    height: '100%',
    alignSelf: 'center',
    bottom: 18,
  },
  grid: {
    alignSelf: 'center',
    bottom: 5,
    position: 'absolute'
  },
  balaoContainer:{
    alignSelf: 'center',
    position: 'absolute',
    left: "10%"
  }
});
