import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

import Cadastro from './components/cadastro'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Cadastro />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
