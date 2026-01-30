import { Box, Stack } from "@mui/material";
import { SignOutRegular } from "@fluentui/react-icons";
import { useEffect, useRef } from "react";
import { spacingTokens } from "@/constants/theme";
import NavLink from "./NavLink";
import { useNavigationMenu } from "@/hooks/config/navigation";
import { useLocation } from "react-router-dom";

export default function Sidebar({ setWidth }) {
  const navRef = useRef(null);
  const menu = useNavigationMenu();
  const { pathname } = useLocation();

  useEffect(() => {
    if (navRef.current) {
      setWidth(navRef.current.offsetWidth);
    }
  }, [setWidth]);

  return (
    <Box ref={navRef} sx={{ height: "100vh" }}>
      <Stack display="flex" alignItems="center" justifyContent="center" height="80px">
        <Box component="img" height="30px" src="/logo-dark.png" />
      </Stack>
      <Box
        sx={{
          px: spacingTokens.md,
          height: `calc(100vh - 120px)`,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: spacingTokens.sm,
        }}
      >
        {menu.map((item, index) => (
          <NavLink
            key={index}
            nav={item}
            active={
              item.path === pathname || item?.sub?.some((subItem) => subItem.path === pathname)
            }
          />
        ))}
      </Box>
      <Stack
        direction="row"
        display="flex"
        alignItems="center"
        justifyContent="end"
        height="40px"
        px={spacingTokens.md}
      >
        <SignOutRegular fontSize={20} style={{ cursor: "pointer" }} />
      </Stack>
    </Box>
  );
}
