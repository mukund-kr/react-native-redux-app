import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import theme from '../styles/theme.style';

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
  container: {
    flex: 1,
    paddingVertical: theme.CONTAINER_PADDING,
    alignItems: 'center',
  },
  textAreaTitle: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    alignSelf: 'flex-start',
    padding: 10,
  },
  textArea: {
    flex: 1,
    padding: theme.CONTAINER_PADDING,
    alignSelf: 'stretch',
    overflow: 'scroll',
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
});
