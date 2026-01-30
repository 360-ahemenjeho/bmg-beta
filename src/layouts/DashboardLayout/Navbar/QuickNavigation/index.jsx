import { spacing } from "@/constants/theme";
import { Stack } from "@mui/material";
import Pill from "./Pill";
import { GlanceFilled } from "@fluentui/react-icons";

export default function QuickNavigation() {
  return (
    <Stack direction="row" gap={spacing[1]}>
      <Pill nav={{ label: "Overview", icon: GlanceFilled }} active={true} />
    </Stack>
  );
}
