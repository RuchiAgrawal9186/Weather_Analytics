import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Dashboard from "../pages/Dashboard";
import CityDetails from "../pages/CityDetails";
import FavoritesPage from "../pages/FavoritesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/favoriteCities",
        element: <FavoritesPage />,
      },
      {
        path: "/city/:cityName",
        element: <CityDetails />,
      },
    ],
  },
]);
