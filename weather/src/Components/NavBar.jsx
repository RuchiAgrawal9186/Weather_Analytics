import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import UnitToggle from "./UnitToggle";

const NavBar = () => {
  return (
    <div>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow">
        <div className="max-w-7xl mx-auto px-2 py-3">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            {/* Left: Logo + Nav */}
            <div className="flex items-center gap-6">
              <NavLink to="/">
                <h1 className="text-2xl font-bold text-blue-600">
                  🌤 WeatherApp
                </h1>
              </NavLink>

              <nav className="flex gap-4 text-sm font-bold">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "text-gray-600"
                  }
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to="/favoriteCities"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "text-gray-600"
                  }
                >
                  ⭐ Favorites
                </NavLink>
              </nav>
            </div>

            {/* Right: Search + Toggle */}
            <div className="flex gap-3 flex-col sm:flex-row">
              <SearchBar />
              <UnitToggle />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
