import { StyleSheet, View, Text } from 'react-native';

import { TextInput,Button } from '@react-native-material/core';

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { useEffect, useState } from 'react';

import { auth, db } from '../../services'
import { addDoc, collection } from 'firebase/firestore';


export default (props) =>{

 
  const [id, setId]=useState('')
  const [email, setEmail]=useState('')

  useEffect(()=>{

    const userId=auth.currentUser.uid
    const userEmail=auth.currentUser.email

    setId(userId)
    setEmail(userEmail)

  },[])

  async function _data(){

        auth.currentUser.getIdTokenResult(true)
            .then(e=>{

                let _AuthTime=e.authTime
                let _Token=e.token
                let _SignProvider=e.signInProvider
                let _ExpTime=e.expirationTime

                addDoc(collection(db,"User"),{
                    id, 
                    email, 
                    _AuthTime, 
                    _SignProvider,
                    _Token,
                    _ExpTime
                })
                .then(_=>console.warn("dados enviados com sucesso."))
                .catch(e=>console.warn(e))

            })
            
    }




  return (
    <View style={styles.container}>
        <View style={styles.inboundContainer}>

            <Text style={styles.text}>BEM VINDO!</Text>

            <Text style={styles.userData}>ID: {id}</Text>
            <Text style={styles.userData}>EMAIL: {email}</Text>

            <Button style={styles.btn}
                variant="outlined"
                title="enviar dados ao banco" 
                color='#2196f3'
                trailing={props => <Icon name="send" {...props} />} 
                onPress={_data}
                />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    backgroundColor:'#2976E6',
    alignItems:'center',
    justifyContent:'center',
  },inboundContainer:{
    width:'80%',
    height:'100%',
    backgroundColor:'#2976E6',
    alignItems:'center',
    justifyContent:'center',
    padding:5,
  },text:{
    fontSize:30,
    color:'white'
  },userData:{
    marginTop:10,
    fontSize:15,
    color:'white'
  },btn:{
    marginTop:100,
  }
});
