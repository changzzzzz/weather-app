import React from "react";

function WeatherInfo(weatherValue) {
  console.log("WeatherInfo", weatherValue);
  return (
    <div>
      <div>{weatherValue.weather.city}</div>
      <div>
        <div>{weatherValue.weather.currentTemperature}</div>
        <div>{weatherValue.weather.temperature}</div>
      </div>
    </div>
  );
}

export default WeatherInfo;
