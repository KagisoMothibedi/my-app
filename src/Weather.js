import React from "react";
import axios from "axios";
import { Audio, Rings } from "react-loader-spinner";

export default function Weather(props) {
  function showTemperature(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=7746bdeabca928cfedcad71e52fd9d66&units=metric`;
  axios.get(url).then(showTemperature);
  return (
    <Rings
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="rings-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}
