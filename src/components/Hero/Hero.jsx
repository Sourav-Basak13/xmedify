import React from "react";
import { StyledHeroSection } from "../../styles/StyledComponent/StyledHeroSection";
import doctor from "../../assest/NicePng_doctor-png.svg";
import { Box, Button, Stack, Typography } from "@mui/material";

function Hero() {
  return (
    <StyledHeroSection>
      <Stack className="left-pannel">
        <Typography variant="body1" className="hero-text">
          Skip the travel! Find Online{" "}
          <span className="hero-subtext">
            Medical <span className="hero-colored-subtext">Centers</span>
          </span>
        </Typography>
        <Typography variant="caption" className="hero-desc-text">
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor.
        </Typography>

        <Button variant="contained" className="hero-btn">
          Find Centers
        </Button>
      </Stack>
      <img className="right-pannel" src={doctor} alt="doctor" />
    </StyledHeroSection>
  );
}

export default Hero;
