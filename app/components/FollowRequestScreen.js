import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FollowRequestScreen() {
  return (
    <View style={styles.container}>
      <Text>Follow Request Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
