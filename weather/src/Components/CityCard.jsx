import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getWeatherIcon } from "../utils/weatherIcon";
import { addFavorite, removeFavorite } from "../store/favorites/favoritesSlice";

const CityCard = ({ city }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const current = useSelector((s) => s.weather.data[city]?.current);
  const favorites = useSelector((s) => s.favorites);

  if (
    !current ||
    !current.main ||
    !current.weather ||
    current.weather.length === 0
  ) {
    return null;
  }

  const isFavorite = favorites.includes(city);
  const condition = current.weather[0]?.main || "Clear";
  const icon = getWeatherIcon(condition);
  return (
    <div
      onClick={() => navigate(`/city/${city}`)}
      className="
        relative bg-white/80 backdrop-blur-md
        rounded-2xl p-5 shadow-lg
        cursor-pointer
        transition transform hover:-translate-y-2 hover:shadow-2xl
      "
    >
      {/* ⭐ Favorite Button */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // ❗ prevents navigation
          dispatch(isFavorite ? removeFavorite(city) : addFavorite(city));
        }}
        className="absolute top-1 right-2 text-2xl"
        title="Add to favorites"
      >
        {isFavorite ? "⭐" : "☆"}
      </button>

      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{city}</h2>
        <span className="text-6xl">{icon}</span>
      </div>

      {/* Temp */}
      <div className="mt-4">
        <p className="text-5xl font-bold">{Math.round(current.main.temp)}°</p>
        <p className="text-gray-600 capitalize">
          {current.weather[0].description}
        </p>
      </div>

      {/* Divider */}
      <div className="border-t my-4" />

      {/* Bottom Stats */}
      <div className="grid grid-cols-3 text-center text-sm">
        <div>
          <p className="font-medium">Humidity</p>
          <p>{current.main.humidity}%</p>
        </div>
        <div>
          <p className="font-medium">Wind</p>
          <p>{current.wind.speed} m/s</p>
        </div>
        <div>
          <p className="font-medium">Pressure</p>
          <p>{current.main.pressure}</p>
        </div>
      </div>
    </div>
  );
};

export default CityCard;
