import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

const mockUsers = [
  { id: '1', name: 'Abdullah' },
  { id: '2', name: 'Usama' },
];

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState(mockUsers);

  const handleSearch = (query) => {
    setSearchQuery(query);
   
    setResults(mockUsers.filter(user => user.name.toLowerCase().includes(query.toLowerCase())));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search users..."
        value={searchQuery}
        onChangeText={handleSearch}
        style={styles.input}
      />
      <FlatList
        data={results}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.result}>
            <Text>{item.name}</Text>
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  result: {
    paddingVertical: 10,
  },
});
