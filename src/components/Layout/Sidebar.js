import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

const drawerWidth = 250;

const Sidebar = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Link className="px-8" to="/">
        <img
          src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png"
          alt="logo"
        />
      </Link>
      <Divider />
      <List>
        <ListItem key="contact" disablePadding>
          <ListItemButton
            component={forwardRef((props, ref) => (
              <Link ref={ref} {...props} to="/contact" />
            ))}
          >
            <ListItemText className="text-center" primary="Contact" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
