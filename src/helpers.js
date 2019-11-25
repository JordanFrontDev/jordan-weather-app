const weatherIcon = {
    Thunderstorm: 'wi-thunderstorm',
    Drizzle: 'wi-sleet',
    Rain: 'wi-storm-showers',
    Snow: 'wi-snow',
    Atmosphere: 'wi-fog',
    Clear: 'wi-day-sunny',
    Clouds: 'wi-day-fog'
  }

export default getWeatherIcon = (rangeId) => {
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