import { useState } from "react";
import { Box, Drawer, useTheme, useMediaQuery } from "@mui/material";
import { useColor } from "@/contexts/color";
import { spacingTokens } from "@/constants/theme";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const { border, bg } = useColor();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  function toggleDrawer() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <Box>
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          boxShadow: "none !important",
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            boxShadow: "none !important",
            borderRight: `1px solid ${border.primary}`,
            backgroundColor: bg.secondary,
          },
        }}
      >
        <Sidebar setWidth={setSidebarWidth} />
      </Drawer>

      <Box
        sx={{
          minHeight: "100vh",
          flexGrow: 1,
          ml: { xs: 0, md: `${sidebarWidth}px` },
          width: { xs: "100%", md: `calc(100% - ${sidebarWidth}px)` },
        }}
      >
        <Navbar onToggle={toggleDrawer} />
        <Box
          component="main"
          sx={{
            p: spacingTokens.md,
            boxSizing: "border-box",
            backgroundColor: bg.primary,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
