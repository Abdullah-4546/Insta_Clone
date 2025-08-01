import { useState } from 'react';
import { Alert, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function MessagesScreen() {
 
  const [readMessages, setReadMessages] = useState({});

  
  const handleMessageClick = (id) => {
    setReadMessages((prevReadMessages) => ({
      ...prevReadMessages,
      [id]: true, 
    }));
  };

  const handleMessageRequest = () => {
    Alert.alert('Message Request', 'You have requested to send a message!');
  };

  const messages = [
    { id: '1', sender: 'Abdullah', message: 'Hi there! How are you?' },
    { id: '2', sender: 'Hassan', message: 'Let’s catch up soon!' },
    { id: '3', sender: 'Usama', message: 'Don’t forget the meeting tomorrow.' },
    { id: '4', sender: 'Hamd', message: 'Have a great day!' },
    { id: '5', sender: 'Aliha', message: 'Can we reschedule our call?' },
    { id: '6', sender: 'Eman', message: 'Looking forward to our project.' },
  ];

  return (
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/free-vector/instagram-background-gradient-colors_23-2147828668.jpg' }}
      style={styles.background}
    >
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Messages</Text>
        <Text style={styles.description}>Hi, we are Ayesha, Hajra, Arooj.</Text>

        {messages.map((msg) => (
          <TouchableOpacity
            key={msg.id}
            style={[styles.messageContainer, readMessages[msg.id] && styles.messageRead]}
            onPress={() => handleMessageClick(msg.id)}
          >
            <Text style={styles.sender}>{msg.sender}</Text>
            <Text style={styles.message}>{msg.message}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.button} onPress={handleMessageRequest}>
          <Text style={styles.buttonText}>Message Request</Text>
        </TouchableOpacity>
      </ScrollView>
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
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
  },
  messageContainer: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 1, 
  },
  messageRead: {
    backgroundColor: '#e0f7fa', 
  },
  sender: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  message: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#ff69b4', 
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'Darkpink',
    fontSize: 16,
  },
});
