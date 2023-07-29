import { useRouter } from "expo-router";
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import styles from "./search.style";

const Search = ({ searchOpt }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  return (
    <View
      style={{
        ...styles.container,
        top: searchOpt ? 0 : -200,
      }}
    >
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search for everything..."
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => router.push(`search/${searchTerm}`)}
        >
          <Icon name="search1" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;
