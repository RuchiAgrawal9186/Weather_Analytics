import React from "react";
import { useSelector } from "react-redux";
import CityCard from "../Components/CityCard";

const FavoritesPage = () => {
  const favorites = useSelector((s) => s.favorites);
  const weatherData = useSelector((s) => s.weather.data);

  const favoriteCities = favorites.filter((city) => weatherData[city]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 p-4 sm:p-6">
      <h2 className="text-2xl font-bold mb-6">⭐ Favorite Cities</h2>

      {favoriteCities?.length === 0 ? (
        <p className="text-gray-600">No favorites added yet.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {favoriteCities?.map((city) => (
            <CityCard key={city} city={city} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
