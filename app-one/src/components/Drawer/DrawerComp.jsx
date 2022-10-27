import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
const pages = ["Dashboard", "My Task", "Newspaper"];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List style={{ width: "15rem" }}>
          {pages.map((item, idx) => (
            <ListItemButton key={idx}>
              <ListItemIcon>
                <ListItemText>{item}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuOpenIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
