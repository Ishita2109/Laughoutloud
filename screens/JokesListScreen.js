import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function JokesListScreen({ route, navigation }) {
  const { category, jokes } = route.params;

  const renderItem = ({ item, index }) => (
    <View style={styles.jokeCard}>
      <Text style={styles.jokeText}>{index + 1}. {item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backText}>{'←'}</Text>
        </TouchableOpacity>
        <Text style={styles.header}>{category} Jokes</Text>
      </View>
      <FlatList
        data={jokes}
        renderItem={renderItem}
        keyExtractor={(_, idx) => idx.toString()}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingTop: 40,
    paddingHorizontal: 12,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  backBtn: {
    marginRight: 12,
    padding: 6,
    borderRadius: 8,
    backgroundColor: '#E3F6FC',
  },
  backText: {
    fontSize: 22,
    color: '#22223b',
    fontWeight: '700',
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#22223b',
    letterSpacing: 0.5,
    opacity: 0.92,
  },
  list: {
    paddingBottom: 24,
  },
  jokeCard: {
    backgroundColor: '#F6F7FB',
    borderRadius: 14,
    marginBottom: 14,
    padding: 16,
    shadowColor: '#22223b',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  jokeText: {
    fontSize: 17,
    color: '#3A3A3A',
    fontFamily: 'System',
    letterSpacing: 0.2,
    opacity: 0.95,
  },
}); 