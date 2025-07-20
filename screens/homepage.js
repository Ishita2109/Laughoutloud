import React, { useRef } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableWithoutFeedback, Animated, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { jokesData } from '../jokesData.js';

const numColumns = 2;
const { width } = Dimensions.get('window');
const ITEM_MARGIN = 14;
const ITEM_WIDTH = (width - ITEM_MARGIN * (numColumns + 1)) / numColumns;

// Soft pastel colors for each box
const boxColors = [
  '#F6F7FB', '#E3F6FC', '#F9F6E7', '#F6E7F9', '#E7F9F0',
  '#FDE7E7', '#E7F0FD', '#FDF6E7', '#E7FDF6', '#F6E7E7',
];

export default function Homepage() {
  const navigation = useNavigation();
  const scales = useRef(jokesData.map(() => new Animated.Value(1))).current;

  const handlePressIn = (index) => {
    Animated.spring(scales[index], {
      toValue: 0.97,
      useNativeDriver: true,
      speed: 30,
      bounciness: 6,
    }).start();
  };
  const handlePressOut = (index) => {
    Animated.spring(scales[index], {
      toValue: 1,
      useNativeDriver: true,
      speed: 30,
      bounciness: 6,
    }).start();
  };
  const handlePress = (item) => {
    navigation.navigate('JokesList', { category: item.category, jokes: item.jokes });
  };

  const renderItem = ({ item, index }) => (
    <TouchableWithoutFeedback
      onPressIn={() => handlePressIn(index)}
      onPressOut={() => handlePressOut(index)}
      onPress={() => handlePress(item)}
    >
      <Animated.View
        style={[
          styles.box,
          { backgroundColor: boxColors[index % boxColors.length], transform: [{ scale: scales[index] }] },
        ]}
      >
        <Text style={styles.categoryText}>{item.category}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Joke Categories</Text>
      <FlatList
        data={jokesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.category}
        numColumns={numColumns}
        contentContainerStyle={styles.grid}
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
  header: {
    fontSize: 28,
    fontWeight: '700',
    color: '#22223b',
    marginBottom: 24,
    alignSelf: 'center',
    letterSpacing: 0.5,
    opacity: 0.92,
  },
  grid: {
    paddingBottom: 24,
  },
  box: {
    borderRadius: 18,
    margin: ITEM_MARGIN / 2,
    width: ITEM_WIDTH,
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#22223b',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  categoryText: {
    fontSize: 19,
    fontWeight: '600',
    color: '#3A3A3A',
    textAlign: 'center',
    paddingHorizontal: 8,
    fontFamily: 'System',
    letterSpacing: 0.2,
    opacity: 0.95,
  },
});
