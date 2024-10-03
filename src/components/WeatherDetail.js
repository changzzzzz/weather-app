import React from "react";

function WeatherDetails(weatherValue) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "1rem",
        background: "white",
        padding: "1.5rem",
      }}
    >
      <div>Humidity: {weatherValue.weather.avgHumidity}</div>
      <div>Temperature: {weatherValue.weather.avgTemperature}</div>
      <div>pm2.5: {weatherValue.weather.pm2_5}</div>
    </div>
  );
}
export default WeatherDetails;
