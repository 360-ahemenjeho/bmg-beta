import { radiusTokens, spacingTokens } from "@/constants/theme";
import { useColor } from "@/contexts/color";
import { Box } from "@mui/material";

/**
 * @param {Object} props
 * @param {import("@/types/global.d.js").Tab[]} props.tabs
 * @param {number} props.active
 * @param {(key: number) => void} props.onChange
 * @param {import("react").ReactNode} props.children
 */
export default function Tabs({ children, tabs, active, onChange }) {
  const { border, elevate, fg, main } = useColor();

  return (
    <Box>
      <Box
        sx={{
          overflowX: "auto",
          display: "flex",
          border: `1px solid ${border.primary}`,
          borderRadius: radiusTokens.md,
        }}
      >
        {tabs.map((item, index) => {
          const _active = active === item.key;
          console.log("Is active ");
          console.log(_active);

          return (
            <Box
              component="div"
              key={index}
              onClick={() => onChange(item.key)}
              sx={{
                cursor: "pointer",
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                whiteSpace: "nowrap",
                height: "40px",
                px: spacingTokens.md,
                backgroundColor: _active ? elevate.primary : "transparent",
                color: _active ? fg.primary : fg.tertiary,
                transition: "background-color 0.35s ease-in-out, color 0.35s ease-in-out 0.25s",
                "&:hover": {
                  backgroundColor: main.primary,
                  color: "#ffffff",
                },
              }}
            >
              {item.label}
            </Box>
          );
        })}
      </Box>
      {children}
    </Box>
  );
}
