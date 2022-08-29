import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

// Create a Redux store holding the state of your app.
import reducer from '../redux/reducers/index';

export const store = createStore(reducer, applyMiddleware(thunk));

// export const store = createStore(reducer);
