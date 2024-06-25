import React, { useState, useEffect } from "react";

const Forecast = ({ data }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    if (data && data.list) {
      const filteredData = data.list.filter((item, index) => index % 8 === 3);
      setDailyData(filteredData.slice(0, 7));
    }
  }, [data]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-600 p-6 mt-2">
      <div className="text-center my-6">
        <h1 className="text-4xl font-bold text-white">Weather Forecast</h1>
      </div>
      <nav className="grid grid-cols-7 gap-4 text-center bg-gray-100 p-4 rounded-md shadow-md">
        <h3 className="font-semibold">Icon</h3>
        <h3 className="font-semibold">Description</h3>
        <h3 className="font-semibold">Temperature</h3>
        <h3 className="font-semibold">Feels like</h3>
        <h3 className="font-semibold">Wind</h3>
        <h3 className="font-semibold">Humidity</h3>
        <h3 className="font-semibold">Pressure</h3>
      </nav>
      {dailyData.map((day, index) => (
        <div
          key={index}
          className="grid grid-cols-8 gap-3 text-center p-4 bg-white rounded-md shadow-md mt-4"
        >
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt="Weather Icon"
            />
          </div>
          <div>{day.weather[0].description}</div>
          <div>{Math.round(day.main.temp)}°C</div>
          <div>{Math.round(day.main.feels_like)}°C</div>
          <div>{day.wind.speed} km/h</div>
          <div>{day.main.humidity}%</div>
          <div>{day.main.pressure} hPa</div>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
