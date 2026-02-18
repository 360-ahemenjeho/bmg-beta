import { InsightTag, PieChart } from "@/components/shared";
import { Card } from "@/components/ui/primitives";
import { spacingTokens } from "@/constants/theme";
import { MoreHorizontalFilled } from "@fluentui/react-icons";
import { Box, CardContent, Stack, Typography } from "@mui/material";

export default function OrderInsight() {
  return (
    <Card round={8}>
      <Stack component={CardContent} gap={spacingTokens.md} padding={spacingTokens.lg}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h3" color="#63658F" fontWeight={700}>
            Orders Insight
          </Typography>
          <Box
            component="span"
            sx={{
              cursor: "pointer",
              "& *": {
                color: "#A2A5D6",
              },
            }}
          >
            <MoreHorizontalFilled fontSize={26} />
          </Box>
        </Stack>
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", md: "repeat(2, 1fr)" }}
          gap={spacingTokens.lg}
          alignItems="center"
        >
          <PieChart
            data={[
              { percent: 30, color: "#F7941D" },
              { percent: 10, color: "#FF0004" },
              { percent: 60, color: "#05970F" },
            ]}
            size={140}
          />
          <Stack gap={spacingTokens.md}>
            <InsightTag color="success" label="Completed" value="65,000" />
            <InsightTag color="warning" label="Pending" value="Pending" />
            <InsightTag color="error" label="Cancelled" value="1500" />
          </Stack>
        </Box>
      </Stack>
    </Card>
  );
}
