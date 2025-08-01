import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = () => {
    // Debugging: Check if the function is called
    console.log('Button pressed');
    
    // Check if passwords match
    if (newPassword === confirmPassword) {
      // Mock password reset
      console.log('Password reset for:', { email, newPassword });
      // Navigate back to the login screen or show a success message
      navigation.navigate('Login');
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://t3.ftcdn.net/jpg/01/15/99/56/360_F_115995657_RKhfaUiWm4L024V7owDclbCKxQBPIhIZ.jpg' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Forgot Password</Text>
        <TextInput
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholderTextColor="#ffffff"
        />
        <TextInput
          placeholder="New Password"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#ffffff"
        />
        <TextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#ffffff"
        />
        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Reset Password</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
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
    borderColor: '#ffffff',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: '#ffffff', 
  },
  button: {
    backgroundColor: '#ff69b4', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%', 
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff', 
    fontSize: 16,
    textAlign: 'center',
  },
});
