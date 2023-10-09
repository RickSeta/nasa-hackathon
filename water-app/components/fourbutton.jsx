import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import Buttonn from './button';

const Grid = ({dadosPergunta, color, telaAtual, dropStateChange, dropletState}) => {
  const resps = dadosPergunta?dadosPergunta.resps:[]
  const data = resps.filter(resp=>resp.text != '').map((resp, i) => (
  { 
      id:`${i+1}`, title: <Buttonn color={color} text={resp.text} callback={() => {
        telaAtual(resp.prox)
        if(dadosPergunta.correct.includes(resp.key)) {
          dropStateChange(dropletState+1)
        } else {
          dropStateChange(dropletState-1)
        }
      }} 
      dropStateChange={dropStateChange}/>
  }));
  const renderItem = ({ item }) => (
    <View style={styles.gridItem}>
      <Text >{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      numColumns={2} // Define o número de colunas desejado
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  gridItem: {
    margin: 8,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
});

export default Grid;