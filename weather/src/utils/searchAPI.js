const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
console.log(API_KEY,"API KEY")
export const searchCityAPI = async (query) => {
  const res = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`,
  );
  return res.json();
};
