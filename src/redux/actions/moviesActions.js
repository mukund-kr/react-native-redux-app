import axios from 'axios';
import {ADD_FAVORITE_ITEM, GET_MOVIES, REMOVE_FAVORITE_ITEM} from './types';
const API_URL = 'https://api.themoviedb.org/3/movie/popular';
const API_KEY = 'a8e502f4984fa5fbd7a299600ed18759';
const PARAMS = 'page=1';
const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;

export const getMovies = () => {
  return async dispatch => {
    const res = await axios.get(`${BASE_URL}`);
    if (res.data) {
      dispatch({
        type: GET_MOVIES,
        payload: res.data,
      });
    } else {
      console.log('Unable to fetch');
    }
  };
};

export const addFavorite = movie => dispatch => {
  dispatch({
    type: ADD_FAVORITE_ITEM,
    payload: movie,
  });
};

export const removeFavorite = movie => dispatch => {
  dispatch({
    type: REMOVE_FAVORITE_ITEM,
    payload: movie,
  });
};
