import { Stack } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import IconAnt from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/FontAwesome";
import IconCons from "react-native-vector-icons/Ionicons";
import Footer from "../components/common/footer";
import Categories from "../components/home/categories";
import Movies from "../components/home/movies";
import PopularMovies from "../components/home/popularMovies";
import Search from "../components/home/search";
import { COLORS } from "../constants";

const styles = StyleSheet.create({
  headerTitle: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: 600,
  },
  iconContainer: {
    flexDirection: "row",
    gap: 10,
  },
});

const index = () => {
  const [searchOpt, setSearchOpt] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity>
              <Icon name="bars" size={24} color="#fff" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={() => setSearchOpt(!searchOpt)}>
                <IconAnt name="search1" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity>
                <IconCons
                  name="ios-notifications-sharp"
                  size={24}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => <Text style={styles.headerTitle}>Home</Text>,
          headerTitleAlign: "center",
        }}
      />
      <ScrollView>
        {/* search bar */}
        <Search searchOpt={searchOpt} />

        {/* show all categories */}
        <Categories />

        {/* show all popular movies */}
        <PopularMovies />

        {/* show all movies */}
        <Movies />
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

export default index;
