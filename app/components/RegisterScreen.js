import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
   
    console.log('Registered:', { email, password });
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/free-vector/instagram-background-gradient-colors_23-2147828668.jpg' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholderTextColor="#fff"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#fff"
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    borderRadius: 10,
    margin: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: '#ffffff', 
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center', 
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
    backgroundColor: 'pink', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});
