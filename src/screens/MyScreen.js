import React from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {incrementCount} from '../redux/actions/index';

const MyScreen = () => {
  const count = useSelector(state => state.counterReducer.count);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(incrementCount(3));
  };

  return (
    <View>
      <Text>My Count is {count}</Text>
      <Button title="add" onPress={increment} />
    </View>
  );
};

export default MyScreen;
