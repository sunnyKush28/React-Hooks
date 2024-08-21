import React, { useEffect, useState } from 'react';
import { WEATHERAPI_KEY } from '../Constant';

const useWeather = ({ cityName }) => {
  const [weatherData, setWeatherData] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${WEATHERAPI_KEY}&units=metric`
      );
      const data = await res.json();
      if (data.cod == 200) {
        setWeatherData(data);
        setError('');
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to fetch weather data');
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [cityName]);

  useEffect(() => {
    if (weatherData) {
      console.log('Weather Data:', weatherData);
    }
  }, [weatherData]);

  useEffect(() => {
    if (error) {
      console.log('Error:', error);
    }
  }, [error]);

  return [weatherData, error, loading];
};

export default useWeather;
