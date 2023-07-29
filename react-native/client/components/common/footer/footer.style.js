import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    borderTopColor: "#999",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 28,
    backgroundColor: COLORS.primary,
  },
  btnContainer: {
    paddingVertical: 10,
  },
  btnIcon: (activeTab, item) => ({
    color: activeTab === item ? COLORS.secondary : "#ddd",
    textAlign: "center",
  }),
  btnText: (activeTab, item) => ({
    color: activeTab === item ? COLORS.secondary : "#ddd",
    fontWeight: 500,
    fontSize: 13,
    textAlign: "center",
  }),
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});

export default styles;
