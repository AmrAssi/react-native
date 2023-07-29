import React from "react";
import { View } from "react-native";
import CategoryItem from "./CategoryItem";
import styles from "./categories.style";

const Categories = () => {
  return (
    <>
      <View style={styles.container}>
        <CategoryItem icon="gamepad" title="Games" />
        <CategoryItem icon="film" title="Movies" />
      </View>
      <View style={styles.container}>
        <CategoryItem icon="music" title="Music" />
        <CategoryItem icon="book" title="Books" />
      </View>
    </>
  );
};

export default Categories;
