import { StyleSheet, Text,View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Registro de Mutantes &reg;</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2976E6',
    height:'20%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },text:{
    color:'#fff',
    fontSize:30
  }
});
