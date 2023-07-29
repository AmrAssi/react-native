import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    paddingHorizontal: 22,
  },
  logo: {
    color: COLORS.white,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 26,
  },
  tabsContainer: {
    flexDirection: "row",
    gap: 20,
    marginTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.dark,
    borderStyle: "solid",
  },
  tabText: (tab, activeTab) => ({
    color: tab === activeTab ? COLORS.white : COLORS.dark,
    fontSize: 16,
    fontWeight: tab === activeTab ? "bold" : "regular",
    borderBottomColor: tab === activeTab ? COLORS.white : "transparent",
    borderBottomWidth: 2,
    borderStyle: "solid",
    paddingBottom: 12,
  }),
});

export default styles;
