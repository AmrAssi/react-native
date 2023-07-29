import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
  },
  logoText: {
    color: COLORS.white,
    fontSize: 34,
    marginTop: 50,
    fontWeight: 600,
  },
  menuContainer: {
    marginTop: 60,
    gap: 20,
  },
  menuText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 600,
  },
  userContainer: {
    marginTop: 100,
    paddingBottom: 10,
    borderStyle: "solid",
    // borderBottomColor: COLORS.dark,
    borderWidth: 1,
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
  },
  profilePic: {
    width: 40,
    height: 40,
  },
  userName: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 600,
  },
  userEmail: {
    color: COLORS.dark,
  },
  btnContainer: {
    padding: 5,
    paddingHorizontal: 15,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 20,
  },
  btnText: {
    color: COLORS.white,
    fontWeight: 500,
  },
});

export default styles;
