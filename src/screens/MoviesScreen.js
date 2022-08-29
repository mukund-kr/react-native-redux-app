import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, getMovies, removeFavorite} from '../redux/actions';

const MoviesScreen = () => {
  const {movies, favorites} = useSelector(state => state.moviesReducer);

  const dispatch = useDispatch();

  const fetchMovies = () => dispatch(getMovies());

  const addToFavorites = movie => dispatch(addFavorite(movie));
  const removeFromFavorites = movie => dispatch(removeFavorite(movie));

  useEffect(() => {
    fetchMovies();
  }, []);

  const exists = movie => {
    return favorites.filter(item => item.id === movie.id).length > 0
      ? true
      : false;
  };

  const handleAddFavorite = movie => {
    addToFavorites(movie);
  };
  const handleRemoveFavorite = movie => {
    removeFromFavorites(movie);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Popular Movies</Text>
      <View style={styles.listWrapper}>
        <FlatList
          data={movies}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            const IMAGE_URL =
              'https://image.tmdb.org/t/p/w185' + item.poster_path;
            return (
              <View style={styles.itemContainer}>
                <View style={styles.itemWrapper}>
                  <Image
                    source={{
                      uri: IMAGE_URL,
                    }}
                    resizeMode="cover"
                    style={styles.imageWrapper}
                  />
                  <View style={styles.titleWrapper}>
                    <View>
                      <Text style={styles.title}>{item.title}</Text>
                    </View>
                    {/* <View style={styles.thumbIcon}>
                      <MaterialIcons color="green" name="thumb-up" size={32} /> */}
                    <Text style={styles.voteCount}>{item.vote_count}</Text>
                    <TouchableOpacity
                      onPress={() =>
                        exists(item)
                          ? handleRemoveFavorite(item)
                          : handleAddFavorite(item)
                      }
                      activeOpacity={0.7}
                      style={styles.touchable}>
                      {/*
                        <MaterialIcons
                          color="orange"
                          size={32}
                          name="favorite-outline"
                        />
                        */}
                      <Text>fav</Text>
                    </TouchableOpacity>
                    {/* </View> */}
                  </View>
                </View>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, marginTop: 44, paddingHorizontal: 20},
  label: {fontSize: 22},
  listWrapper: {flex: 1, marginTop: 12},
  thumbIcon: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  titleWrapper: {flex: 1, marginLeft: 12},
  title: {fontSize: 22, paddingRight: 16},
  itemWrapper: {flexDirection: 'row', flex: 1},
  itemContainer: {marginVertical: 12},
  imageWrapper: {width: 100, height: 150, borderRadius: 10},
  voteCount: {
    fontSize: 18,
    paddingLeft: 10,
    color: '#64676D',
  },
  touchable: {
    marginLeft: 14,
    flexDirection: 'row',
    padding: 2,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
  },
});

export default MoviesScreen;
