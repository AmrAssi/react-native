import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./categories.style";

const CategoryItem = ({ icon, title }) => {
  return (
    <TouchableOpacity style={styles.categoryContainer}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={18} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;
