import "./App.css";
import CityCards from "./components/CityCards";
import WeatherDetails from "./components/WeatherDetail";
import WeatherForecast from "./components/WeatherForecast";
import WeatherInfo from "./components/WeatherInfo";
import SearchBar from "./components/searchBar";

function App() {
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
            <SearchBar />
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
