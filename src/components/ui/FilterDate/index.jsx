import { radiusTokens } from "@/constants/theme";
import { useColor } from "@/contexts/color";
import { Box } from "@mui/material";
import Button from "./Button";
import { CalendarDateRegular, CalendarMonthRegular, DismissFilled } from "@fluentui/react-icons";

/**
 * @param {Object} props
 * @param {string} props.from
 * @param {string} props.to
 * @param {(value: string) => void} props.onFromChange
 * @param {(value: string) => void} props.onToChange
 */
export default function FilterMenu({ from, to, onFromChange, onToChange }) {
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
      <Button label={from || "From"} icon={CalendarDateRegular} br accent="#5925DC" />
      <Button icon={CalendarMonthRegular} br accent="#B54708" label={to || "To"} />
      <Button icon={DismissFilled} />
    </Box>
  );
}
