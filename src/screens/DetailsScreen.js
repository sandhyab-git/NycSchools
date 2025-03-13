import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { fetchSatScores } from '../api/fetchSchools';

const DetailsScreen = ({ route }) => {
  const { school } = route.params;
  const [satScores, setSatScores] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSatScores()
      .then((data) => {
        const schoolSat = data.find((item) => item.dbn === school.dbn);
        setSatScores(schoolSat);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [school]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{school.school_name}</Text>
      <Text>Location: {school.borough}</Text>
      <Text>Phone: {school.phone_number}</Text>
      <Text>Email: {school.school_email}</Text>
      <Text>Website: {school.website}</Text>

      <Text style={styles.section}>SAT Scores:</Text>
      {satScores ? (
        <>
          <Text>Math: {satScores.sat_math_avg_score}</Text>
          <Text>Reading: {satScores.sat_critical_reading_avg_score}</Text>
          <Text>Writing: {satScores.sat_writing_avg_score}</Text>
        </>
      ) : (
        <Text>No SAT scores available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  section: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default DetailsScreen;
