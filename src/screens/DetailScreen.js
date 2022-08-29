import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import SectionComponent from '../components/SectionComponent';
import Colors from '../constants/Colors';

const DetailScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <HeaderComponent />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <SectionComponent title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </SectionComponent>
          <Button
            title="Go to Details... again"
            onPress={() => navigation.push('Details')}
          />
          <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
          />
          <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});
