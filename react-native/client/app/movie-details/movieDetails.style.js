import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  backBtn: {
    position: "absolute",
    top: 40,
    left: 15,
    zIndex: 100,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 2,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  moviePoster: {
    width: width,
    height: height + 35,
  },
  contentContainer: {
    position: "absolute",
    left: 10,
    right: 10,
    bottom: 0,
  },
  runTimeContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  runTime: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    width: 166,
    borderRadius: 20,
  },
  runTimeText: {
    color: COLORS.white,
  },
  content: {
    height: 450,
    backgroundColor: "rgba(109, 109, 109, 0.9)",
    borderTopEndRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 15,
  },
  title: {
    textAlign: "center",
    color: COLORS.white,
    fontWeight: 600,
    fontSize: 26,
    marginBottom: 10,
  },
  description: {
    textAlign: "center",
    color: COLORS.white,
    fontSize: 17,
    lineHeight: 22,
  },
  genreContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  genre: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 500,
  },
  btnContainer: {
    marginTop: 50,
  },
});

export default styles;
