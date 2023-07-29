import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 22,
    gap: 10,
  },
  buttonContainer: {
    marginTop: 10,
  },
  warnText: {
    color: "#ddd",
    marginTop: 10,
    textAlign: "center",
  },
  goBackBtn: {
    color: "#ddd",
    textAlign: "center",
    fontWeight: 600,
    fontSize: 16,
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderStyle: "dotted",
    borderWidth: 2,
    borderColor: COLORS.dark,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 10,
  },
  profilePic: {
    width: 200,
    height: 200,
    borderStyle: "dotted",
    borderWidth: 2,
    borderColor: COLORS.dark,
    borderRadius: 100,
    alignSelf: "center",
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  imageText: {
    color: "#ddd",
  },
  errorMsg: {
    color: "red",
  },
});

export default styles;
