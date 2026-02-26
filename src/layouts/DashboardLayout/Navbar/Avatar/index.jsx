import { actionSizes } from "@/constants/theme";
import { Box } from "@mui/material";

export default function Avatar() {
  return (
    <Box
      component="img"
      src="/avatar.png"
      sx={{ borderRadius: "999px", height: actionSizes.small, width: actionSizes.small }}
    ></Box>
  );
}
