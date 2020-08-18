import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 28,
    paddingLeft: 10,
    paddingBottom: 10,
    backgroundColor: '#8F8F8F',
  },

  topBar: {
    flexDirection: 'row',
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  topBarIcon: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
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