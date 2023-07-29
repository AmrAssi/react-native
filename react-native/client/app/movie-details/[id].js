import { Stack, useRouter, useSearchParams } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import IconEn from "react-native-vector-icons/Entypo";
import Button from "../../components/common/Button";
import { COLORS } from "../../constants";
import useFetch from "../../hooks/useFetch";
import styles from "./movieDetails.style";

const MovieDetails = () => {
  const router = useRouter();
  const params = useSearchParams();

  const { data, isLoading, error, refetch } = useFetch(`titles/${params?.id}`);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        // refreshControl={
        //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        // }
      >
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => router.back()}
          >
            <Icon name="left" size={25} color="#fff" />
          </TouchableOpacity>
          <Image
            source={{
              uri: data?.primaryImage?.url,
            }}
            resizeMode="cover"
            style={styles.moviePoster}
          />

          {/* movie details */}
          <View style={styles.contentContainer}>
            {/* movie runtime */}
            <View style={styles.runTimeContainer}>
              <View style={styles.runTime}>
                <Text style={styles.runTimeText}>
                  {data?.releaseYear?.year}
                </Text>
                <Text style={styles.runTimeText}>-</Text>
                <Text style={styles.runTimeText}>1 h 47m</Text>
                <Text style={styles.runTimeText}>-</Text>
                <Text style={styles.runTimeText}>CC</Text>
                <Text style={styles.runTimeText}>-</Text>
                <Text style={styles.runTimeText}>4k</Text>
              </View>
            </View>

            {/* movie content */}
            <View style={styles.content}>
              <Text style={styles.title}>{data?.originalTitleText?.text}</Text>
              <Text style={styles.description}>
                The Witcher" is a popular fantasy series that originated from a
                series of novels by Polish author Andrzej Sapkowski. The
                franchise has expanded into various forms of media, including
                video games, a tabletop role-playing game, and a television
                series
              </Text>
              <View style={styles.genreContainer}>
                <Text style={styles.genre}>Drama</Text>
                <Text style={styles.genre}>-</Text>
                <Text style={styles.genre}>Sci-Fi</Text>
                <Text style={styles.genre}>-</Text>
                <IconEn name="star" size={18} color="#FF9600" />
                <Text style={styles.genre}>4.9</Text>
              </View>

              <View style={styles.btnContainer}>
                <Button>View Details</Button>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetails;
