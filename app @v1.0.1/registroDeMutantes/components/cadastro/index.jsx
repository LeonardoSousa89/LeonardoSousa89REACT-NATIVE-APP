import { TextInput,Button } from '@react-native-material/core';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Cadastro() {

  const [msg, setMsg]=useState('msg')

  useEffect(()=>{},[msg])

  function MSG(){
    console.warn(msg)
    alert(msg)
    limpar()
  }

  function limpar(){
    setMsg('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>(50% da tela)</Text>
      <View style={styles.internalContainer}>
          <TextInput placeholder='msg'
                     value={msg}
                     onChangeText={(e)=>{setMsg(e
                     )}}/> 

          <Button title="click" 
                  color="error"
                  onPress={MSG} />
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'black',
    width:'100%',
    height:'50%',
  },text:{
    color:'white',
  },internalContainer:{
    width:'80%',
  }
});
