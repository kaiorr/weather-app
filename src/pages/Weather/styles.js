import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232634',
  },
  
  content: {
    alignItems:'center',
  },
  
  temperatureView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  temperatureText: {
    color: '#fff',
    fontSize: 50,
  },
  cardsView:{
    color:  'white',
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  localizationText:{
    fontFamily: 'Archivo_400Regular',
    fontSize: 18,
    color: '#fff',
  }, 

  info: {
    marginTop: 30,
    alignItems: 'center',
    borderRadius: 20,
    width: 350,
    height: 230,
    backgroundColor: '#8F8F8F',
    
  },
  infoText: {
    color: '#fff',
    margin: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
  addtionalInfo:{
    color: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }, 

  buttonsContainer: {
    flexDirection: 'row',
    marginTop:60,
    marginLeft:10,
    marginRight: 10,
    justifyContent: 'space-around',
  },

  button: {
    height: 50,
    width: '70%',
    borderRadius: 10,
    marginBottom:20,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonPrimary: {
    backgroundColor: '#8F8F8F',
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#fcfcfc',
    fontSize: 20,
  },
});

export default styles;