import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearResults, searchCities } from "../store/search/searchSlice";
import { getWeather } from "../store/weather/weatherSlice";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const results = useSelector((s) => s.search.results);
  const unit = useSelector((s) => s.settings.unit);

  useEffect(() => {
    if (!query) {
      dispatch(clearResults());
      return;
    }

    const timer = setTimeout(() => {
      dispatch(searchCities(query));
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="relative w-full">
      <input
        className="
    w-full sm:w-64
    border rounded-lg p-2
    focus:outline-none focus:ring-2 focus:ring-blue-400
  "
        placeholder="Search city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {results.length > 0 && (
        <ul className="absolute bg-white shadow w-full rounded mt-1">
          {results.map((c, i) => (
            <li
              key={i}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                dispatch(getWeather({ city: c.name, unit }));
                dispatch(clearResults());
                setQuery("");
              }}
            >
              {c.name}, {c.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
