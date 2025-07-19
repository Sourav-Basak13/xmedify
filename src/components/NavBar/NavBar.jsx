import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavDrawer } from "../../styles/StyledComponent/NavDrawer";
import { NavBarWrapper } from "../../styles/StyledComponent/NavBarWrapper";
import Logo from "../Logo/Logo";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router";

const drawerWidth = 240;
const navItems = [
  "Find Doctors",
  "Hospitals",
  "Medicines",
  "Surgeries",
  "Software for Provider",
  "Facilities",
];

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  const handleDrawerToggle = (event) => {
    event.stopPropagation();
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Logo sx={{ justifyContent: "center" }} />

      <CloseIcon className="drawer-close-icon" onClick={handleDrawerToggle} />

      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Link to={item === "Hospitals" ? "/search" : ""}>
              <ListItemButton
                className="menu-item"
                sx={{ textAlign: "center" }}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Link to="/my-bookings">
        <Button className="bookings-btn" variant="contained" color="primary">
          My Bookings
        </Button>
      </Link>
    </Box>
  );

  return (
    <NavBarWrapper sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        position="static"
        sx={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar sx={isMobile ? { justifyContent: "flex-end" } : {}}>
          <Logo
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              alignItems: "center",
              display: { md: "flex" },
            }}
          />

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Link key={item} to={item === "Hospitals" ? "/search" : ""}>
                <Button className="menu-item">{item}</Button>
              </Link>
            ))}
            <Link to="/my-bookings">
              <Button
                className="bookings-btn"
                variant="contained"
                color="primary"
              >
                My Bookings
              </Button>
            </Link>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <NavDrawer
          container={document.body}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="right"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          slotProps={{
            paper: {
              className: "nav-drawer-paper",
            },
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </NavDrawer>
      </nav>
    </NavBarWrapper>
  );
}

export default NavBar;
