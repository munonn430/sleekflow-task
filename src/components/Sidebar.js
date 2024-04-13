import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
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
      <Typography variant="h6" className="p-5">
        Rick and Morty
      </Typography>
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
