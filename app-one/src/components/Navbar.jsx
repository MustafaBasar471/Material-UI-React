import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "./DrawerComp";
const Navbar = ({ value, setValue }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          {isMatch ? (
            <>
              <Typography>The Alpha Team</Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Typography>The Alpha Team</Typography>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Dashboard" />
                <Tab label="Employee" />
                <Tab label="My Team" />
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignIn
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
