import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 22,
    gap: 10,
  },
  buttonContainer: {
    marginTop: 15,
  },
  forgetText: {
    marginTop: 10,
    color: COLORS.white,
    textAlign: "center",
    fontSize: 18,
  },
  errorMsg: {
    color: "red",
  },
});

export default styles;
