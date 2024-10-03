import React, { useEffect, useState } from "react";
import { fetchWeather } from "../services/weatherAPI";

function CityCards({ setSearchValue }) {
  const cityList = ["sydney", "shanghai", "new york", "london"];
  const [cityWeatherData, setCityWeatherData] = useState(null);
  const cities = cityList.map((city) => city.trim());

  useEffect(() => {
    async function fetchCitiesWeather() {
      try {
        const weatherData = await Promise.all(
          cities.map((city) => fetchWeather(city))
        );
        setCityWeatherData(weatherData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }

    fetchCitiesWeather();
  }, []);

  useEffect(() => {
    if (cityWeatherData) {
      console.log("cityWeatherData", cityWeatherData);
      cityWeatherData.map((city) =>
        console.log("CityCards map", city.currentWeather)
      );
    }
  }, [cityWeatherData]);

  return (
    // <div style={{ display: "flex" }}>
    //   {cities.map((city) => (
    //     <div style={{ margin: "10px" }}>
    //       <h3>{city.name}</h3>
    //       <p>{city.temp}</p>
    //     </div>
    //   ))}
    // </div>

    <div
      style={{
        marginTop: "1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: "1rem",
      }}
    >
      {cityWeatherData.map(({ currentWeather }) => (
        <div
          key={currentWeather.city}
          style={{
            position: "relative",
            flex: 1,
            borderRadius: "1.5rem",
            background: currentWeather.gradientBg,
          }}
          onClick={() => {
            setSearchValue(currentWeather.city);
          }}
        >
          <div>
            <div>{currentWeather.city}</div>
            <div>{currentWeather.temperature}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CityCards;
