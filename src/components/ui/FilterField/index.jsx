import { actionSizes, radiusTokens } from "@/constants/theme";
import { useColor } from "@/contexts/color";
import { FilterRegular } from "@fluentui/react-icons";
import { Box } from "@mui/material";

export default function FilterField() {
  const { main, fg, bg, border } = useColor();
  const ACCENT = main.primary;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: actionSizes.small,
        height: actionSizes.small,
        borderRadius: radiusTokens.md,
        border: "1px solid",
        borderColor: border.primary,
        color: fg.secondary,
        bgcolor: "transparent",
        transition: "border-color 0.18s, color 0.18s, box-shadow 0.18s",
        cursor: "pointer",
        "&:hover": {
          borderColor: ACCENT,
          color: ACCENT,
          bgcolor: bg.secondary,
        },
      }}
    >
      <FilterRegular fontSize={16} />
    </Box>
  );
}
