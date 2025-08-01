import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Text, ScrollView, TouchableOpacity } from 'react-native';


const mockComments = [
  { id: '1', text: 'Great photo!' },
  { id: '2', text: 'Beautiful view!' },
];

export default function PostScreen({ route }) {
  const { postId } = route.params;
  const [comments, setComments] = useState(mockComments);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    setComments([...comments, { id: (comments.length + 1).toString(), text: newComment }]);
    setNewComment('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: 'https://jonistravelling.com/wp-content/uploads/2016/05/iguazu-brazil.jpeg' }} style={styles.image} />
      <Text style={styles.title}>Post {postId}</Text>
      <TextInput
        placeholder="Add a comment..."
        value={newComment}
        onChangeText={setNewComment}
        style={styles.input}
      />
      <Button title="Add Comment" onPress={handleAddComment} />
      {comments.map(comment => (
        <View key={comment.id} style={styles.comment}>
          <Text>{comment.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  comment: {
    paddingVertical: 5,
  },
});
