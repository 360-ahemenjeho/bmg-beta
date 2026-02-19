import { spacingTokens } from "@/constants/theme";
import { Stack } from "@mui/material";
import Hero from "./Hero";
import Shortcuts from "./Shortcuts";
import Insights from "./Insights";
import Tasks from "./Tasks";

export default function CustomerOverviewPage() {
  return (
    <Stack gap={spacingTokens.xl}>
      <Hero></Hero>
      <Shortcuts></Shortcuts>
      <Insights></Insights>
      <Tasks></Tasks>
    </Stack>
  );
}
