import AsyncStorage from "@react-native-community/async-storage";
import { Stack, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Footer from "../../components/common/footer";
import { COLORS, icons } from "../../constants";
import styles from "./account.style";

const account = () => {
  const [user, setUser] = useState({});

  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await AsyncStorage.getItem("@MyApp:user");
        if (data !== null) {
          setUser(JSON.parse(data));
        }
      } catch (err) {
        console.log("err", err);
      }
    };

    getUser();
  }, []);

  // logout
  const logout = async () => {
    try {
      await AsyncStorage.removeItem("@MyApp:user");
      console.log("Data removed successfully!");
      router.push("/");
    } catch (error) {
      console.log("Error removing data:", error);
    }
  };
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
          <Text style={styles.logoText}>Logo Here</Text>

          <View style={styles.menuContainer}>
            <TouchableOpacity>
              <Text style={styles.menuText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.menuText}>New & Hot</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.menuText}>Popular</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.menuText}>Downloads</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.menuText}>Stats</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.menuText}>Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.menuText}>Go Live</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.menuText}>History</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.menuText}>Settings</Text>
            </TouchableOpacity>
          </View>

          {/* user info */}
          <View style={styles.userContainer}>
            <Image style={styles.profilePic} source={icons.avatar} />
            <View style={styles.userInfoContainer}>
              <Text
                style={styles.userName}
              >{`${user?.firstName} ${user?.lastName}`}</Text>
              <Text style={styles.userEmail}>{user?.email}</Text>
            </View>
            <TouchableOpacity style={styles.btnContainer} onPress={logout}>
              <Text style={styles.btnText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Footer />
    </SafeAreaView>
  );
};

export default account;
