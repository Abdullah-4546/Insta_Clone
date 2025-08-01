import React from 'react';
import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';

const followers = [
  { id: '1', name: 'Usama' },
  { id: '2', name: 'Aliha' },
  { id: '3', name: 'Eman' },
  { id: '4', name: 'Ahmad' },
  { id: '5', name: 'Hassan' },
  { id: '6', name: 'Ali' },
];

export default function FollowingScreen() {
  return (
    <ImageBackground
      source={{ uri: 'https://w0.peakpx.com/wallpaper/293/690/HD-wallpaper-instagram-clean-colourfull-insta-instagram-colours-instagram-logo-minimal-minimalist-premium-thumbnail.jpg' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Following</Text>
        <FlatList
          data={followers}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.name}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    elevation: 1, 
  },
  itemText: {
    fontSize: 18,
  },
});
