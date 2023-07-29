import AsyncStorage from "@react-native-community/async-storage";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Entypo";
import IconAwesome from "react-native-vector-icons/FontAwesome";
import { icons } from "../../../constants";
import styles from "./footer.style";

const Footer = () => {
  const [activeTab, setActiveTab] = useState("home");
  const router = useRouter();
  const [user, setUser] = useState({});

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

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => setActiveTab("home")}
      >
        <Icon name="home" size={30} style={styles.btnIcon(activeTab, "home")} />
        <Text style={styles.btnText(activeTab, "home")}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => setActiveTab("new")}
      >
        <IconAwesome
          name="file-movie-o"
          size={30}
          style={styles.btnIcon(activeTab, "new")}
        />
        <Text style={styles.btnText(activeTab, "new")}>New & Hot</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => setActiveTab("download")}
      >
        <IconAwesome
          name="download"
          size={30}
          style={styles.btnIcon(activeTab, "download")}
        />
        <Text style={styles.btnText(activeTab, "download")}>Downloads</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => {
          if (user?._id) {
            router.push("/account");
            setActiveTab("account");
          } else {
            router.push("authentication");
          }
        }}
      >
        {user?._id ? (
          <>
            <Image
              style={styles.profilePic}
              source={
                user?.profilePic?.split("/")[3] !== "undefined"
                  ? {
                      uri: `http://localhost:8000${user?.profilePic}`,
                    }
                  : icons.avatar
              }
            />
            <Text style={styles.btnText(activeTab, "account")}>
              {user?.firstName}
            </Text>
          </>
        ) : (
          <>
            <IconAwesome
              name="user-circle-o"
              size={30}
              style={styles.btnIcon(activeTab, "account")}
            />
            <Text style={styles.btnText(activeTab, "account")}>Account</Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
