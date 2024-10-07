import React from "react";

function WeatherForecast({ value }) {
  // 如果 value 为空，则不进行渲染
  if (!value || value.length === 0) {
    return <div>No forecast data available</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      {value.map((weather) => (
        <div
          key={weather.date}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: "1",
            width: "0",
            rowGap: "0.5rem",
          }}
        >
          <div
            style={{
              fontSize: "1.8rem",
              fontWeight: 700,
            }}
          >
            {weather.week}
          </div>
          <div>{weather.date}</div>
          <img
            style={{
              width: "10rem",
            }}
            // src={weather.png}
            src={`.${weather.png}`}
            alt="Weather icon"
          />
          <div>{weather.temperature}</div>
        </div>
      ))}
    </div>
  );
}

export default WeatherForecast;
