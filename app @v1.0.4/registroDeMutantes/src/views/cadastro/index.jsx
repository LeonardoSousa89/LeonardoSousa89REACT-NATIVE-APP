import { TextInput,Button } from '@react-native-material/core';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { auth, db } from '../../services'

import { createUserWithEmailAndPassword } from 'firebase/auth'

import Title from '../../components/titulo'

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default (props) =>{

  const [email, setEmail]=useState('')
  const [senha, setSenha]=useState('')

  useEffect(()=>{},[email, senha])

  async function cadastrar(){

    await createUserWithEmailAndPassword(auth, email, senha)
      .then(function(e){
        limpar()
        props.navigation.navigate("login")
      })
      .catch(function(e){
        console.warn(e)
      })
      
  }

  function limpar(){
    setEmail('')
    setSenha('')
  }

  return (
    <View style={styles.container}>

      <Title title="Cadastro" />

      <View style={styles.internalContainer}>
          <TextInput placeholder='email'
                     color='#2196f3'
                     value={email}
                     onChangeText={(e)=>{setEmail(e)}}/> 

          <TextInput placeholder='senha'
                     color='#2196f3'
                     value={senha}
                     onChangeText={(e)=>{setSenha(e)}}/> 


        <Button style={styles.btn}
                variant="outlined"
                title="cadastrar" 
                color='#2196f3'
                trailing={props => <Icon name="send" {...props} />} 
                onPress={cadastrar}
                />

        <Text style={styles.footerText}
                onPress={()=>props.navigation.navigate("login")}>
                  possui conta? faça login aqui.
        </Text>

      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    justifyContent:'space-evenly',
    backgroundColor: 'whitesmoke',
    width:'100%',
    height:'60%',
  },text:{
    color:'white',
  },internalContainer:{
    width:'80%',
    height:'40%',
  },btn:{
    marginTop:'5%',
  },footerText:{
    width:'100%',
    textAlign:'center',
    marginTop:15,
    color:'#2976E6',
  }
});
