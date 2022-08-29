import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import FavoritesScreen from '../screens/FavoritesScreen';
import MoviesScreen from '../screens/MoviesScreen';

const Tab = createBottomTabNavigator();
const MoviesTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Movies"
        component={MoviesScreen}
        // options={{headerShown: false}}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        // options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default MoviesTab;
