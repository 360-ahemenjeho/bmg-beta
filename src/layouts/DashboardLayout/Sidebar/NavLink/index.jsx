import { radiusTokens, spacing, spacingTokens } from "@/constants/theme";
import { useColor } from "@/contexts/color";
import { ChevronLeftFilled } from "@fluentui/react-icons";
import { Box, Stack } from "@mui/material";

/** @typedef {import("@/types/global.d.js").NavItem} NavProps */

/**
 * @param {Object} props
 * @param {NavProps} props.nav
 * @param {() => void} props.onNavigate
 * @param {boolean} props.active
 * @param {string} [props.y]
 * @param {string} [props.x]
 * @param {boolean} [props.subNavOpen]
 */
export default function NavLink({
  nav,
  onNavigate,
  active,
  y = "4px",
  x = spacing[3],
  subNavOpen = false,
}) {
  const { elevate, shadow, fg, main } = useColor();

  return (
    <Box
      component="div"
      onClick={onNavigate}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: spacingTokens.sm,
        width: "100%",
        fontWeight: 400,
        py: y,
        px: x,
        lineHeight: 1,
        backgroundColor: active ? elevate.primary : "transparent",
        boxShadow: active ? shadow.default : "none",
        borderRadius: radiusTokens.md,
        flexShrink: 0,
        cursor: "pointer",
        transition: "background-color 0.35s ease-in-out, color 0.35s ease-in-out 0.25s",
        "&:hover": {
          backgroundColor: elevate.primary,
          color: main.primary,
        },
        "& *": {
          flexShrink: 0,
        },
        "& .indicator": {
          transform: subNavOpen ? "rotate(90deg)" : "rotate(0deg)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        },
      }}
    >
      <Stack alignItems="center" justifyContent="center">
        <nav.icon
          fontSize={26}
          style={{ display: "block", color: nav?.color ? nav.color : fg.primary }}
        ></nav.icon>
      </Stack>
      <Box component="p" lineHeight={1} sx={{ padding: 0, margin: 0, userSelect: "none" }}>
        {nav?.label}
      </Box>
      {nav?.sub && nav?.sub?.length > 0 && (
        <Stack alignItems="center" justifyContent="center" component="div" className="indicator">
          <ChevronLeftFilled fontSize={18}></ChevronLeftFilled>
        </Stack>
      )}
    </Box>
  );
}
