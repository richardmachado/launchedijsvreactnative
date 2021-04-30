import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    alignItems: "center",
    marginLeft: 25,
    marginRight: 25,
    minHeight: 300,
  },
  info: {
    marginTop: 15,
    marginBottom: 15,
  },
  pickers: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 150,
  },
  bookpicker: {
    height: 50,
    width: 150,
    marginBottom: 20,
  },
  chapterpicker: {
    height: 50,
    width: 150,
    marginBottom: 30,
  },
  buttons: {
    marginBottom: 30,
  },
  headers: {
    textAlign: "center",
    fontSize: 32,
    marginBottom: 20,
  },
});
