import { StyleSheet, Button, View } from 'react-native';
import Header from '../header';

export default function Cadastro() {
  return (
    <View style={styles.container}>

      <Header />

      <View style={styles.form}>
          <Button style={styles.btn} title='cadastrar'/>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display:'flex',
    backgroundColor: 'whitesmoke',
    width:'100%',
  },btn:{
    width:'100%',
  },form:{
    flex: 1,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    //teste
    backgroundColor: 'black',
  }
});
