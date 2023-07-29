import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.darkSecondary,
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 50,
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "500",
  },
});

export default styles;
