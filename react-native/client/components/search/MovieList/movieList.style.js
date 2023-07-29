import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../../constants";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 18,
  },
  heading: {
    color: COLORS.white,
    fontWeight: 600,
    fontSize: 20,
    marginBottom: 20,
  },
  movieBtn: {
    marginBottom: 20,
  },
  errorMsg: {
    color: "red",
    fontWeight: 500,
    fontSize: 16,
  },
  movieImg: {
    width: width * 0.9,
    height: 200,
    borderRadius: 20,
  },
  movieTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 10,
    marginTop: 20,
  },
  rattingContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  ratting: {
    color: COLORS.white,
    fontSize: 16,
  },
});

export default styles;
