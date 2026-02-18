import { spacingTokens } from "@/constants/theme";
import { Box } from "@mui/material";
import OrderInsight from "./OrderInsight";
import Transactions from "./Transactions";

export default function OrderAnalytics() {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{ xs: "1fr", md: "repeat(3, 1fr)" }}
      gap={spacingTokens.lg}
    >
      <OrderInsight />
      <Transactions />
      <OrderInsight />
    </Box>
  );
}
