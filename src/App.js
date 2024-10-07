import { useCallback, useEffect, useState } from "react";
import "./App.css";
import CityCards from "./components/CityCards";
import WeatherDetails from "./components/WeatherDetail";
import WeatherForecast from "./components/WeatherForecast";
import WeatherInfo from "./components/WeatherInfo";
import SearchBar from "./components/searchBar";
import { fetchWeather } from "./services/weatherAPI";
// "homepage": "https://changzzzzz.github.io/weather-app"
function App() {
  const [searchValue, setSearchValue] = useState("melbourne");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [futureWeatherList, setFutureWeatherList] = useState(null);

  const handleSearch = useCallback(async (query) => {
    if (!query) {
      return;
    }
    try {
      const { currentWeather, futureWeatherList } = await fetchWeather(query);
      setCurrentWeather(currentWeather);
      setFutureWeatherList(futureWeatherList); // 存储数据
      // console.log("currentWeather:", currentWeather);
      // console.log("futureWeatherList:", futureWeatherList);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  }, []);

  useEffect(() => {
    // console.log("input from search bar:", searchValue);
    handleSearch(searchValue);
    // console.log("input from search bar:", searchValue);
  }, [searchValue]);

  return (
    <div
      className="bg-container"
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        className="element container"
        style={{
          display: "flex",
          width: "70%",
          columnGap: "4rem",
          borderRadius: "2rem",
          backgroundColor: "rgb(243, 243, 243)",
          padding: "1.5rem",
        }}
      >
        {currentWeather && (
          <div
            className="left"
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              width: "360px",
              borderRadius: "2rem",
              padding: "1rem",
              background: currentWeather.gradientBg,
            }}
          >
            <img
              // src={currentWeather.bgPng}
              src={`./${currentWeather.bgPng}`}
              alt="Weather background"
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                width: "18rem",
              }}
            />
            <div
              style={{
                color: "white",
              }}
            >
              {currentWeather.date}
            </div>

            <WeatherInfo weather={currentWeather} />
            <WeatherDetails weather={currentWeather.vars} />
          </div>
        )}

        <div style={{ flex: 1 }}>
          <WeatherForecast value={futureWeatherList} />

          <CityCards setSearchValue={setSearchValue} />

          <SearchBar setSearchValue={setSearchValue} />
        </div>
      </div>
    </div>
  );
}

export default App;
