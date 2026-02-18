import { Button, Typography } from "@/components/ui/primitives";
import { spacingTokens } from "@/constants/theme";
import { AddFilled, CircleSmallFilled } from "@fluentui/react-icons";
import { Box, Stack } from "@mui/material";

export default function Hero() {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent={{ xs: "start", md: "space-between" }}
      alignItems="start"
      gap={spacingTokens.lg}
    >
      <Box>
        <Typography variant="h1">👋 Good Morning, Jeho</Typography>
        <Typography variant="body1" color="secondary">
          Wednesday, November 19, 2025
        </Typography>
      </Box>
      <Stack direction="row" gap={spacingTokens.sm} flexWrap="wrap">
        <Button
          color="secondary"
          size="large"
          startContent={<CircleSmallFilled />}
          endContent={<AddFilled />}
          round={2}
        >
          Add Admin
        </Button>
        <Button
          color="secondary"
          size="large"
          startContent={<CircleSmallFilled />}
          endContent={<AddFilled />}
          round={2}
        >
          Add Expert
        </Button>
        <Button
          color="secondary"
          size="large"
          startContent={<CircleSmallFilled />}
          endContent={<AddFilled />}
          round={2}
        >
          Add Services
        </Button>
      </Stack>
    </Stack>
  );
}
