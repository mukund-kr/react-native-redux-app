import {DECREMENT_COUNT, INCREMENT_COUNT} from './types';

export const incrementCount = payload => {
  return {
    type: INCREMENT_COUNT,
    payload: payload,
  };
};

export const decrementCount = payload => {
  return {
    type: DECREMENT_COUNT,
    payload: payload,
  };
};
