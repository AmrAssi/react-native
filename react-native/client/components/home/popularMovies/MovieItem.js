import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import styles from "./popularMovies.style";

const MovieItem = ({ poster, title, ratting, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.movieContainer}>
      <Image
        source={{ uri: poster }}
        resizeMode="contain"
        style={styles.movieImg}
      />
      <View style={styles.movieContent}>
        <Text style={styles.movieTitle}>{title}</Text>
        <View style={styles.rattingContainer}>
          <Icon name="star" size={16} color="#FF9600" />
          <Text style={styles.ratting}>{ratting}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieItem;
