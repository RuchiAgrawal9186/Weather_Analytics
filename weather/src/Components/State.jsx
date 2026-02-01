import React from "react";

const State = ({ label, value }) => {
  return (
    <div className="text-center">
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
};

export default State;
