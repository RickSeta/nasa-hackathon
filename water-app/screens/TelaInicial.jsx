import { StyleSheet, Image, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Buttonn from '../components/button';
import messageService from '../util/messages';

export default function TelaInicial() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Buttonn color='red' text={messageService.getMessage('botao.iniciar')} callback={() => navigation.navigate('TelaDecisao')}/>
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
