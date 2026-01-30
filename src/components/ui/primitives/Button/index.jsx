import { radius, spacing } from "@/constants/theme";
import { Button as BaseButton } from "@mui/material";
import { MoonLoader } from "react-spinners";

export default function Button({
  children,
  color,
  startContent,
  endContent,
  loading = false,
  round = "4",
  disabled,
  ...props
}) {
  return (
    <BaseButton
      {...props}
      color={color}
      disabled={loading || disabled}
      sx={{
        borderRadius: radius[round],
        gap: spacing[1],
      }}
    >
      {startContent && startContent}
      {children}
      {loading ? <MoonLoader size={10} /> : endContent && endContent}
    </BaseButton>
  );
}
