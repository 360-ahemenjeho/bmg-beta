import { actionSizes, fontSizes, spacingTokens } from "@/constants/theme";
import { useColor } from "@/contexts/color";
import { Box } from "@mui/material";

/**
 * @param {Object} props
 * @param {string} [props.label]
 * @param {string} [props.accent]
 * @param {import("react").ComponentType<{fontSize?: number, color?: string}>} [props.icon]
 * @param {boolean} [props.bl]
 * @param {boolean} [props.br]
 * @param {() => void} [props.onClick]
 */
export default function Button({ label, icon: Icon, bl = false, br = false, accent, onClick }) {
  const { border, fg, bg } = useColor();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: actionSizes.small,
        gap: spacingTokens.xs,
        lineHeight: 1,
        px: spacingTokens.sm,
        borderLeft: bl ? `1px solid ${border.primary}` : "none",
        borderRight: br ? `1px solid ${border.primary}` : "none",
        cursor: onClick ? "pointer" : "default",
        transition: "background-color 0.35s ease-in-out",
        "&:hover": {
          backgroundColor: onClick ? bg.secondary : "transparent",
        },
        "& *": {
          fontSize: fontSizes.caption,
        },
      }}
    >
      {Icon && <Icon color={accent || fg.secondary} />}
      {label && (
        <Box component="span" fontWeight={400} sx={{ whiteSpace: "nowrap", userSelect: "none" }}>
          {label}
        </Box>
      )}
    </Box>
  );
}
