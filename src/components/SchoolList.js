import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const SchoolList = ({ schools, onSelect }) => {
  return (
    <FlatList
      data={schools}
      keyExtractor={(item) => item.dbn}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => onSelect(item)}>
          <Text style={styles.title}>{item.school_name}</Text>
          <Text>{item.borough}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SchoolList;
