import React from "react";

const weather = {
  city: "Sydney",
  temp: "22",
  tempRange: "15~",
};
function WeatherDetails() {
  return (
    <div>
      <div>{weather.city}</div>
      <div>{weather.temp}</div>
      <div>{weather.tempRange}</div>
    </div>
  );
}
export default WeatherDetails;
