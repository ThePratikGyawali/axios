// src/components/Weather.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
        const city = 'Toronto'; // City for which to fetch the weather
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await axios.get(apiUrl);
        setWeather(response.data);
      } catch (error) {
        setError('Error fetching weather data');
      }
    };

    fetchWeather();
  }, []);

  if (error) return <div>{error}</div>;

  if (!weather) return <div>Loading...</div>;

  const temperature = weather.main.temp;
  const description = weather.weather[0].description;

  return (
    <div>
      <h2>Weather in {weather.name}</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Conditions: {description}</p>
    </div>
  );
};

export default Weather;
