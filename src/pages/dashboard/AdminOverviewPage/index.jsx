import Hero from "./Hero";
import { Stack } from "@mui/material";
import { spacingTokens } from "@/constants/theme";
import Statistics from "./Statistics";
import Orders from "./Orders";
import OrderAnalytics from "./OrderAnalytics";

export default function AdminOverviewPage() {
  return (
    <Stack gap={spacingTokens.xl}>
      <Hero></Hero>
      <Statistics></Statistics>
      <OrderAnalytics></OrderAnalytics>
      <Orders></Orders>
    </Stack>
  );
}
