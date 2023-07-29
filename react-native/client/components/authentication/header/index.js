import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./header.style";

const Header = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Logo Here</Text>

      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={styles.tabBtn}
          onPress={() => setActiveTab("sign-in")}
        >
          <Text style={styles.tabText("sign-in", activeTab)}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabBtn}
          onPress={() => setActiveTab("sign-up")}
        >
          <Text style={styles.tabText("sign-up", activeTab)}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
