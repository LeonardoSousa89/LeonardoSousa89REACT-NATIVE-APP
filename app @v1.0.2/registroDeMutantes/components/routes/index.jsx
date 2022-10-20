import { StyleSheet, View } from 'react-native';

import Header from '../header'
import Login from '../login'
import Cadastro from '../cadastro'

 //não é neccessário usar display flex
//https://www.udemy.com/course/curso-react-native/learn/lecture/20775906#overview

export default function Routes() {
  return (
    <View style={styles.container}>
            <Header />
            {/* <Login /> */}
            <Cadastro />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
  }
});
