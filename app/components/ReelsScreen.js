import { Video } from 'expo-av';
import React from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');


const mockReels = [
  { id: '1', title: 'Beautiful Girl', videoUrl: 'https://v.ftcdn.net/04/54/72/46/700_F_454724617_IjXEd56qtv7dq6UozGEw9P88Z0CQGtnO_ST.mp4' },
  { id: '2', title: 'Magnificent', videoUrl: 'https://v.ftcdn.net/03/98/48/19/700_F_398481925_MwSTqVyRMhsoWEcvTdkwXt5dAfv0ZFol_ST.mp4' },
  { id: '3', title: 'Sweet', videoUrl: 'https://v.ftcdn.net/02/81/13/10/700_F_281131060_NlJbgitFFF7DQuPw3YgVI4Z3IWCoRiae_ST.mp4' },
  { id: '4', title: 'Cute', videoUrl: 'https://v.ftcdn.net/03/23/81/92/700_F_323819281_GNH5XswEoZ8HVex0xF1OkAVneAcMB7iI_ST.mp4' },
];

export default function ReelsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={mockReels}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.reel}>
            <Video
              source={{ uri: item.videoUrl }}
              style={styles.video}
              useNativeControls
              resizeMode="contain"
              isLooping
            />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  reel: {
    marginBottom: 20,
  },
  video: {
    width: width - 20, 
    height: 300,
  },
  title: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});
