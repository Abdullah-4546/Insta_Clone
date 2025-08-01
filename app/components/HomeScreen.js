import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const mockPosts = [
  {
    id: '1',
    title: 'Beautiful Allah Creation',
    body: 'Enjoying the best place .',
    imageUrl: 'https://en.bcdn.biz/Images/2018/10/11/510c51ef-a08a-4075-802d-ebfbc5121733.jpg',
    likes: 10,
    comments: 2,
    saved: false,
  },
  {
    id: '2',
    title: 'Nature',
    body: 'Just had an amazing place!',
    imageUrl: 'https://shootexperience.com/wp-content/uploads/2022/04/Mount-Rainer-beautiful-natural-landmark-1024x683.jpg',
    likes: 20,
    comments: 5,
    saved: false,
  },
  {
    id: '3',
    title: 'sunset',
    body: 'Whow!',
    imageUrl: 'https://images.pexels.com/photos/1631678/pexels-photo-1631678.jpeg?cs=srgb&dl=pexels-abdghat-1631678.jpg&fm=jpg',
    likes: 20,
    comments: 5,
    saved: false,
  },
  {
    id: '2',
    title: 'sea',
    body: 'ocean!',
    imageUrl: 'https://thumbs.dreamstime.com/b/beach-sea-18378306.jpg',
    likes: 20,
    comments: 5,
    saved: false,
  },

];

export default function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, []);

  const handleLike = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleSave = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, saved: !post.saved } : post
    ));
  };

  const handleShare = (postId) => {
    // Implement share functionality here
    alert(`Share post with ID: ${postId}`);
  };

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  return (
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/free-vector/instagram-background-gradient-colors_23-2147835128.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724284800&semt=ais_hybrid' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.profileButtonText}>Go to Profile</Text>
        </TouchableOpacity>
        <FlatList
          data={posts}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.imageUrl }} style={styles.image} />
              <View style={styles.cardContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.body}>{item.body}</Text>
                <View style={styles.actions}>
                  <TouchableOpacity onPress={() => handleLike(item.id)} style={styles.actionButton}>
                    <Icon name="heart" size={25} color={item.saved ? 'red' : 'gray'} />
                    <Text style={styles.actionText}>Like ({item.likes})</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('Post', { postId: item.id })} style={styles.actionButton}>
                    <Icon name="comment" size={25} color="gray" />
                    <Text style={styles.actionText}>Comment ({item.comments})</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleSave(item.id)} style={styles.actionButton}>
                    <Icon name="bookmark" size={25} color={item.saved ? 'red' : 'gray'} />
                    <Text style={styles.actionText}>{item.saved ? 'Unsave' : 'Save'}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleShare(item.id)} style={styles.actionButton}>
                    <Icon name="share" size={25} color="gray" />
                    <Text style={styles.actionText}>Share</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.extraLinks}>
                <TouchableOpacity onPress={() => navigation.navigate('Stories')} style={styles.linkButton}>
                  <Text style={styles.linkText}>View Stories</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Reels')} style={styles.linkButton}>
                  <Text style={styles.linkText}>View Reels</Text>
                </TouchableOpacity>
              </View>
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
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slight white overlay for readability
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  profileButton: {
    backgroundColor: '#ff69b4', // Pink color
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 3, // Add shadow for elevation effect
  },
  profileButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3, // Add shadow for card effect
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  body: {
    fontSize: 16,
    marginBottom: 15,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    color: '#007bff',
    marginLeft: 5,
    fontSize: 16,
  },
  extraLinks: {
    marginTop: 10,
  },
  linkButton: {
    padding: 10,
    alignItems: 'center',
  },
  linkText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
