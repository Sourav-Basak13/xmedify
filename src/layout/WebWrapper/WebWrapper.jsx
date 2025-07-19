import React, { createContext, useState } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

export const BookingContext = createContext();

function WebWrapper() {
  const _bookings = useState([]);
  const _filteredBookings = useState([]);
  return (
    <BookingContext.Provider value={{ _bookings, _filteredBookings }}>
      <Header />
      <Outlet />
      <Footer />
    </BookingContext.Provider>
  );
}

export default WebWrapper;
