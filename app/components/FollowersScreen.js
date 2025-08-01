
import React from 'react';
import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';

const mockFollowers = [
  { id: '1', name: 'Usama' },
  { id: '2', name: 'Ali' },
  { id: '3', name: 'Ahmad' },
  { id: '4', name: 'Hassan' },
  { id: '5', name: 'Ahmad jalal' },
  { id: '6', name: 'Abdullah' }, 
];

export default function FollowersScreen() {
  return (
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/free-vector/instagram-background-gradient-colors_23-2147828668.jpg' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Followers</Text>
        <FlatList
          data={mockFollowers}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.followerContainer}>
              <Text style={styles.follower}>{item.name}</Text>
            </View>
          )}
        />
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
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  followerContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2, 
  },
  follower: {
    fontSize: 18,
  },
});
