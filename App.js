import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/screens/Home';
import Login from './src/screens/Login';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}
          options={({navigation}) => ({
            title: "Home",
            headerStyle: {
              backgroundColor: 'lightcoral'
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.headerRight}>Ir a Login</Text>
              </TouchableOpacity>
            )
        })} />
        <Stack.Screen name='Login' component={Login}
          options={() => ({
            title: "Login",
            headerStyle: {
              backgroundColor: 'lightblue'
            }
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  headerRight: {
    padding: 10,
  }
})
