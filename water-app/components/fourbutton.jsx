import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import Buttonn from './button';

const Grid = ({callback, color, text}) => {
  const data = [
    { id: '1', title: <Buttonn callback={callback}  color={color}/> },
    { id: '2', title: <Buttonn callback={callback}  color={color}/> },
    { id: '3', title: <Buttonn callback={callback}  color={color}/> },
    { id: '4', title: <Buttonn callback={callback} color={color}/> },
    // Adicione mais itens conforme necessário
  ];

  const renderItem = ({ item }) => (
    <View style={styles.gridItem}>
      <Text text={text}>{item.title}</Text>
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
    // flex: 1,
    margin: 8,
    padding: 0,
    // backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Grid;