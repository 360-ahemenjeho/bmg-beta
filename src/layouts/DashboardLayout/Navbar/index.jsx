import { dashboardNavHeight, spacingTokens } from "@/constants/theme";
import { useColor } from "@/contexts/color";
import { NavigationFilled } from "@fluentui/react-icons";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import Avatar from "./Avatar";
import Notification from "./Notification";
import QuickNavigation from "./QuickNavigation";

export default function Navbar({ onToggle }) {
  const { bg, border } = useColor();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        backgroundColor: bg.tertiary,
        borderBottom: `1px solid ${border.primary}`,
        height: dashboardNavHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box",
        px: spacingTokens.md,
        zIndex: theme.zIndex.appBar,
      }}
    >
      <Stack direction="row" alignItems="center" gap={spacingTokens.sm}>
        <NavigationFilled
          fontSize={22}
          onClick={onToggle}
          style={{ display: isMobile ? "block" : "none" }}
        />
        <QuickNavigation />
      </Stack>
      <Stack direction="row" alignItems="center" gap={spacingTokens.md}>
        <Notification />
        <Avatar />
      </Stack>
    </Box>
  );
}
