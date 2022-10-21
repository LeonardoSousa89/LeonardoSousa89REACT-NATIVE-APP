import { StyleSheet, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import Header from '../header'
import Login from '../login'
import Cadastro from '../cadastro'

const Stack=createNativeStackNavigator()

export default function Routes() {
  return (
    <View style={styles.container}>
        <Header />
        
        <NavigationContainer>
          <Stack.Navigator initialRouteName='cadastro'>
              <Stack.Screen name='login' options={{title: 'área de acesso'}}  component={Login} />
              <Stack.Screen name='cadastro' options={{title: 'criação de conta'}} component={Cadastro} />
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
