import React from "react";
import { TextInput } from "react-native";
import styles from "./textInput.style";

const TextInputCustom = ({ value, placeholder, onChange, type }) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={(text) => onChange(text)}
      textContentType={type}
      placeholderTextColor="#AAAAAA"
      style={styles.input}
    />
  );
};

export default TextInputCustom;
