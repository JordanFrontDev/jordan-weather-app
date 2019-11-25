import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import 'weather-icons/css/weather-icons.css';
import { useStyles } from './App.styles';
import MapContainer from './components/map/Map';

function App() {
  const [weather, setWeather] = useState();
  const [coords, setCoords] = useState();
  const [day, setDay] = useState();
  const classes = useStyles();

  //icons classes
  const weatherIcon = {
    Thunderstorm: 'wi-thunderstorm',
    Drizzle: 'wi-sleet',
    Rain: 'wi-storm-showers',
    Snow: 'wi-snow',
    Atmosphere: 'wi-fog',
    Clear: 'wi-day-sunny',
    Clouds: 'wi-day-fog'
  }

  //ask for user's location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        getWeather(latitude, longitude);
        setCoords({ latitude, longitude });
        getCurrentDate();
      },
      error => console.log("error", error)
    );
  }, [])


  //fetch weather api using user's coordenates and sets up weather state
  const getWeather = async (latitude, longitude) => {
    try {
      const res = await axios(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&cnt=15&&units=metric&APPID=dc4c8937d1450acabbe88fb75fccbd71`);
      setWeather({
        city: res.data.name,
        country: res.data.sys.country,
        temp: calInt(res.data.main.temp),
        minTemp: calInt(res.data.main.temp_min),
        maxTemp: calInt(res.data.main.temp_max),
        description: res.data.weather[0].description,
        icon: getWeatherIcon(res.data.weather[0].id)
      });
    } catch (e) {
      console.log(e)
    }

  }

  //Temperature to integer
  const calInt = (temp) => {
    let cell = Math.floor(temp);
    return cell;
  }

  //changes icon class based on API weather id
  const getWeatherIcon = (rangeId) => {
    switch (true) {
      case rangeId => 200 && rangeId <= 232:
        return weatherIcon.Thunderstorm

      case rangeId => 300 && rangeId <= 331:
        return weatherIcon.Drizzle;

      case rangeId => 500 && rangeId <= 531:
        return weatherIcon.Rain;

      case rangeId => 600 && rangeId <= 622:
        return weatherIcon.Snow;

      case rangeId => 701 && rangeId <= 781:
        return weatherIcon.Atmosphere;

      case rangeId === 800:
        return weatherIcon.Clear

      case rangeId => 801 && rangeId <= 804:
        return weatherIcon.Clouds;

      default:
        return weatherIcon.Clouds;
    }
  }

  //updates weather
  const onClick = () => {
    const { latitude, longitude } = coords;
    getWeather(latitude, longitude);
  }

  //Gets the current date
  const getCurrentDate = () => {
    let now = new Date()
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var dayLong = days[now.getDay()];
    let day = now.getDate();
    var month = months[now.getMonth()];

    setDay({ dayLong, day, month });
  }

  return (
    <div className={classes.weatherContainer}>
      {weather === undefined ? <h1>loading</h1> : (
        <div >
          <div className={classes.weatherBox}>
            <span>{`${day.dayLong}, ${day.day}`}<sup>st</sup> {day.month}</span>
            <h1>{weather.city}, {weather.country}</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className={classes.tempBox}>
                <span className={classes.temp}>{weather.temp}&deg;</span>
                <div className={classes.temps}>
                  <span className={classes.tempMax}>{weather.maxTemp}&deg;</span>
                  <span>{weather.minTemp}&deg;</span>
                </div>
              </div>
              <i className={`wi ${weather.icon}`} style={{ transform: 'scale(8', margin: '5rem' }} />
            </div>
            <h1>{weather.description}</h1>

            <button className={classes.button} onClick={onClick}>Update</button>
          </div>
          <MapContainer coords={coords} />
        </div>
      )}
    </div>
  );
}

export default App;
