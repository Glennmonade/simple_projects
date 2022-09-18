import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { WeatherInfo } from './WeatherElements';

const Weather = () => {
    let myCountry = "Philippines"
    const weatherApi = {
        key: "b0de541c0a73b396187da83bf4a56e33",
        baseUrl: "https://api.openweathermap.org/data/2.5/"
    };
    const fetchUrl = `${weatherApi.baseUrl}weather?q=${myCountry}&units=metric&APPID=${weatherApi.key}`;

    const [country, setCountry] = useState([]);
    const [weather, setWeather] = useState([]);
    const [temp, setTemp] = useState([]);


    useEffect(() => {
        const fetchData = () => {
        axios.get(fetchUrl)
        .then(response => {
            setWeather(response.data.weather[0].main);
            setCountry(response.data.name);
            setTemp(response.data.main.temp)
        })
    }
    fetchData();
    }, [fetchUrl]);

  return (
    <div>
        <WeatherInfo> {country} <br/> {weather} <br/> {temp}<sup>0</sup>C </WeatherInfo>
    </div>
  )
}

export default Weather