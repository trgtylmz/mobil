import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function VehiclesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Vehicles Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 20},
});
