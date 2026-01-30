import { Typography } from "@/components/ui/primitives";
import { radius, radiusTokens, spacingTokens } from "@/constants/theme";
import { useColor } from "@/contexts/color";
import { ArrowRightFilled } from "@fluentui/react-icons";
import { Box, Button, Stack } from "@mui/material";
import { Typography as BaseTypography } from "@mui/material";

export default function SummaryCard({
  color = "primary",
  value = 0,
  round = "4",
  label = "View More",
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
      <Stack alignItems="end">
        <Typography variant="caption" textAlign="right" fontWeight={500}>
          {secondaryLabel}
        </Typography>
        <BaseTypography variant="h3" color={_color?.primary} textAlign="right" fontWeight={600}>
          {value}
        </BaseTypography>
      </Stack>

      <Box borderTop={`1px solid ${border.primary}`} mx="auto" width="25%" />

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <BaseTypography
          color={coloredLabel ? _color?.primary : fg.primary}
          variant="caption"
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
            <ArrowRightFilled />
          </Button>
        )}
      </Stack>

      {Icon && (
        <Box sx={{ display: "contents", "& *": { color: `${_color?.primary} !important` } }}>
          <Icon
            fontSize={30}
            style={{
              position: "absolute",
              left: spacingTokens.lg,
              top: "-15px",
              display: "block",
            }}
          />
        </Box>
      )}
    </Box>
  );
}
