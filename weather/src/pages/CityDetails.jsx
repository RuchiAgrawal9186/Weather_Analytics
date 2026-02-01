import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import WeatherChart from "../Components/WeatherChart";

import State from "../Components/State";

const CityDetails = () => {
  const { cityName } = useParams();

  const cityData = useSelector((s) => s.weather.data[cityName]);
  const current = cityData.current;

  const temp = Math.round(current.main.temp);
  const pressure = current.main.pressure;
  const humidity = current.main.humidity;
  const wind = current.wind.speed;
  const condition = current.weather[0].main;

  if (!cityData) {
    return <p className="p-6">No data found</p>;
  }

  const forecast = cityData.forecast.list;

  // Hourly (next 24 hrs)
  const hourlyData = forecast.slice(0, 8).map((i) => ({
    // time: i.dt_txt.split(" ")[1],
    time: new Date(i.dt_txt).toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    }),
    temp: i.main.temp,
    rain: i.rain?.["3h"] || 0,
    wind: i.wind.speed,
  }));

  // Daily (5 days)
  const dailyData = forecast
    .filter((i) => i.dt_txt.includes("12:00:00"))
    .map((i) => ({
      date: i.dt_txt.split(" ")[0],
      temp: i.main.temp,
      rain: i.rain?.["3h"] || 0,
      wind: i.wind.speed,
    }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">
          {cityName} Weather Details
        </h1>
      </div>

      {/* Current Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 bg-white rounded-xl p-4 shadow mb-8">
        <State label="Temp" value={`${temp}°`} />
        <State label="Pressure" value={`${pressure} hPa`} />
        <State label="Humidity" value={`${humidity}%`} />
        <State label="Wind" value={`${wind} m/s`} />
        <State label="Condition" value={condition} />
      </div>

      {/* {5-7 days forecast} */}

      <h2 className="text-lg font-semibold mb-2 mt-8">5 Day Forecast</h2>

      <div className="mb-6">
        <div
          className="
      grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3
      overflow-x-auto
    "
        >
          {dailyData?.map((d, i) => (
            <div
              key={i}
              className="
          bg-white p-4 rounded-lg text-center shadow
          min-w-[110px]
        "
            >
              <p className="text-sm text-gray-500">
                {new Date(d.date).toLocaleDateString("en-IN", {
                  weekday: "short",
                })}
              </p>
              <p className="font-semibold text-lg">{Math.round(d.temp)}°</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hourly Forecast */}
      <h2 className="text-lg font-semibold mb-2">Hourly Forecast</h2>

      <div className="mb-6">
        <div
          className="
      grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3
      sm:overflow-visible
      overflow-x-auto
    "
        >
          {hourlyData?.map((h, i) => (
            <div
              key={i}
              className="
          bg-white p-3 rounded-lg text-center shadow
          min-w-[90px]
        "
            >
              <p className="text-sm text-gray-500">{h.time}</p>
              <p className="font-bold text-lg">{Math.round(h.temp)}°</p>
            </div>
          ))}
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Hourly Temperature</h3>
          <WeatherChart data={hourlyData} type={"hour"} />
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2">5-Day Temperature</h3>
          <WeatherChart data={dailyData} type={"day"} />
        </div>
      </div>
    </div>
  );
};

export default CityDetails;
