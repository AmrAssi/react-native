import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import IconAnt from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/Entypo";
import styles from "./movies.style";

const MovieItem = ({ poster, title, ratting, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.movieBtn}>
      <View style={styles.movieContainer}>
        <Image
          source={{
            uri: poster,
          }}
          resizeMode="contain"
          style={styles.movieImg}
        />
        <View style={styles.movieContent}>
          <IconAnt name="hearto" size={20} color="#fff" />
          <View style={styles.rattingContainer}>
            <Icon name="star" size={16} color="#FF9600" />
            <Text style={styles.ratting}>{ratting}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.movieTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MovieItem;
