// styles/appStyles.js
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    width: "90%",
    padding: 10,
    marginBottom: 20,
  },
  resultado: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: "bold",
    color: "blue",
  },
  button: {
    paddingBottom: "15",
    width:'35%',
  },
});
