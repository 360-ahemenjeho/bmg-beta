import { Box } from "@mui/material";

export default function Avatar() {
  return (
    <Box
      component="img"
      src="/avatar.png"
      sx={{ borderRadius: "999px", height: "25px", width: "25px" }}
    ></Box>
  );
}
