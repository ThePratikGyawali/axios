// src/components/Weather.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiUrl = 'https://api.open-meteo.com/v1/forecast';
        const params = {
          latitude: 52.1304,
          longitude: 106.3468,
          current: 'temperature_2m',
          hourly: 'temperature_2m,relative_humidity_2m,rain',
        };

        const response = await axios.get(apiUrl, { params });
        setWeather(response.data);
      } catch (error) {
        setError('Error fetching weather data');
      }
    };

    fetchWeather();
  }, []);

  if (error) return <div>{error}</div>;

  if (!weather) return <div>Loading...</div>;

  const { current, hourly } = weather;
  const currentTemperature = current.temperature_2m;
  const hourlyData = hourly.temperature_2m.slice(0, 5); // Show only the first 5 hourly data points for simplicity

  return (
    <div>
      <h2>Weather Data</h2>
      <p>Current Temperature: {currentTemperature}°C</p>
      <h3>Hourly Temperature</h3>
      <ul>
        {hourlyData.map((temp, index) => (
          <li key={index}>Hour {index + 1}: {temp}°C</li>
        ))}
      </ul>
      <h3>Relative Humidity and Rain</h3>
      <ul>
        {hourly.relative_humidity_2m.slice(0, 5).map((humidity, index) => (
          <li key={index}>Hour {index + 1}: {humidity}% Humidity</li>
        ))}
        {hourly.rain.slice(0, 5).map((rain, index) => (
          <li key={index}>Hour {index + 1}: {rain} mm Rain</li>
        ))}
      </ul>
    </div>
  );
};

export default Weather;
