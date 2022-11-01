import React, { useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Tooltip,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styledTypography, styledAppbar } from "./NavbarStyle";
const Navbar = () => {
  const [dropMenu, setDropMenu] = useState(null);
  const [dropMenuUser, setDropMenuUser] = useState(null);
  return (
    <AppBar sx={styledAppbar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography sx={styledTypography}>LOGO</Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={() => setDropMenu(!dropMenu)}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={dropMenu}
              open={Boolean(dropMenu)}
              onClose={() => setDropMenu(null)}
              keepMounted
              sx={{
                display: { xs: "block", md: "none" },
                position: "absolute",
                top: 48,
              }}
            >
              {["Navbar", "apsıodasd", "opaksfpoasf"].map((item, idx) => (
                <MenuItem key={idx} onClick={() => setDropMenu(null)}>
                  <Typography textAlign="center">{item}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {["paokfpasf", "poaskfpoasf", "paoskfasf"].map((item, idx) => (
              <Button
                key={idx}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={() => setDropMenuUser(!dropMenuUser)}
                sx={{ p: 0 }}
              >
                <Avatar
                  alt="Mustafa Başar"
                  src="https://ca.slack-edge.com/T03LBL87DA8-U03RGMLSW1L-e6bd17d33a8b-72"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              anchorEl={dropMenuUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(dropMenuUser)}
              onClose={() => setDropMenuUser(null)}
            >
              {["asofkasf", "askfpoasfk", "LogOut"].map((setting) => (
                <MenuItem key={setting} onClick={() => setDropMenuUser(null)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
