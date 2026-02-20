import { Box, Stack } from "@mui/material";
import { ArrowExitFilled } from "@fluentui/react-icons";
import { useRef, useState } from "react";
import { spacingTokens } from "@/constants/theme";
import NavLink from "./NavLink";
import { useNavigationMenu } from "@/hooks/config/navigation";
import { useLocation, useNavigate } from "react-router-dom";
import { footerHeight, headerHeight } from "./lib";

/** @typedef {import("@/types/global.d").NavItem} NavItemProps */
export default function Sidebar() {
  /** @type {React.RefObject<HTMLDivElement | null>} */
  const navRef = useRef(null);

  const menu = useNavigationMenu();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [selected, setSelected] = useState(/** @type {number | null} */ (null));

  /**
   * @param {NavItemProps} item
   * @param {number} index
   */
  function handleNavigation(item, index) {
    if (item?.sub && item?.sub?.length > 0) {
      setSelected((current) => (current === index ? null : index));
      return;
    }
    if (!item?.path) return;
    navigate(item?.path);
  }

  /** @param {NavItemProps} item */
  function handleSubNavigatiion(item) {
    if (!item?.path) return;
    navigate(item?.path);
  }

  return (
    <Box ref={navRef} sx={{ height: "100svh" }}>
      <Stack display="flex" alignItems="center" justifyContent="center" height={headerHeight}>
        <Box component="img" height="25px" src="/logo-dark.png"></Box>
      </Stack>

      <Box
        sx={{
          px: spacingTokens.sm,
          height: `calc(100svh - (${headerHeight} + ${footerHeight}))`,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: spacingTokens.sm,
        }}
      >
        {menu.map((item, index) => (
          <Stack key={index} gap={spacingTokens.sm}>
            <NavLink
              nav={item}
              active={
                item.path === pathname ||
                item?.sub?.some((subItem) => subItem.path === pathname) ||
                false
              }
              onNavigate={() => handleNavigation(item, index)}
              subNavOpen={selected === index}
            ></NavLink>

            <Stack
              gap={spacingTokens.sm}
              sx={{
                maxHeight: selected === index ? "500px" : "0px",
                overflow: "hidden",
                transition: "max-height 0.35s ease-in-out",
              }}
            >
              {item?.sub?.map((subItem, subIndex) => (
                <NavLink
                  key={subIndex}
                  nav={subItem}
                  active={subItem.path === pathname}
                  onNavigate={() => handleSubNavigatiion(subItem)}
                  x={spacingTokens.md}
                ></NavLink>
              ))}
            </Stack>
          </Stack>
        ))}
      </Box>

      <Stack
        direction="row"
        display="flex"
        alignItems="center"
        justifyContent="end"
        height={footerHeight}
        px={spacingTokens.sm}
      >
        <ArrowExitFilled fontSize={20} style={{ cursor: "pointer" }}></ArrowExitFilled>
      </Stack>
    </Box>
  );
}
