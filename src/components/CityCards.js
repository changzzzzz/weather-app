import React from "react";

const cities = [
  {
    name: "Sydney",
    temp: "22",
  },
  {
    name: "Sydney",
    temp: "22",
  },
  {
    name: "Sydney",
    temp: "22",
  },
  {
    name: "Sydney",
    temp: "22",
  },
];
function CityCards() {
  return (
    <div style={{ display: "flex" }}>
      {cities.map((city) => (
        <div style={{ margin: "10px" }}>
          <h3>{city.name}</h3>
          <p>{city.temp}</p>
        </div>
      ))}
    </div>
  );
}

export default CityCards;
