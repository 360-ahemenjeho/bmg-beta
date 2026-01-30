import { DashboardLayout } from "@/layouts";
import Hero from "./Hero";
import { Stack } from "@mui/material";
import { spacingTokens } from "@/constants/theme";
import Statistics from "./Statistics";
import Orders from "./Orders";

export default function AdminOverviewPage() {
  return (
    <DashboardLayout>
      <Stack gap={spacingTokens.xl}>
        <Hero />
        <Statistics />
        <Orders />
      </Stack>
    </DashboardLayout>
  );
}
