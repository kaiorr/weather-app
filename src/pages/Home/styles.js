import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232634',
    justifyContent: 'center',
  },

  content: {
    flex:1,
    justifyContent: 'center',
},

  homeSun: {
    alignItems: 'center',
    marginTop: 30,
  },

  homeCloudRight: {
    justifyContent: 'flex-end',
  },

  homeCloudLeft: {
    alignItems: 'flex-end',
  },

  banner: {
    width: '100%',
    resizeMode: 'contain',
  },

  title: {
    fontFamily: 'Poppins_400Regular',
    color: '#fcfcfc',
    fontSize: 20,
    lineHeight: 20,
    marginTop: 250,
    paddingTop: 5,
    marginLeft:20,
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop:50,
    marginBottom: 50,
    marginLeft:10,
    marginRight: 10,
    justifyContent: 'space-around',
  },

  button: {
    height: 65,
    width: '70%',
    borderRadius: 10,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonPrimary: {
    backgroundColor: '#f8734b',
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#fcfcfc',
    fontSize: 24,
  },

});

export default styles;