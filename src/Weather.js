import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [sCity, setCity] = useState(null);
  let [display, setDisplay] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleFunction(event) {
    event.preventDefault();
    // setDisplay(`It is °C in ${sCity}`);
    if (temperature) {
      return setDisplay(
        <ul>
          <li>Temperature: {temperature}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}% </li>
          <li>Wind: {wind}mph</li>
          <li>
            <img src={icon} alt={description} />
            {/* {`http://openweathermap.org/img/wn/${icon}@2x.png`} */}
            {/* <ReactAnimatedWeather
              icon="RAIN"
              color="goldenrod"
              size={50}
              animate={true}
            /> */}
          </li>
        </ul>

        // <p>
        //   {temperature}°C in {sCity}
        // </p>

        // return (
        //   <h1>
        //     The temperature in {sCity} is {Math.round(temperature)}°C{" "}
        //   </h1>
      );
    } else {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${sCity}&appid=7746bdeabca928cfedcad71e52fd9d66&units=metric`;
      axios.get(url).then(showTemperature);
      <p>Loading</p>;
    }
    // return setDisplay(
    //   <p>
    //     Hello {temperature} at {sCity}
    //   </p>
    // )
  }

  function captureCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <form onSubmit={handleFunction}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={captureCity}
        />
        <input type="submit" value="Search" />
      </form>
      <div className="displayTemperatures">{display}</div>
    </div>
  );
}
