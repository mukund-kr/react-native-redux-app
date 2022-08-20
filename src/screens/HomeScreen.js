import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.homeWrapper}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  homeWrapper: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
