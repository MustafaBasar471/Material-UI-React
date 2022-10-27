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
import { useNavigate } from "react-router-dom";

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
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
    setOpenDrawer(false);
  };
  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List style={{ width: "15rem" }}>
          {Links.map((item, idx) => (
            <ListItemButton key={idx}>
              <ListItemIcon>
                <ListItemText onClick={() => handleClick(item.link)}>
                  {item.title}
                </ListItemText>
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
