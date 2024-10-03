import { useCallback, useEffect, useState } from "react";
import "./App.css";
import CityCards from "./components/CityCards";
import WeatherDetails from "./components/WeatherDetail";
import WeatherForecast from "./components/WeatherForecast";
import WeatherInfo from "./components/WeatherInfo";
import SearchBar from "./components/searchBar";
import { fetchWeather } from "./services/weatherAPI";

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
    console.log("input from search bar:", searchValue);
    handleSearch(searchValue);
  }, [searchValue]);

  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex" }}>
          <div>
            <WeatherInfo weather={currentWeather} />

            <WeatherDetails weather={currentWeather.vars} />
          </div>
        </div>

        <div style={{ display: "flex", flexFlow: "column" }}>
          <div>
            <WeatherForecast value={futureWeatherList} />
          </div>
          <div>
            <CityCards setSearchValue={setSearchValue} />
          </div>
          <div>
            <SearchBar setSearchValue={setSearchValue} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
