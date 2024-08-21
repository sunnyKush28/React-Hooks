import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import useWeather from '../../customHooks/useWeather';
import LoadingIcons from 'react-loading-icons';
const WeatherApp = () => {
  const [cityName, setCityName] = useState('indore');
  const [weatherData, error, loading] = useWeather({ cityName });
  console.log(weatherData);
  const errorRef = useRef(null);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setCityName(e.target.cityname.value);
      e.target.cityname.value = '';
    },
    [cityName]
  );

  const temperatureInFahrenheit = useMemo(() => {
    if (weatherData) {
      return (weatherData.main.temp * 9) / 5 + 32;
    }
    return null;
  }, [weatherData]);

  useEffect(() => {
    errorRef.current.style.border = '3px solid red';
    errorRef.current.style.backgroundColor = 'rgb(151, 60, 60)';
  }, [error]);

  useEffect(() => {
    errorRef.current.style.border = '';
    errorRef.current.style.backgroundColor = '';
  }, [weatherData]);

  return (
    <div className="col-md-5">
      <h1 className="text-center">WeatherApp</h1>
      <div className="row">
        <form onSubmit={handleSubmit} className="d-flex gap-3">
          <input
            type="text"
            className="form-control"
            placeholder="City Name"
            name="cityname"
            ref={errorRef}
          />
          <button className="btn btn-sm btn-danger">Submit</button>
        </form>
        <span className="text-danger">{error ? error : ''}</span>
      </div>
      <div className="row text-center my-3">
        {loading && (
          <span className="my-5">
            <LoadingIcons.Bars size={5} />
          </span>
        )}
        {weatherData && (
          <>
            <h3>Location: {weatherData.name}</h3>
            <h4>
              Temprature: {weatherData.main.temp} °C / {temperatureInFahrenheit}
              °F
            </h4>
            <h4>
              Humidity: {weatherData.main.humidity} g/m<sup>3</sup>
            </h4>
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
