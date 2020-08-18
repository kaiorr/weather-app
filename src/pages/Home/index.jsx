import React from 'react';
import styles from './styles';
import {View, Text, ImageBackground} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import bg from '../../assets/images/bg.png';
import {useNavigation} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';

const Home = () => {
  const {navigate} = useNavigation();

  function handleNavigateToWeather() {
    navigate('Weather')
  }

  return (
    <View style={styles.container}>
      <ImageBackground resizeMode="contain" source={bg} style={styles.content} >

      <View style={styles.homeSun}>
        <FontAwesome name="sun-o" size={120} color="#f8734b" />
      </View>

      <Text style={styles.title}>
          Seja bem-vindo(a), ao Weatherapp {'\n'}
          <Text style={styles.titleBold}>O clima na palma da sua mão</Text>
      </Text>

      <View style={styles.buttonsContainer} >
        <RectButton 
          style={[styles.button, styles.buttonPrimary]} 
          onPress={handleNavigateToWeather}
        >

          <Text style={styles.buttonText}>Acessar</Text>
        </RectButton>

      </View>


    </ImageBackground>
  </View>
  );
};

export default Home;
