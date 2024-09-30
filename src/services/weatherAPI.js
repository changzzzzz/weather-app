import fetch from "node-fetch";

function fetchWeather(city) {
  const API_KEY = "4f419656b9fc4152b6800040243009";
  const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=yes&alerts=yes`;
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("error");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}

// export default fetchWeather;
