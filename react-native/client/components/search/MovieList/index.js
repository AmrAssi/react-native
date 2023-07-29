import { useRouter } from "expo-router";
import React from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { COLORS } from "../../../constants";
import useFetch from "../../../hooks/useFetch";
import MovieItem from "./MovieItem";
import styles from "./movieList.style";

const MovieList = ({ searchTerm }) => {
  const router = useRouter();

  // get movies
  const { data, isLoading, error, refetch } = useFetch(
    `titles/search/keyword/${searchTerm?.toLowerCase()}`
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Search Results</Text>

      {/* movies list */}
      {isLoading ? (
        <ActivityIndicator size="large" color={COLORS.secondary} />
      ) : error ? (
        <Text style={styles.errorMsg}>Something wrong</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <MovieItem
              title={item?.originalTitleText?.text}
              poster={item?.primaryImage?.url}
              ratting="5.0"
              onPress={() => router.push(`movie-details/${item?.id}`)}
            />
          )}
          keyExtractor={(item) => item?._id}
          contentContainerStyle={{ columnGap: 10 }}
        />
      )}
    </View>
  );
};

export default MovieList;
