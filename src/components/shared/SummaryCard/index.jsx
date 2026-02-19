import { Typography } from "@/components/ui";
import { radius, radiusTokens, spacingTokens } from "@/constants/theme";
import { useColor } from "@/contexts/color";
import { ArrowRightFilled } from "@fluentui/react-icons";
import { Box, Button, Stack } from "@mui/material";
import { Typography as BaseTypography } from "@mui/material";

/** @typedef {import("@/types/color.d.js").ColorContextValue} ColorContextValueProps */

/**
 * @param {Object} props
 * @param {keyof ColorContextValueProps["status"]} props.color
 * @param {number} props.value
 * @param {keyof radius} [props.round]
 * @param {string} [props.label]
 * @param {string} [props.secondaryLabel]
 * @param {React.ComponentType<{fontSize: number, color: string, style: Record<string, any>}>} props.icon
 * @param {boolean} [props.readOnly]
 * @param {boolean} [props.coloredLabel]
 */
export default function SummaryCard({
  color = "primary",
  value,
  round = 4,
  label = "Details",
  secondaryLabel = "Total",
  icon: Icon,
  readOnly = false,
  coloredLabel = false,
}) {
  const { status, bg, border, fg } = useColor();
  const _color = status?.[color];

  return (
    <Box
      sx={{
        borderLeft: `8px solid ${_color?.primary}`,
        borderRadius: radius[round],
        boxSizing: "border-box",
        backgroundColor: bg.tertiary,
        padding: `${spacingTokens.md} ${spacingTokens.xl}`,
        display: "flex",
        flexDirection: "column",
        gap: spacingTokens.sm,
        position: "relative",
      }}
    >
      <Stack alignItems="end" gap={spacingTokens.sm}>
        <Typography variant="caption" textAlign="right" fontWeight={500} color="secondary">
          {secondaryLabel}
        </Typography>
        <BaseTypography
          variant="h3"
          color={_color?.primary}
          textAlign="right"
          fontWeight={600}
          lineHeight={1}
        >
          {value}
        </BaseTypography>
      </Stack>

      <Box borderTop={`1px solid ${border.primary}`} mx="auto" width="25%"></Box>

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <BaseTypography
          color={coloredLabel ? _color?.primary : fg.primary}
          fontWeight={coloredLabel ? 700 : 500}
        >
          {label}
        </BaseTypography>
        {!readOnly && (
          <Button
            color="secondary"
            sx={{
              padding: `${spacingTokens.xs} !important`,
              borderRadius: `${radiusTokens.md} !important`,
            }}
          >
            <ArrowRightFilled></ArrowRightFilled>
          </Button>
        )}
      </Stack>

      {Icon && (
        <Icon
          fontSize={40}
          color={_color?.primary}
          style={{
            position: "absolute",
            left: spacingTokens.lg,
            top: "-20px",
            display: "block",
          }}
        ></Icon>
      )}
    </Box>
  );
}
