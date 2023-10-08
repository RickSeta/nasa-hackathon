import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import Buttonn from './button';

const Grid = ({resps}) => {
  const data = resps.map((resp, i) => (
    { 
      id:`${i+1}`, title: <Buttonn text={resp.text} callback={() => alert(`Callback para ${resp.prox}`)} />
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