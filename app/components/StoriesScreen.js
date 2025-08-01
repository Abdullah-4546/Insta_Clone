import { FlatList, Image, StyleSheet, Text, View } from 'react-native';


const mockStories = [
  { id: '1', username: 'Eman', imageUrl: 'https://images.unsplash.com/photo-1444011283387-7b0f76371f12?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmxzJTIwaW4lMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D' },
  { id: '2', username: 'Aliha', imageUrl: 'https://plus.unsplash.com/premium_photo-1661405843619-6dbc76860e18?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

export default function StoriesScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={mockStories}
        horizontal
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.story}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text>{item.username}</Text>
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
  story: {
    alignItems: 'center',
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
