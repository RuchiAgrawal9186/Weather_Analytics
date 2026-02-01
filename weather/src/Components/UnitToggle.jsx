import React from "react";
import { toggleUnit } from "../store/settings/settingsSlice";
import { useDispatch, useSelector } from "react-redux";

const UnitToggle = () => {
  const dispatch = useDispatch();

  // Get current unit from Redux store
  const unit = useSelector((state) => state.settings.unit);
  return (
    <button
      onClick={() => dispatch(toggleUnit())}
      className="bg-blue-500 text-white px-4 py-2 rounded-lg"
    >
      {unit === "metric" ? "°C" : "°F"}
    </button>
  );
};

export default UnitToggle;
