/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Provider} from 'react-redux';
import RootNavigator from './src/navigation/RootNavigator';
import {store} from './src/redux/store';

const App = () => {
  console.log(store.getState());
  return (
    <Provider store={store}>
      <RootNavigator />

      {/* <MyScreen /> */}
    </Provider>
  );
};

export default App;
