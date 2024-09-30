import React from "react";
const futureWeather = [
  {
    week: "Monday",
    date: "22 September",
    temp: "22",
  },
  {
    week: "Tuesday",
    date: "23 September",
    temp: "25",
  },
  {
    week: "Wednesday",
    date: "24 September",
    temp: "21",
  },
  {
    week: "Thursday",
    date: "25 September",
    temp: "22",
  },
];

function WeatherForecast() {
  return (
    <div style={{ display: "flex" }}>
      {futureWeather.map((weather) => (
        <div style={{ margin: "10px" }}>
          <h3>{weather.week}</h3>
          <p>{weather.date}</p>
          <p>{weather.temp}</p>
        </div>
      ))}
    </div>
  );
}

export default WeatherForecast;
