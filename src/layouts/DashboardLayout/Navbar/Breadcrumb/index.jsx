import { spacing } from "@/constants/theme";
import { Stack } from "@mui/material";
import Pill from "./Pill";
import { GlanceFilled } from "@fluentui/react-icons";

export default function Breadcrumb() {
  return (
    <Stack direction="row" gap={spacing[1]}>
      <Pill nav={{ label: "Overview", icon: GlanceFilled, path: "/?glance" }} active={true}></Pill>
    </Stack>
  );
}
