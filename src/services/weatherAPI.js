// import fetch from "node-fetch";
import dayjs from "dayjs";
export async function fetchWeather(city) {
  const API_KEY = "4f419656b9fc4152b6800040243009";
  const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=yes`;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Error fetching weather data");
    }
    const data = await response.json();

    const current = data.forecast.forecastday[0];

    const currentWeather = {
      date: dayjs().format("DD MMMM,  dddd HH:mm"),
      city: data.location.name,
      currentTemperature: `${current.hour[dayjs().hour()].temp_c}°`,
      temperature: `${current.day.mintemp_c} ~ ${current.day.maxtemp_c}°`,
      vars: {
        avgHumidity: `${current.day.avghumidity}`,
        windSpeed: `${current.day.maxwind_kph}km/h`,
        avgTemperature: `${current.day.avgtemp_c}°`,
        pm2_5: `${data.current.air_quality.pm2_5}μg/m³`,
      },
    };

    const futureWeatherList = data.forecast.forecastday.slice(1).map((i) => ({
      week: dayjs(i.hour[12].time).format("dddd"),
      date: dayjs(i.hour[12].time).format("DD MMMM"),
      temperature: `${i.day.mintemp_c} ~ ${i.day.maxtemp_c}°`,
    }));

    // console.log("weatherAPI currentWeather", currentWeather);
    // console.log("weatherAPI futureWeatherList", futureWeatherList);
    return { currentWeather, futureWeatherList }; // 返回 data 供调用者使用
  } catch (error) {
    console.error("Error in fetchWeather:", error);
    throw error;
  }
}
