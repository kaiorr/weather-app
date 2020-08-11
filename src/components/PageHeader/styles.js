import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 28,
    backgroundColor: '#8F8F8F',
  },

  topBar: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
  },

  header: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between'
  },

  title: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    maxWidth: 170,
    marginVertical: 40,
  },
});

export default styles;