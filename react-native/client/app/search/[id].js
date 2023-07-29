import { Stack, useRouter, useSearchParams } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import HeaderBtn from "../../components/common/headerBtn";
import MovieList from "../../components/search/MovieList";
import { COLORS } from "../../constants";

const search = () => {
  const router = useRouter();
  const params = useSearchParams();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      {/* header */}
      <View
        style={{
          marginTop: 30,
          paddingHorizontal: 22,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <HeaderBtn icon="left" onPress={() => router.back()} />
        <Text style={{ color: "#fff", fontWeight: 500, fontSize: 16 }}>
          {params?.id}
        </Text>
        <Text style={{ color: "#fff" }}></Text>
      </View>

      <ScrollView>
        <MovieList searchTerm={params?.id} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default search;
