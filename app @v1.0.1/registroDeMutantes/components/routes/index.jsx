import { StyleSheet, View } from 'react-native';

import Header from '../header'
import Login from '../login'
import Cadastro from '../cadastro'

export default function Routes() {
  return (
    <View style={styles.container}>
            <Header />
            <Login />
            <Cadastro />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display:'flex',
    alignItems:'center',
    width:'100%',
    // backgroundColor:'black',
  },hd:{
    width:'100%',
  }
});
