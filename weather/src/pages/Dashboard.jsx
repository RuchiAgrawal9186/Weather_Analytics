import React, { useEffect } from "react";

import CityCard from "../Components/CityCard";
import SearchBar from "../Components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import UnitToggle from "../Components/UnitToggle";
import { getWeather } from "../store/weather/weatherSlice";

const DEFAULT_CITIES = ["Dahod", "Delhi", "Mumbai", "Bangalore", "Vadodara"];
const Dashboard = () => {
  const dispatch = useDispatch();
  const unit = useSelector((s) => s.settings.unit);
  const cities = Object.keys(useSelector((s) => s.weather.data));

  useEffect(() => {
    if (cities.length === 0) {
      // First load → default cities
      DEFAULT_CITIES.forEach((city) => {
        dispatch(getWeather({ city, unit }));
      });
    } else {
      // Unit change → refetch all cities
      cities.forEach((city) => {
        dispatch(getWeather({ city, unit }));
      });
    }
  }, [unit]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 p-4 sm:p-6">
      {/* City Cards */}
      {cities.length === 0 ? (
        <div className="text-center text-gray-500 mt-20">
          <p className="text-lg">Search for a city to get started 🌍</p>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {cities?.map((city) => (
            <CityCard key={city} city={city} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
