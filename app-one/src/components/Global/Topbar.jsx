import { Box, IconButton, Tab, useMediaQuery, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { TabContext, TabList } from "@mui/lab";

import DrawerComp from "../Drawer/DrawerComp";

import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const Links = [
    {
      title: "Dashboard",
      link: "",
    },
    {
      title: "My Task",
      link: "my_task",
    },
    {
      title: "Newspaper",
      link: "newspaper",
    },
  ];

  const handleClick = (link) => {
    navigate(`/${link}`);
  };
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box display="flex" borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      {isPhone ? null : (
        <TabContext value="0">
          <TabList>
            {Links.map((item, idx) => (
              <Tab
                label={item.title}
                value={idx}
                key={idx}
                onClick={() => handleClick(item.link)}
              />
            ))}
          </TabList>
        </TabContext>
      )}
      {/* ICONS */}
      <Box display="flex">
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
        {isPhone && (
          <IconButton>
            <DrawerComp />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default Topbar;
