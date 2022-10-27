import { Box, IconButton, Tab, useMediaQuery, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import DrawerComp from "../Drawer/DrawerComp";

import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { TabContext, TabList } from "@mui/lab";

const Topbar = () => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("md"));
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
            {["Dashboard", "My Task", "Newspaper"].map((item, idx) => (
              <Tab label={item} value={idx} key={idx} />
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
