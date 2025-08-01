import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={{ uri: 'https://androidwallpapers.com/store/arhn1.jpg' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/3586765/pexels-photo-3586765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} 
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome To Instagram!</Text>
        <LinearGradient
          colors={['#ff9a9e', '#fad0c4']} 
          style={styles.gradientBackground}
        >
          <Text style={styles.subtitle}>The best way to stay connected.</Text>
        </LinearGradient>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 25,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#ff69b4',
  },
  gradientBackground: {
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    textShadowColor: '#ff69b4',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  button: {
    backgroundColor: '#ff69b4',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});
