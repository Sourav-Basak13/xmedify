import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Logo from "../../components/Logo/Logo";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "../../ui/icons/FacebookIcon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { BottomNavWrapper } from "../../styles/StyledComponent/BottomNavWrapper";
import { localNavArray } from "../../config/constant";

function BottomNav() {
  return (
    <BottomNavWrapper className="bottom-nav-wrapper">
      <Stack className="bottom-nav">
        <Stack className="bottom-links">
          <Stack className="logo-sociallink">
            <Logo sx={{ justifyContent: "flex-start" }} />
            <ButtonGroup className="sociallink">
              <IconButton component="a" href="#">
                <FacebookIcon iconColor="#2AA8FF" />
              </IconButton>
              <IconButton component="a" href="#">
                <TwitterIcon />
              </IconButton>
              <IconButton component="a" href="#">
                <YouTubeIcon />
              </IconButton>
              <IconButton component="a" href="#">
                <PinterestIcon />
              </IconButton>
            </ButtonGroup>
          </Stack>
          <Stack className="local-nav">
            {localNavArray?.map((_ele) => (
              <Button
                key={_ele}
                id="demo-customized-button"
                aria-haspopup="true"
                variant="text"
                disableElevation
                startIcon={<KeyboardArrowDownIcon />}
              >
                {_ele}
              </Button>
            ))}
          </Stack>
        </Stack>
        <Typography className="nav-copyright" variant="caption">
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </Typography>
      </Stack>
    </BottomNavWrapper>
  );
}

export default BottomNav;
