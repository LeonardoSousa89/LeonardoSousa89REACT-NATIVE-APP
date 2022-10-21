import { StyleSheet, View, Text } from 'react-native';


export default (props) => {
  return (
    <View style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'80%',
    opacity:0.4,
    height:'20%',
    justifyContent:'center',
    alignItems:'center',
  },text:{
    fontSize:20,
    backgroundColor:'#2976E6',
    width:'100%',
    textAlign:'center',
    borderRadius:6,
    padding:3
  }
});
