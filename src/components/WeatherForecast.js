import React from "react";

function WeatherForecast({ value }) {
  console.log("WeatherForecast", value);
  if (!Array.isArray(value)) {
    return <div>No data available</div>;
  }
  return (
    <div style={{ display: "flex" }}>
      {value.map((weather) => (
        <div key={weather.date}>
          <div>{weather.date}</div>
          <div>{weather.week}</div>
          <div>{weather.temperature}</div>
        </div>
      ))}
    </div>
  );
}

export default WeatherForecast;
