import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: COLORS.primary,
    paddingVertical: 20,
  },
  searchBar: {
    marginHorizontal: 20,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
  },
  searchBtn: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
});

export default styles;
