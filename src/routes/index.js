import { createBrowserRouter } from "react-router";
import WebWrapper from "../layout/WebWrapper/WebWrapper";
import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import MyBookings from "../pages/MyBookings/MyBookings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: WebWrapper,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "search",
        Component: Search,
      },
      {
        path: "my-bookings",
        Component: MyBookings,
      },
    ],
  },
]);
