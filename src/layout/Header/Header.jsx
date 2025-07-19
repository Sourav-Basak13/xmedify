import React, { useContext } from "react";
import { Box, Stack, Typography } from "@mui/material";
// import styles from "./Header.module.scss";
import NavBar from "../../components/NavBar/NavBar";
import { StyledHeader } from "../../styles/StyledComponent/StyledHeader";
import Hero from "../../components/Hero/Hero";
import HeroServices from "../../components/HeroServices/HeroServices";
import SearchHospital from "../../components/SearchHospital/SearchHospital";
import { useLocation } from "react-router";
import SearchBar from "../../components/SearchBar/SearchBar";
import { BookingContext } from "../WebWrapper/WebWrapper";
import { useEffect } from "react";

function Header() {
  const { pathname } = useLocation();
  const { _bookings, _filteredBookings } = useContext(BookingContext);

  useEffect(() => {
    const localBookings = localStorage.getItem("bookings") || "[]";
    _bookings[1](JSON.parse(localBookings));
  }, []);

  useEffect(() => {
    _filteredBookings[1](_bookings[0]);
  }, [_bookings[0]]);

  return (
    <StyledHeader>
      <Typography className="head-band">
        {" "}
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </Typography>
      <Box className="navbar-hero">
        <NavBar />
        {pathname !== "/" && (
          <Box className="extra-div">
            {pathname === "/my-bookings" && (
              <Typography
                component="h1"
                pb={1}
                fontSize={{ xs: 32, md: 40 }}
                fontWeight={700}
                color="#fff"
              >
                My Bookings
              </Typography>
            )}
          </Box>
        )}
        {pathname === "/" && <Hero />}

        <Stack justifyContent="center" alignItems="center">
          <Stack
            p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
            position="relative"
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
            sx={{
              width: "90%",
            }}
          >
            {pathname !== "/my-bookings" && <SearchHospital />}
            {pathname === "/" && <HeroServices />}
            {pathname === "/my-bookings" && <SearchBar />}
          </Stack>
        </Stack>
      </Box>
    </StyledHeader>
  );
}

export default Header;
