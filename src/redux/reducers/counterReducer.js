import {DECREMENT_COUNT, INCREMENT_COUNT} from '../actions/types';

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        count: state.count + action.payload,
      };
    case DECREMENT_COUNT:
      return {
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};
export default counterReducer;
