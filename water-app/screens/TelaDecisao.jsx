import { StyleSheet, Text, View } from 'react-native';
import quizzService from '../util/questions';
import Grid from '../components/fourbutton';

export default function TelaDecisao() {
  let dadosPergunta = quizzService.getQuizzSpecs('id1'); 
  return (
    <View style={styles.container}>
      <Grid resps={dadosPergunta.resps}/>
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
