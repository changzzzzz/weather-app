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
      {/* <div>Humidity: {weatherValue.weather.avgHumidity}</div>
      <div>Temperature: {weatherValue.weather.avgTemperature}</div>
      <div>pm2.5: {weatherValue.weather.pm2_5}</div> */}
      {Object.entries(weatherValue.weather).map(([key, value]) => (
        <div
          key={key}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: "0.5rem",
            fontSize: "0.9rem",
          }}
        >
          <img src={`./${key}.svg`} alt={key} />
          {value}
        </div>
      ))}
    </div>
  );
}
export default WeatherDetails;
