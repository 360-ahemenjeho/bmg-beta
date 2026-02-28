import { radiusTokens } from "@/constants/theme";
import { useColor } from "@/contexts/color";
import { Box } from "@mui/material";
import { CircleRegular, DismissFilled } from "@fluentui/react-icons";
import { TriggerButton } from "@/components/ui";

/**
 * @param {Object} props
 * @param {import("@/types/global.d.js").FilterLabel} props.label
 * @param {string} props.value
 * @param {(value: string) => void} props.onChange
 */
export default function FilterSelect({ label, value, onChange }) {
  const { border, fg } = useColor();
  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr 1fr auto"
      alignItems="center"
      sx={{
        borderRadius: radiusTokens.md,
        border: `1px solid ${border.primary}`,
        width: "fit-content",
        transition: "border-color 0.35s ease-in-out",
        overflow: "hidden",
        "&:hover": { borderColor: border.secondary },
      }}
    >
      <TriggerButton
        round={0}
        noBorder
        label={label.label}
        icon={label.icon}
        br
        accent={label.accent}
        fullWidth
      />
      <TriggerButton
        round={0}
        noBorder
        icon={CircleRegular}
        br
        accent="green"
        label="Success"
        onClick={() => console.log("Hey")}
        fullWidth
      />
      <TriggerButton
        round={0}
        noBorder
        icon={DismissFilled}
        accent={fg.secondary}
        onClick={() => console.log("Hey")}
      />
    </Box>
  );
}
