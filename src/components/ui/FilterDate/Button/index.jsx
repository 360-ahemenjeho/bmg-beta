import { actionSizes, fontSizes, spacingTokens } from "@/constants/theme";
import { useColor } from "@/contexts/color";
import { Box } from "@mui/material";
import { useRef } from "react";

/**
 * @param {Object} props
 * @param {string} [props.label]
 * @param {string} [props.accent]
 * @param {import("react").ComponentType<{fontSize?: number, color?: string}>} [props.icon]
 * @param {boolean} [props.bl]
 * @param {boolean} [props.br]
 * @param {(value: string) => void} [props.onDateChange]
 */
export default function Button({
  label,
  icon: Icon,
  bl = false,
  br = false,
  accent,
  onDateChange,
}) {
  const { border, fg, bg } = useColor();
  const inputRef = useRef(/** @type {HTMLInputElement | null} */ (null));

  const handleClick = () => {
    inputRef.current?.showPicker();
  };

  return (
    <>
      <Box
        onClick={handleClick}
        sx={{
          display: "flex",
          alignItems: "center",
          height: actionSizes.small,
          gap: spacingTokens.xs,
          lineHeight: 1,
          px: spacingTokens.sm,
          borderLeft: bl ? `1px solid ${border.primary}` : "none",
          borderRight: br ? `1px solid ${border.primary}` : "none",
          cursor: "pointer",
          transition: "background-color 0.35s ease-in-out",
          "&:hover": {
            backgroundColor: bg.secondary,
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
      <input
        ref={inputRef}
        type="date"
        onChange={(e) => onDateChange?.(e.target.value)}
        style={{ position: "absolute", opacity: 0, pointerEvents: "none", width: 0, height: 0 }}
        tabIndex={-1}
      />
    </>
  );
}
