import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Header from "../../components/authentication/header";
import HeaderBtn from "../../components/common/headerBtn";
import Login from "../../components/login";
import Register from "../../components/register";
import { COLORS } from "../../constants";

const authentication = () => {
  const [activeTab, setActiveTab] = useState("sign-in");
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerShadowVisible: false,
          headerLeft: () => (
            <HeaderBtn icon="left" onPress={() => router.back()} />
          ),
          headerRight: () => <></>,
          headerTitle: "",
        }}
      />

      <ScrollView>
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* content */}
        {activeTab === "sign-in" && <Login />}
        {activeTab === "sign-up" && <Register setSignTab={setActiveTab} />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default authentication;
