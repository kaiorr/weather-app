const getCurrentWeather = async (locationCoords) => {

    const axios = require('axios')
    const lat = locationCoords.latitude
    const log = locationCoords.longitude


    let results= []

    await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=03ba7697c21b560d21897536d8ed5407`)
        .then(function (response){

            const data = response.data  
            const locationName = (data.sys.country + ', ' + ' ' + data.name)
            const temperatureMin = data.main.temp_min
            const temperatureMax = data.main.temp_max
            const wind = data.wind.speed
            const humidity = data.main.humidity
            const currentTemperature = data.main.temp
            
            results = [currentTemperature, temperatureMin, temperatureMax, locationName, wind, humidity]
            
            
        })
        .catch(function (error) {
            console.log(error)
        })

    return results
  }

  export default getCurrentWeather;