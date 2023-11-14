import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput, Button, Keyboard } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const ageInput = useRef();
  const nextStep = () => {
    Keyboard.dismiss();
    console.log(name);
    console.log(age);
    setName('');
    setAge('');
  }

  function HomeScreen({ navigation: { navigate } }) {
    return (
      <View>
        <Text>This is the home screen of the app</Text>
        <Button
          onPress={() =>
            navigate('Profile', { names: ['Brent', 'Satya', 'Michaś'] })
          }
          title="Go to Brent's profile"
        />
      </View>
    );
  }


  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite o seu nome"
        defaultValue={name}
        onChangeText={newText => setName(newText)}
        style={{marginBottom: 20}}
        returnKeyType="next"
        onSubmitEditing={() => ageInput.current.focus()}
      />
      <TextInput
        ref={ageInput}
        placeholder="Digite sua idade"
        keyboardType="numeric"
        defaultValue={age}
        onChangeText={newText => setAge(newText)}
        style={{marginBottom: 20}}
      />
      <Button onPress={nextStep} title="Continuar"/>
      <StatusBar style="auto" />
  

    <View>
     

    </View>
    </View>
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