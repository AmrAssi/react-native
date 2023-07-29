import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 18,
  },
  categoryContainer: {
    backgroundColor: COLORS.secondary,
    width: width * 0.5 - 26,
    padding: 15,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  iconContainer: {
    width: 30,
    height: 30,
    backgroundColor: "#fff",
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 600,
  },
});

export default styles;
