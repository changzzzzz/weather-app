import { useCallback, useEffect, useState } from "react";
import "./App.css";
import CityCards from "./components/CityCards";
import WeatherDetails from "./components/WeatherDetail";
import WeatherForecast from "./components/WeatherForecast";
import WeatherInfo from "./components/WeatherInfo";
import SearchBar from "./components/searchBar";
// import { fetchWeather } from "./services/weatherAPI";

function App() {
  const [searchValue, setSearchValue] = useState("melbourne");
  const [weatherValue, setWeatherValue] = useState(null);

  // const handleSearch = useCallback(async (query) => {
  //   if (!query) {
  //     return;
  //   }

  //   try {
  //     const currentWeather = await fetchWeatherData(query);
  //     setWeatherValue(currentWeather);
  //   } catch (error) {
  //     console.error("Error fetching weather data:", error);
  //   }
  // }, []);

  useEffect(() => {
    console.log("input from search bar:", searchValue);
    // handleSearch(searchValue);
  }, [searchValue]);

  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex" }}>
          <div>
            <WeatherDetails />
          </div>
          <div>
            <WeatherInfo />
          </div>
        </div>

        <div style={{ display: "flex", flexFlow: "column" }}>
          <div>
            <CityCards />
          </div>
          <div>
            <SearchBar setSearchValue={setSearchValue} />
          </div>
          <div>
            <WeatherForecast />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
