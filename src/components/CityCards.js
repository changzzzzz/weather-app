import React, { useEffect, useState } from "react";
import { fetchWeather } from "../services/weatherAPI";

function CityCards({ setSearchValue }) {
  const cityList = ["sydney", "shanghai", "new york", "london"];
  const [cityWeatherData, setCityWeatherData] = useState([]);
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

  return (
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
          {console.log(`${process.env.PUBLIC_URL}${currentWeather.city}.png`)}
          <img
            src={`${process.env.PUBLIC_URL}${currentWeather.city}.png`}
            // src={currentWeather.city + ".png"}
            alt={currentWeather.city}
            style={{
              width: "100%",
              objectFit: "contain",
              opacity: 0.2,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              rowGap: "0.25rem",
            }}
          >
            <img
              src={currentWeather.png}
              alt={`${currentWeather.city} weather`}
              style={{
                width: "4rem",
              }}
            />

            <div
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "white",
              }}
            >
              {currentWeather.city}
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                color: "white",
              }}
            >
              {currentWeather.temperature}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CityCards;
