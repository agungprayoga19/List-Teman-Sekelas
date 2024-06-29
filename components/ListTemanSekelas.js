import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Image, FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

// Pastikan jalur relatif ke gambar benar
const profil1 = require('../assets/aldy.jpg');
const profil2 = require('../assets/haikal.jpg');
const profil3 = require('../assets/herdi.jpg');
const profil4 = require('../assets/agan.jpg');
const profil5 = require('../assets/candra.jpg');

const friends = [
  { id: '1', name: 'Aldy Ramadani', description: 'Teman Sekelas.', image: profil1, info: 'Sukalarang' },
  { id: '2', name: 'Haikal', description: 'Teman Sekelas.', image: profil2, info: 'Cirumput' },
  { id: '3', name: 'Herdi', description: 'Teman Sekelas.', image: profil3, info: 'Sukabumi' },
  { id: '4', name: 'Agan', description: 'Teman Sekelas.', image: profil4, info: 'Cirumput' },
  { id: '5', name: 'Candra kusuma', description: 'Teman Sekelas.', image: profil5, info: 'Kalapanunggal' },
  // Tambahkan teman lainnya di sini dengan jalur gambar yang diimpor dan info
];

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.friendItem} onPress={() => navigation.navigate('Details', { friend: item })}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  const { friend } = route.params;
  return (
    <View style={styles.container}>
      <Image source={friend.image} style={styles.detailImage} />
      <Text style={styles.name}>{friend.name}</Text>
      <Text style={styles.description}>{friend.description}</Text>
      <Text style={styles.info}>{friend.info}</Text>
      <Button title="Kembali" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 20,
  },
  detailImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    marginTop: 20,
  },
  info: {
    fontSize: 16,
    marginTop: 10,
    color: 'gray',
  },
});
