import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import styles from "./headerBtn.style";

const HeaderBtn = ({ icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={icon} size={20} color="#fff" />
    </TouchableOpacity>
  );
};

export default HeaderBtn;
