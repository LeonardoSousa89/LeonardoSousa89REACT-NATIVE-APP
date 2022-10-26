import { StyleSheet, View, Text, ScrollView } from 'react-native';

import { TextInput, Button, } from '@react-native-material/core';

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { useEffect, useState } from 'react';

import { auth, db } from '../../services'
import { addDoc, collection } from 'firebase/firestore';

import { signOut } from 'firebase/auth';


export default (props) =>{

 
  const [ID, setID]=useState('')
  const [email, setEmail]=useState('')
  const [nomeMutante, setNomeMutante]=useState('')
  const [habilidade, setHabilidade]=useState('')
  
  useEffect(()=>{

        let userEmail=auth.currentUser.email
        setEmail(userEmail)

  },[email])

  function sair(){
      signOut(auth).then(function(e){
          props.navigation.navigate("login")
      }).catch(e=>console.warn(e))
      
  }

  function enviar(){
      console.warn(nomeMutante + ',' + habilidade)
      limpar()
  }

  function limpar(){
      setNomeMutante('')
      setHabilidade('')
  }

  return (

    <View style={styles.container}>

        <View style={styles.inboundContainer}>

            <View style={styles.form}>
                <Text style={styles.userData}>{email}</Text>
                 
                <View style={styles.inbounForm}>
                    
                    <TextInput style={styles.full}
                                placeholder='nome do mutante'
                                color='#2196f3'
                                value={nomeMutante}
                                onChangeText={(e)=>{setNomeMutante(e)}}
                        /> 
                    <TextInput style={styles.full}
                                placeholder='habilidade'
                                color='#2196f3'
                                value={habilidade}
                                onChangeText={(e)=>{setHabilidade(e)}}
                        /> 
                    
                    <Button style={styles.full} 
                      title="enviar" 
                      color='#2196f3'
                      trailing={props => <Icon name="account" {...props} />} 
                      onPress={enviar}
                      />

                    </View>
            </View>


            <View style={styles.floatBtn}>
              <Button style={styles.btn}
                  variant="outlined"
                  title="sair" 
                  color='#2196f3'
                  trailing={props => <Icon name="exit-to-app" {...props} />} 
                  onPress={sair}
                  />
            </View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },inboundContainer:{
      width:'88%',
      height:'100%',
      backgroundColor:'#fff',
      alignItems:'center',
      justifyContent:'center',
      padding:5,
  },text:{
      fontSize:30,
      color:'white'
  },userData:{
      flex:9,
      marginTop:10,
      fontSize:15,
      color:'#2976E6',
      fontWeight:'bold',
  },btn:{
      marginTop:100,
  },floatBtn:{
      alignItems:'flex-end',
      justifyContent:'flex-end',
      width:'100%',
      padding:10,
  },form:{
      height:'80%',
      width:'100%',
      backgroundColor:'whitesmoke',
      alignItems:'center',
      justifyContent:'center',
  },inbounForm:{
      flex:100,
      backgroundColor:'rgba(0,0,0,0.1)', 
      alignItems:'center',
      justifyContent:'center',
      width:'100%',
      borderBottomEndRadius:6,
      borderBottomLeftRadius:6,
  },btn:{
    
  },full:{
    width:'80%'
  }
});
