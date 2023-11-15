import React, { useState, useRef, } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput, Button, Keyboard, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function InitialScreen({ navigation: { navigate } }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const ageInput = useRef();
  const nextStep = () => {
    Keyboard.dismiss();
    navigate('Cor', { name, age });
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TextInput
        placeholder="Digite o seu nome"
        defaultValue={name}
        onChangeText={newText => setName(newText)}
        style={{ marginBottom: 20 }}
        returnKeyType="next"
        onSubmitEditing={() => ageInput.current.focus()}
      />
      <TextInput
        ref={ageInput}
        placeholder="Digite sua idade" 
        keyboardType="numeric" 
        defaultValue={age}
        onChangeText={newText => setAge(newText)}
        style={{ marginBottom: 20 }}
      />
      <Button onPress={nextStep} title="Continuar" />
      <StatusBar style="auto" />
    </View>
  );
}

function ColorScreen({ navigation: { navigate }, route: { params: { name, age } } }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Pressable onPress={() => navigate('Calendário', { name, age, color: 'blue' })}><View style={{ width: 90, height: 90, backgroundColor: 'blue' }} /></Pressable>
      <Pressable onPress={() => navigate('Calendário', { name, age, color: 'red' })}><View style={{ width: 90, height: 90, backgroundColor: 'red' }} /></Pressable>
      <Pressable onPress={() => navigate('Calendário', { name, age, color: 'yellow' })}><View style={{ width: 90, height: 90, backgroundColor: 'yellow' }} /></Pressable>
    </View>
  );
}

function CalendarScreen() {
  return (
    <View></View>
  )
}

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Informações">
        <Stack.Screen name="Informações" component={InitialScreen} />
        <Stack.Screen name="Cor" component={ColorScreen} />
        <Stack.Screen name="Calendário" component={CalendarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}