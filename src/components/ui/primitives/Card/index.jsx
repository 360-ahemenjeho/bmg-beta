import { radius } from "@/constants/theme";
import { Card as BaseCard } from "@mui/material";

/**
 * @param {import("@mui/material").CardProps & { round?: keyof radius }} props
 */
export default function Card({ children, round = 3, ...props }) {
  return (
    <BaseCard
      {...props}
      sx={{
        borderRadius: radius[round],
      }}
    >
      {children}
    </BaseCard>
  );
}
