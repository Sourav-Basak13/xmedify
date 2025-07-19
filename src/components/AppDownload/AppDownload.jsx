import React from "react";
import { AppDownloadWrapper } from "../../styles/StyledComponent/AppDownloadWrapper";
import {
  Button,
  ButtonGroup,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  InputLabel,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import mobile from "../../assest/mobile.jpg";
import GooglePlay from "../../ui/icons/GooglePlay";
import AppStore from "../../ui/icons/AppStore";
import { MobileInput } from "../../styles/StyledComponent/MobileInput";

function AppDownload() {
  const theme = useTheme();
  return (
    <AppDownloadWrapper container spacing={8}>
      <Grid size={{ xs: 12, md: 5 }} className="left-pannel">
        <img src={mobile} alt="mobile" className="app-download-img" />
      </Grid>
      <Grid size={{ xs: 12, md: 7 }} className="right-pannel">
        <Stack justifyContent="center">
          <Typography variant="h2" className="right-pannel-text">
            Download the <br /> <span>Medify</span> App
          </Typography>
          <Stack
            className="app-download-input"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="flex-end"
          >
            <FormControl variant="standard">
              <InputLabel shrink htmlFor="mobile-input">
                Get the link to download the app
              </InputLabel>
              <MobileInput
                id="mobile-input"
                variant="filled"
                placeholder="Enter phone number"
                startAdornment={
                  <InputAdornment variant="filled" position="start">
                    +91
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button variant="contained">Send SMS</Button>
          </Stack>
          <ButtonGroup className="app-download-btn">
            <Button
              startIcon={
                <GooglePlay
                  iconColor={theme.palette.text.primary}
                  iconWidth={20}
                  iconHeight={20}
                />
              }
            >
              Google Play
            </Button>
            <Button
              startIcon={
                <AppStore
                  iconColor={theme.palette.text.primary}
                  iconWidth={20}
                  iconHeight={20}
                />
              }
            >
              App Store
            </Button>
          </ButtonGroup>
        </Stack>
      </Grid>
    </AppDownloadWrapper>
  );
}

export default AppDownload;
