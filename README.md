# 🌤 Weather Analytics Dashboard

A modern, responsive **Weather Analytics Dashboard** built with **React, Redux Toolkit, Vite, and Tailwind CSS**.  
The application provides real-time weather insights, forecasts, analytics, and interactive visualizations for multiple cities.

---

## 🚀 Features

### 🌦 Dashboard
- Displays **summary weather cards** for multiple cities
- Shows:
  - Current temperature
  - Weather condition with icons
  - Humidity, wind speed, pressure
- Default cities load on first visit
- Fully responsive (mobile, tablet, desktop)

---

### 🔍 Search & Autocomplete
- Search cities using **OpenWeather Geo API**
- API-based autocomplete suggestions
- Graceful handling of invalid / not-found cities

---

### ⭐ Favorites
- Add / remove favorite cities directly from city cards
- Dedicated **Favorites Page**
- Favorites persist using **localStorage**
- Favorite cities use the same card UI and navigation flow

---

### 📄 Detailed City View
When a user clicks on a city card, they are taken to a **dedicated details page** with:

- Current weather details:
  - Temperature
  - Pressure
  - Humidity
  - Wind speed
- **Hour-by-hour forecast**
- **5–7 day forecast**
- Clean, responsive layout
- Crash-proof UI with proper loading and error states

---

### 📊 Data Visualization
Interactive charts built using **Recharts**:
- Temperature trends (hourly & daily)
- Responsive charts for all screen sizes
- Tooltips for better data readability

---

### ⚙️ Settings
- Toggle between **Celsius (°C)** and **Fahrenheit (°F)**
- Weather data re-fetches automatically on unit change
- Unit preference stored in Redux

---

### 🛡 Error Handling & UX
- City-level error handling (e.g., "City not found")
- No app crashes due to partial or missing data
- Global **Error Boundary** for unexpected runtime errors
- Clear loading, error, and empty states

---

## 🧱 Tech Stack

| Technology | Usage |
|----------|------|
| **React** | UI development |
| **Redux Toolkit** | State management |
| **Vite** | Build tool |
| **Tailwind CSS** | Styling & responsiveness |
| **Recharts** | Charts & visualizations |
| **OpenWeather API** | Weather & forecast data |
| **React Router** | Page navigation |

---

## 🔐 Environment Variables

Create a `.env` file at the project root:

```env
VITE_WEATHER_API_KEY=your_openweather_api_key```

▶️ Getting Started

1️⃣ Clone the repository

git clone https://github.com/RuchiAgrawal9186/Weather_Analytics.git
cd weather

2️⃣ Install dependencies
npm install

3️⃣ Add environment variables
Create .env file and add your API key.

4️⃣ Run the project
npm run dev


