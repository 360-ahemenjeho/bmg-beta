import { dashboardNavHeight, radius, spacing } from "@/constants/theme";
import { useColor } from "@/contexts/color";
import { Box } from "@mui/material";

/** @typedef {import("@/types/global.d.js").NavItem} NavProps */

/**
 * @param {Object} props
 * @param {boolean} props.active
 * @param {NavProps} props.nav
 */
export default function Pill({ active, nav }) {
  const { fg, main, shadow, elevate } = useColor();
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: dashboardNavHeight,
        "&::before": {
          content: '""',
          display: active ? "block" : "none",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "4px",
          backgroundColor: main.primary,
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: elevate.primary,
          boxShadow: shadow.default,
          borderRadius: radius[2],
          padding: "2px 6px",
          fontSize: "10px",
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: spacing[1],
          "& > *": {
            color: active ? main.primary : fg.primary,
          },
        }}
      >
        {nav.icon && <nav.icon fontSize={16} style={{ display: "block" }}></nav.icon>}
        <span style={{ lineHeight: 1 }}>{nav?.label}</span>
      </Box>
    </Box>
  );
}
