import React, {useState, useEffect} from 'react';
import {Text, View } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import * as Location from 'expo-location';
import getCurrentWeather from  '../../services/api';
import { Feather } from '@expo/vector-icons';
import Card from '../../components/Card';
import { RectButton } from 'react-native-gesture-handler';

const Weather = () => {
  const axios = require('axios')

  const [currentTemperature, setCurrentTemperature] = useState('20°')
  const [locationCoords, setLocationCoords] = useState(null);
  const [locationName, setLocationName] = useState('BR, Cidade')
  const [temperatureMin, setTemperatureMin] = useState('20')
  const [temperatureMax, setTemperatureMax] = useState('25')
  const [wind, setWind] = useState('7')
  const [currentDate, setCurrentDate] = useState('00:00')
  const [humidity, setHumidity] = useState('58')


    async function getLocation(){
      let { status } = await Location.requestPermissionsAsync()
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied')
        }else{
          let location = await Location.getCurrentPositionAsync({})
          setLocationCoords(location.coords)
        }
    }
  
    async function setCurrentWeather(){
      await getLocation()


        const date = new Date()

        setCurrentDate(date.getHours() + ':' + date.getMinutes())

        


      const data = await getCurrentWeather(locationCoords)

  
      setCurrentTemperature(convertKelvinToC(data[0]))
      setTemperatureMin(convertKelvinToC(data[1]))
      setTemperatureMax(convertKelvinToC(data[2]))
      setLocationName(data[3])
      setWind(data[4])
      setHumidity(data[5])
      
    }
  
    function convertKelvinToC(kelvin){
      return parseInt(kelvin - 273)
    }
  
    useEffect(() => {
      setCurrentWeather()
    }, [])

    return (
        
        <View style={styles.container}>

          <PageHeader />

          <View style={styles.content}>
            <Feather style={{marginTop: 30}} name="sun" size={60} color="orange" />

            <View style={styles.temperatureView}>
              <Text style={styles.temperatureText}>{currentTemperature}</Text>
              <Text style={[styles.temperatureText, {fontSize: 20}]}>°C</Text>
            </View>

            <Text style={styles.localizationText}>{locationName}, {currentDate}</Text>

            <View style={styles.info}>
              <View style={styles.addtionalInfo}>
                <Card title={'Vento'} variable={wind} ></Card>
                <Card title={'Umidade'} variable={humidity} ></Card>
                <Card title={'Temp. Min'} variable={temperatureMin} ></Card>
                <Card title={'Temp. Max'} variable={temperatureMax} ></Card>
              </View>
            </View>

            <View style={styles.buttonsContainer} >
              <RectButton style={[styles.button, styles.buttonPrimary]} onPress={() => setCurrentWeather()}>
                <Text style={styles.buttonText}>Buscar Previsão</Text>
              </RectButton>
            </View>

          </View>

        </View>
    );
}

export default Weather;