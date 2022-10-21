import { StyleSheet, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import Header from '../components/header'
import Login from '../views/login'
import Cadastro from '../views/cadastro'
import Registros from '../views/registros'

const Stack=createNativeStackNavigator()

export default function Routes() {
  return (
    <View style={styles.container}>
        <Header />
        
        <NavigationContainer>
          <Stack.Navigator initialRouteName='login'>
              <Stack.Screen name='login'    options={{title: 'área de acesso'}}  component={Login} />
              <Stack.Screen name='cadastro' options={{title: 'criação de conta'}} component={Cadastro} />
              <Stack.Screen name='registros' options={{title: 'informações da conta'}} component={Registros} />
          </Stack.Navigator>
        </NavigationContainer>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
  }
});
