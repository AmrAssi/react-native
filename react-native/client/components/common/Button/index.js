import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, icons } from "../../../constants";

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 15,
    borderRadius: 50,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: COLORS.primary,
    fontSize: 18,
    textAlign: "center",
    fontWeight: 600,
  },
});

const Button = ({ children, onPress, isLoading }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {isLoading ? (
        <Image
          source={icons.loading}
          resizeMode="contain"
          style={{ width: 23, height: 23, alignSelf: "center" }}
        />
      ) : (
        <Text style={styles.buttonText}>{children}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
