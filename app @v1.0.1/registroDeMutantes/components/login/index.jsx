import { StyleSheet, View, Text } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>

        <Text style={styles.text}>login</Text>
        <Text>(30% da tela)</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
    width:'100%',
    height:'30%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'blue',
  },text:{
    fontSize:50,
    color:'white',
  }
});