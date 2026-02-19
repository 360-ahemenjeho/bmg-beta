import { InsightTag, PieChart } from "@/components/shared";
import { Card } from "@/components/ui";
import { spacingTokens } from "@/constants/theme";
import { MoreHorizontalFilled } from "@fluentui/react-icons";
import { Box, CardContent, Stack, Typography } from "@mui/material";

export default function OrderInsight() {
  return (
    <Card>
      <Stack component={CardContent} gap={spacingTokens.md} padding={spacingTokens.lg}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h3" color="#63658F" fontWeight={700}>
            Orders Insight
          </Typography>
          <MoreHorizontalFilled fontSize={26} color="#A2A5D6"></MoreHorizontalFilled>
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
          ></PieChart>
          <Stack gap={spacingTokens.md}>
            <InsightTag color="success" label="Completed" value="65,000"></InsightTag>
            <InsightTag color="warning" label="Pending" value="Pending"></InsightTag>
            <InsightTag color="error" label="Cancelled" value="1500"></InsightTag>
          </Stack>
        </Box>
      </Stack>
    </Card>
  );
}
