export const getWeatherIcon = (condition) => {
  switch (condition) {
    case "Clear":
      return "☀️";
    case "Clouds":
      return "☁️";
    case "Rain":
      return "🌧️";
    case "Thunderstorm":
      return "⛈️";
    case "Snow":
      return "❄️";
    case "Mist":
    case "Haze":
    case "Fog":
      return "🌫️";
    default:
      return "🌤️";
  }
};
