const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE = "https://api.openweathermap.org/data/2.5";

export const fetchCurrentWeather = async (city, unit) => {
  const res = await fetch(
    `${BASE}/weather?q=${city}&units=${unit}&appid=${API_KEY}`,
  );
  return res.json();
};

export const fetchForecast = async (city, unit) => {
  const res = await fetch(
    `${BASE}/forecast?q=${city}&units=${unit}&appid=${API_KEY}`,
  );
  return res.json();
};
