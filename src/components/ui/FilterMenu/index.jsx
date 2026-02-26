import { radiusTokens } from "@/constants/theme";
import { useColor } from "@/contexts/color";
import { Box } from "@mui/material";
import Button from "./Button";
import { CircleRegular, DismissFilled } from "@fluentui/react-icons";

/**
 * @param {Object} props
 * @param {import("@/types/global.d.js").FilterLabel} props.label
 * @param {string} props.value
 * @param {() => void} props.onChange
 */
export default function FilterMenu({ label, value, onChange }) {
  const { border } = useColor();
  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr 1fr auto"
      sx={{
        borderRadius: radiusTokens.md,
        border: `1px solid ${border.primary}`,
        width: "fit-content",
        transition: "border-color 0.35s ease-in-out",
        overflow: "hidden",
        "&:hover": { borderColor: border.secondary },
      }}
    >
      <Button label={label.label} icon={label.icon} br accent={label.accent} />
      <Button
        icon={CircleRegular}
        br
        accent="green"
        label="Success"
        onClick={() => console.log("Hey")}
      />
      <Button icon={DismissFilled} onClick={() => console.log("Hey")} />
    </Box>
  );
}
