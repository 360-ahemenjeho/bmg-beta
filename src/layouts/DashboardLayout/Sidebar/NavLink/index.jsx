import { radiusTokens, spacingTokens } from "@/constants/theme";
import { Box } from "@mui/material";

export default function NavLink({ nav, onNavigate, active }) {
  return (
    <Box
      component="div"
      onClick={onNavigate}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: spacingTokens.sm,
        width: "100%",
        fontSize: "12px",
        fontWeight: 500,
        padding: "6px 18px",
        lineHeight: 1,
        backgroundColor: active ? "#EDEDED" : "transparent",
        boxShadow: active ? "1px 1px 1px rgba(0, 0, 0, 0.25)" : "none",
        borderRadius: radiusTokens.md,
        flexShrink: 0,
        cursor: "pointer",
        "& *": {
          flexShrink: 0,
        },
      }}
    >
      <Box>
        <nav.icon fontSize={22} />
      </Box>
      {nav?.label}
    </Box>
  );
}
