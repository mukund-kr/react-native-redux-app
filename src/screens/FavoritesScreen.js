import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {removeFavorite} from '../redux/actions';
const FavoritesScreen = () => {
  const {favorites} = useSelector(state => state.moviesReducer);
  const dispatch = useDispatch();
  const removeFromFavorites = movie => dispatch(removeFavorite(movie));
  const handleRemoveFavorite = movie => {
    removeFromFavorites(movie);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Favorites</Text>
      <View style={styles.listWrapper}>
        {favorites.length === 0 ? (
          <Text style={styles.text}>Add a movie to the list.</Text>
        ) : (
          <FlatList
            data={favorites}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
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
                        <MaterialIcons color="green" name="thumb-up" size={32}/> */}
                      <Text style={styles.voteCount}>{item.vote_count}</Text>
                      <TouchableOpacity
                        onPress={() => handleRemoveFavorite(item)}
                        activeOpacity={0.7}
                        style={styles.touchable}>
                        {/*<MaterialIcons
                            color="orange"
                            size={32}
                            name="favorite"
                          />*/}
                      </TouchableOpacity>
                      {/* </View> */}
                    </View>
                  </View>
                </View>
              );
            }}
          />
        )}
      </View>
    </View>
  );
};
export default FavoritesScreen;
const styles = StyleSheet.create({
  container: {flex: 1, marginTop: 44, paddingHorizontal: 20},
  label: {fontSize: 22},
  text: {color: '#010101', fontSize: 18},
  listWrapper: {flex: 1, marginTop: 8},
  thumbIcon: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  titleWrapper: {flex: 1, marginLeft: 12},
  title: {fontSize: 22, paddingRight: 16},
  itemContainer: {marginVertical: 12},
  itemWrapper: {flexDirection: 'row', flex: 1},
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
