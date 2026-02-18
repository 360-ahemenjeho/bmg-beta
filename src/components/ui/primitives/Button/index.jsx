import { radius, spacing } from "@/constants/theme";
import { Button as BaseButton } from "@mui/material";
import { MoonLoader } from "react-spinners";

/**
 * @param {import("@mui/material").ButtonProps & {
 *    startContent?: import("@mui/material").ButtonProps["startIcon"],
 *    endContent?: import("@mui/material").ButtonProps["endIcon"],
 *    round?: keyof radius,
 * }} props
 */
export default function Button({
  children,
  color,
  startContent,
  endContent,
  loading = false,
  round = 2,
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
