import { useEffect, useState } from 'react';
import './App.css';
const axios = require('axios');

function App() {
  
  const [weather, setWeather] = useState('');
  const [temperature, setTemperature] = useState('');
  const [highTemperature, setHighTemperature] = useState('');
  const [lowTemperature, setLowTemperature] = useState('');
  const [windSpeed, setWindSpeed] = useState('');
  const [humidity, setHumidity] = useState('');
  const [pressure, setPressure] = useState('');

  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=04eed66f7c3bee543e0e9076f5e075e5').then(res => {
      setWeather(res.data.weather[0].main)
      setTemperature(res.data.main.temp)
      setHighTemperature(res.data.main.temp_max)
      setLowTemperature(res.data.main.temp_min)
      setWindSpeed(res.data.wind.speed)
      setHumidity(res.data.main.humidity)
      setPressure(res.data.main.pressure)
    })
  }, [])

  return (
    <div className="App">
      <h1>Weather Details for Bangalore-India</h1>
      <p>Current weather description: {weather}</p>
      <p>Today's high temperature: {temperature}</p>
      <p>Today's low temperature: {highTemperature}</p>
      <p>Wind Speed: {lowTemperature}</p>
      <p>Humidity: {windSpeed}</p>
      <p>Pressure: {humidity}</p>
      <p>Pressure: {pressure}</p>
    </div>
  );
}

export default App;
