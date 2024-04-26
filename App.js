import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { NativeBaseProvider, Box} from "native-base";
import { useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [count,setCount] = useState(0);
  const [name,setName] = useState('');

  return (
    //customizes theme throughout jsx, has attribute theme
    <NativeBaseProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <Text style={{color:'red',padding:10}}>Hello World!</Text>
          <Text>My name is..</Text>
          <TextInput style={{backgroundColor:'red', width:100}}/>
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
