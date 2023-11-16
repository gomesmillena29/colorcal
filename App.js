import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TextInput, Button, Keyboard, Pressable, Text } from 'react-native';
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
        id="name-input"
        placeholder="Digite o seu nome"
        defaultValue={name}
        onChangeText={newText => setName(newText)}
        style={{ marginBottom: 30 }}
        returnKeyType="next"
        onSubmitEditing={() => ageInput.current.focus()}
      />
      <TextInput
        id="age-input"
        ref={ageInput}
        placeholder="Digite sua idade" 
        keyboardType="numbers-and-punctuation"
        defaultValue={age}
        onChangeText={newText => setAge(newText)}
        style={{ marginBottom: 30 }}
        returnKeyType="next"
        onSubmitEditing={nextStep}
      />
      <View id="info-btn"><Button onPress={nextStep} title="Continuar" /></View>
      <StatusBar style="auto" />
      </View> 
  );
}

function ColorScreen({ navigation: { navigate }, route: { params: { name, age } } }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Pressable id="blue-select-btn" onPress={() => navigate('Calendário', { name, age, color: 'blue' })}><View style={{ width: 90, height: 90, backgroundColor: 'blue' }} /></Pressable>
      <Pressable id="red-select-btn" onPress={() => navigate('Calendário', { name, age, color: 'red' })}><View style={{ width: 90, height: 90, backgroundColor: 'red' }} /></Pressable>
      <Pressable id="yellow-select-btn" onPress={() => navigate('Calendário', { name, age, color: 'yellow' })}><View style={{ width: 90, height: 90, backgroundColor: 'yellow' }} /></Pressable>
    </View>
  );
}

function CalendarScreen() {
  const currentDate = new Date();

  const daysOfWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  const monthsOfYear = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const month = monthsOfYear[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  const formattedDate = `Hoje é ${dayOfWeek}, ${month} ${day}, ${year}`;

  return (
    <View id="calendar-container"><Text>{formattedDate}</Text></View>
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