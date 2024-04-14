import { Outlet } from "react-router-dom";
import { Box } from "@mui/joy";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <Box className="flex w-screen">
      <Sidebar />
      <Outlet />
    </Box>
  );
};

export default Layout;
