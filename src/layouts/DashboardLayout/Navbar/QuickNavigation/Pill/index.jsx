import { dashboardNavHeight, radius, spacing } from "@/constants/theme";
import { useColor } from "@/contexts/color";
import { Box } from "@mui/material";

export default function Pill({ active, nav }) {
  const { fg, main } = useColor();
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
          backgroundColor: "#EDEDED",
          boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.25)",
          borderRadius: radius[2],
          padding: "2px 6px",
          fontSize: "10px",
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: spacing[1],
          "& *": {
            color: active ? main.primary : fg.primary,
          },
        }}
      >
        <nav.icon fontSize={16} style={{ display: "block" }} />
        <span style={{ lineHeight: 1 }}>{nav?.label}</span>
      </Box>
    </Box>
  );
}
