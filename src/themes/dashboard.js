import {
  fontSizes,
  inputHeight,
  radius,
  radiusTokens,
  spacing,
  spacingTokens,
  typefaces,
} from "@/constants/theme";
import { ChevronDownFilled } from "@fluentui/react-icons";
import { createTheme, responsiveFontSizes } from "@mui/material";

function configureTheme({
  colors: { fg, bg, border, mode, scrollbar, button, input, main, menu, menuItem, status },
}) {
  const theme = createTheme({
    typography: {
      fontFamily: typefaces.default,
      h1: {
        fontSize: fontSizes.h1,
        fontWeight: 600,
        lineHeight: 1.5,
      },
      h2: {
        fontSize: fontSizes.h2,
        fontWeight: 600,
        lineHeight: 1.5,
      },
      h3: {
        fontSize: fontSizes.h3,
        fontWeight: 600,
        lineHeight: 1.5,
      },
      caption: {
        textTransform: "unset",
        fontSize: fontSizes.caption,
        lineHeight: 1,
        display: "block",
      },
      body1: {
        fontSize: fontSizes.body1,
        fontWeight: 400,
        lineHeight: 1.5,
      },
      body2: {
        fontSize: fontSizes.body2,
        fontWeight: 400,
        lineHeight: 1.5,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            fontSize: "0.8125rem",
            backgroundColor: bg.primary,
            "& *": {
              color: fg.primary,
              fontFamily: typefaces.default,
              "::-webkit-scrollbar": {
                width: "6px",
                borderRadius: "999px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: scrollbar.thumb,
                borderRadius: "999px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: scrollbar.track,
                borderRadius: "999px",
              },
              "&::-webkit-scrollbar-button": {
                display: "none",
              },
            },
          },
          body: {
            margin: 0,
            padding: 0,
            backgroundColor: bg.primary,
            "& *": {
              color: fg.primary,
              fontFamily: typefaces.default,
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            boxShadow: "none !important",
            whiteSpace: "nowrap",
            outline: "none",
            textTransform: "unset",
            minWidth: "fit-content",
            lineHeight: "1",
            fontWeight: 500,
            borderWidth: "0",
            borderStyle: "none",
            boxSizing: "border-box",
            "&.MuiButton-sizeLarge": {
              fontSize: "15px",
              padding: "1rem 1.25rem",
              "& > *": {
                fontSize: "15px",
              },
            },
            "&.MuiButton-sizeMedium": {
              fontSize: "14px",
              padding: "0.9rem 1.25rem",
              "& > *": {
                fontSize: "14px",
              },
            },
            "&.MuiButton-sizeSmall": {
              fontSize: "13px",
              padding: "0.8rem 1.25rem",
              "& > *": {
                fontSize: "13px",
              },
            },
            gap: spacing[1],
            "&.MuiButton-contained.MuiButton-colorPrimary": {
              borderColor: button["primary"]["default"]["border"]["normal"],
              backgroundColor: button["primary"]["default"]["bg"]["normal"],
              color: button["primary"]["default"]["fg"]["normal"],
              "&:hover": {
                borderColor: button["primary"]["default"]["border"]["hover"],
                backgroundColor: button["primary"]["default"]["bg"]["hover"],
                color: button["primary"]["default"]["fg"]["hover"],
              },
            },
            "&.MuiButton-text.MuiButton-colorPrimary": {
              borderColor: button["primary"]["bare"]["border"]["normal"],
              backgroundColor: button["primary"]["bare"]["bg"]["normal"],
              color: button["primary"]["bare"]["fg"]["normal"],
              "&:hover": {
                borderColor: button["primary"]["bare"]["border"]["hover"],
                backgroundColor: button["primary"]["bare"]["bg"]["hover"],
                color: button["primary"]["bare"]["fg"]["hover"],
              },
            },
            "&.MuiButton-outlined.MuiButton-colorPrimary": {
              borderColor: button["primary"]["outline"]["border"]["normal"],
              backgroundColor: button["primary"]["outline"]["bg"]["normal"],
              color: button["primary"]["outline"]["fg"]["normal"],
              "&:hover": {
                borderColor: button["primary"]["outline"]["border"]["hover"],
                backgroundColor: button["primary"]["outline"]["bg"]["hover"],
                color: button["primary"]["outline"]["fg"]["hover"],
              },
            },
            "&.MuiButton-colorPrimary.Mui-disabled": {
              borderColor: button["primary"]["ghost"]["border"]["normal"],
              backgroundColor: button["primary"]["ghost"]["bg"]["normal"],
              color: button["primary"]["ghost"]["fg"]["normal"],
            },
            "&.MuiButton-contained.MuiButton-colorSecondary": {
              borderColor: button["secondary"]["default"]["border"]["normal"],
              backgroundColor: button["secondary"]["default"]["bg"]["normal"],
              color: button["secondary"]["default"]["fg"]["normal"],
              boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.25) !important",
              "&:hover": {
                borderColor: button["secondary"]["default"]["border"]["hover"],
                backgroundColor: button["secondary"]["default"]["bg"]["hover"],
                color: button["secondary"]["default"]["fg"]["hover"],
              },
            },
            "&.MuiButton-text.MuiButton-colorSecondary": {
              borderColor: button["secondary"]["bare"]["border"]["normal"],
              backgroundColor: button["secondary"]["bare"]["bg"]["normal"],
              color: button["secondary"]["bare"]["fg"]["normal"],
              "&:hover": {
                borderColor: button["secondary"]["bare"]["border"]["hover"],
                backgroundColor: button["secondary"]["bare"]["bg"]["hover"],
                color: button["secondary"]["bare"]["fg"]["hover"],
              },
            },
            "&.MuiButton-outlined.MuiButton-colorSecondary": {
              borderColor: button["secondary"]["outline"]["border"]["normal"],
              backgroundColor: button["secondary"]["outline"]["bg"]["normal"],
              color: button["secondary"]["outline"]["fg"]["normal"],
              "&:hover": {
                borderColor: button["secondary"]["outline"]["border"]["hover"],
                backgroundColor: button["secondary"]["outline"]["bg"]["hover"],
                color: button["secondary"]["outline"]["fg"]["hover"],
              },
            },
            "&.MuiButton-colorSecondary.Mui-disabled": {
              borderColor: button["secondary"]["ghost"]["border"]["normal"],
              backgroundColor: button["secondary"]["ghost"]["bg"]["normal"],
              color: button["secondary"]["ghost"]["fg"]["normal"],
            },
            "&.MuiButton-contained.MuiButton-colorError": {
              borderColor: button["destructive"]["default"]["border"]["normal"],
              backgroundColor: button["destructive"]["default"]["bg"]["normal"],
              color: button["destructive"]["default"]["fg"]["normal"],
              "&:hover": {
                borderColor: button["destructive"]["default"]["border"]["hover"],
                backgroundColor: button["destructive"]["default"]["bg"]["hover"],
                color: button["destructive"]["default"]["fg"]["hover"],
              },
            },
            "&.MuiButton-text.MuiButton-colorError": {
              borderColor: button["destructive"]["bare"]["border"]["normal"],
              backgroundColor: button["destructive"]["bare"]["bg"]["normal"],
              color: button["destructive"]["bare"]["fg"]["normal"],
              "&:hover": {
                borderColor: button["destructive"]["bare"]["border"]["hover"],
                backgroundColor: button["destructive"]["bare"]["bg"]["hover"],
                color: button["destructive"]["bare"]["fg"]["hover"],
              },
            },
            "&.MuiButton-outlined.MuiButton-colorError": {
              borderColor: button["destructive"]["outline"]["border"]["normal"],
              backgroundColor: button["destructive"]["outline"]["bg"]["normal"],
              color: button["destructive"]["outline"]["fg"]["normal"],
              "&:hover": {
                borderColor: button["destructive"]["outline"]["border"]["hover"],
                backgroundColor: button["destructive"]["outline"]["bg"]["hover"],
                color: button["destructive"]["outline"]["fg"]["hover"],
              },
            },
            "&.MuiButton-colorError.Mui-disabled": {
              borderCplor: button["destructive"]["ghost"]["border"]["normal"],
              backgroundColor: button["destructive"]["ghost"]["bg"]["normal"],
              color: button["destructive"]["ghost"]["fg"]["normal"],
            },
          },
        },
        defaultProps: {
          variant: "contained",
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            padding: "0px 12px",
            fontSize: fontSizes.body1,
            borderRadius: radius[3],
            boxSizing: "border-box",
            color: input["outlined"]["default"]["fg"],
            height: inputHeight,
            backgroundColor: input["outlined"]["default"]["bg"],
            "&.MuiInputBase-multiline": {
              height: "auto",
              padding: "18px",
            },
            "& fieldset": {
              borderColor: input["outlined"]["default"]["border"],
            },
            "&.MuiOutlinedInput-root:hover fieldset": {
              borderColor: main.primary,
            },
            "&.MuiOutlinedInput-root.Mui-focused fieldset": {
              borderColor: main.primary,
              borderWidth: "1px",
            },
            "&.Mui-error": {
              backgroundColor: input.outlined.error.bg,
              color: input.outlined.error.fg,
            },
            "&.Mui-error fieldset.MuiOutlinedInput-notchedOutline": {
              border: `1px solid ${input.outlined.error.border}`,
            },
            "&.Mui-disabled": {
              color: input["outlined"]["disabled"]["fg"],
              backgroundColor: input["outlined"]["disabled"]["bg"],
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: input["outlined"]["disabled"]["border"],
              },
              "& .MuiInputBase-input": {
                color: input["outlined"]["disabled"]["fg"],
                "-webkit-text-fill-color": {
                  color: input["outlined"]["disabled"]["fg"],
                },
              },
              "& .MuiInputBase-input::placeholder": {
                color: input["outlined"]["disabled"]["placeholder"],
                opacity: 1,
              },
            },
          },
          input: {
            background: "transparent",
            margin: 0,
            padding: 0,
          },
        },
      },
      MuiFilledInput: {
        defaultProps: {
          disableUnderline: true,
        },
        styleOverrides: {
          root: {
            boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.2) !important",
            fontSize: fontSizes.body1,
            borderRadius: radius[3],
            boxSizing: "border-box",
            color: input["filled"]["default"]["fg"],
            padding: "0px 12px",
            height: inputHeight,
            "&.MuiInputBase-multiline": {
              height: "auto",
              padding: "18px",
            },
            backgroundColor: input["filled"]["default"]["bg"],
            border: `1px solid ${input["filled"]["default"]["border"]}`,
            "&:hover": {
              borderColor: main.primary,
              backgroundColor: input["filled"]["default"]["bg"],
            },
            "&.Mui-focused": {
              borderColor: main.primary,
              borderWidth: "1px",
              backgroundColor: input["filled"]["default"]["bg"],
            },
            "&.Mui-error": {
              border: `1px solid ${input.outlined.error.border}`,
              backgroundColor: input.filled.error.bg,
              color: input.filled.error.fg,
            },
            "&.Mui-disabled": {
              color: input["filled"]["disabled"]["fg"],
              backgroundColor: input["filled"]["disabled"]["bg"],
              border: `1px solid ${input["filled"]["disabled"]["border"]}`,
              "& .MuiInputBase-input": {
                color: input["filled"]["disabled"]["fg"],
                "-webkit-text-fill-color": {
                  color: input["filled"]["disabled"]["fg"],
                },
              },
              "& .MuiInputBase-input::placeholder": {
                color: input["filled"]["disabled"]["placeholder"],
                opacity: 1,
              },
            },
          },
          input: {
            background: "transparent !important",
            margin: "0 !important",
            padding: "0 !important",
          },
        },
      },
      MuiSelect: {
        defaultProps: {
          IconComponent: ChevronDownFilled,
          variant: "outlined",
        },
        styleOverrides: {
          root: {
            fontSize: fontSizes.body1,
            borderRadius: radius[3],
            boxSizing: "border-box",
            padding: "0px 12px",
            height: inputHeight,
            "& .MuiSelect-select.MuiSelect-filled.MuiFilledInput-input": {
              backgroundColor: `transparent !important`,
              boxShadow: "none !important",
            },
            "&.Mui-error .MuiSelect-select.MuiSelect-filled.MuiFilledInput-input": {
              color: input.filled.error.fg,
            },
          },
          outlined: {
            color: input["outlined"]["default"]["fg"],
            "& fieldset": {
              borderColor: input["outlined"]["default"]["border"],
            },
            "&.MuiSelect-root:hover fieldset": {
              color: input["outlined"]["default"]["fg"],
              borderColor: main.primary,
            },
            "&.MuiSelect-root.Mui-focused fieldset": {
              color: input["outlined"]["default"]["fg"],
              borderColor: main.primary,
              borderWidth: "1px",
            },
            "&.Mui-disabled": {
              color: input["outlined"]["disabled"]["fg"],
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: input["outlined"]["disabled"]["border"],
              },
            },
            "&.Mui-error.MuiOutlinedInput-root": {
              backgroundColor: input.outlined.error.bg,
              color: input.outlined.error.fg,
            },
          },
          filled: {
            boxShadow: "inset 0px 1px 1px rgba(0, 0, 0, 0.25)",
            color: input["filled"]["default"]["fg"],
            backgroundColor: input["filled"]["default"]["bg"],
            "&:hover": {
              color: input["filled"]["default"]["fg"],
              backgroundColor: input["filled"]["default"]["bg"],
            },
            "&.Mui-focused": {
              color: input["filled"]["default"]["fg"],
              backgroundColor: input["filled"]["default"]["bg"],
              borderWidth: 0,
            },
            "&.Mui-disabled": {
              color: input["filled"]["disabled"]["fg"],
              backgroundColor: input["filled"]["disabled"]["bg"],
            },
            "&.Mui-error.MuiFilledInput-root": {
              border: `1px solid ${input.outlined.error.border}`,
              backgroundColor: input.filled.error.bg,
              color: input.filled.error.fg,
            },
          },
          icon: {
            color: input["filled"]["default"]["fg"],
            "&.Mui-disabled": {
              color: input["filled"]["disabled"]["fg"],
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: bg.tertiary,
            boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.25) !important",
            "&.MuiPaper-outlined": {
              border: "1px solid #E5E5E5",
              boxShadow: "none !important",
            },
          },
        },
      },
      MuiFormControl: {
        styleOverrides: {
          root: {
            gap: spacingTokens.sm,
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          root: {
            "&.MuiFormControlLabel-root": {
              margin: 0,
              "& .MuiFormControlLabel-label": {
                fontWeight: 500,
                lineHeight: 1,
                marginLeft: spacingTokens.md,
                color: "#4B4B4B",
                fontSize: fontSizes.caption,
              },
            },
          },
        },
      },
      MuiFormGroup: {
        styleOverrides: {
          root: {
            "&.MuiFormGroup-root": {
              gap: spacingTokens.md,
            },
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            fontSize: fontSizes.caption,
            lineHeight: 1,
            fontWeight: 500,
            color: "#4B4B4B",
            "& .MuiFormLabel-asterisk": {
              color: main.error,
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontSize: fontSizes.caption,
            fontWeight: 500,
            lineHeight: 1,
            color: "#4B4B4B",
          },
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            fontSize: fontSizes.caption,
            marginLeft: 0,
            marginRight: 0,
            color: "#4B4B4B",
            lineHeight: 1,
            fontWeight: 500,
            "&.center": {
              textAlign: "center",
            },
            "&.Mui-error": {
              fontWeight: 500,
              color: input.outlined.error.fg,
            },
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          root: {
            "& .MuiMenu-paper": {
              backgroundColor: menu.bg,
              border: `1px solid ${menu.border}`,
              color: fg.primary,
              borderRadius: radiusTokens.md,
              boxShadow: "none",
            },
            "& .MuiMenu-list.MuiList-padding.MuiList-root": {
              padding: 0,
            },
            "& .MuiBackdrop-root.MuiBackdrop-invisible.MuiModal-backdrop": {
              backdropFilter: "none",
              backgroundColor: "transparent",
            },
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontSize: fontSizes.body1,
            backgroundColor: menuItem["default"]["bg"],
            color: menuItem["default"]["fg"],
            padding: "14px 18px",
            borderBottom: "none",
            "&:hover": {
              backgroundColor: menuItem["hover"]["bg"],
              color: menuItem["hover"]["fg"],
            },
            "&.Mui-selected": {
              backgroundColor: main.primary,
              color: "#FFFFFF",
            },
            "&.Mui-selected:hover": {
              backgroundColor: menuItem["hover"]["bg"],
              color: menuItem["hover"]["fg"],
            },
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: `1px solid ${mode === "light" ? "rgba(0,0,0,0.12)" : "rgba(220,220,255,0.12)"}`,
            whiteSpace: "nowrap",
            padding: `6px ${spacing[3]}`,
          },
          head: {
            padding: `8px ${spacing[3]}`,
            lineHeight: 1,
            fontSize: "12px",
            whiteSpace: "nowrap",
            fontWeight: 500,
            backgroundColor: mode == "light" ? "#8F8D8D" : "#8F8D8D33",
            borderBottom: "none",
            color: "#FFFFFF",
            "& *": {
              color: "#FFFFFF !important",
            },
          },
          body: {
            color: fg.primary,
            fontWeight: 400,
          },
        },
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            "&:last-of-type td": {
              borderBottom: "none",
            },
            "& td": {
              overflow: "hidden",
            },
          },
        },
      },
      MuiChip: {
        defaultProps: {
          clickable: false,
          color: "primary",
        },
        styleOverrides: {
          root: {
            width: "fit-content",
            height: "21px",
            fontWeight: 500,
            boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.25)",
            fontSize: "13px",
            borderRadius: spacingTokens.xs,
            "& .MuiChip-icon": {
              fontSize: "18px",
              lineHeight: 1,
            },
            "&.MuiChip-outlined": {
              borderStyle: "solid",
              borderWidth: "0",
            },

            // SUCCESS
            [`&.MuiChip-colorSuccess`]: {
              backgroundColor: status.success.primary,
              "& * ": {
                color: "#ffffff",
              },
            },
            [`&.MuiChip-colorSuccess.MuiChip-outlined`]: {
              backgroundColor: status.success.secondary,
              "& *": {
                color: status.success.primary,
              },
            },

            // ERROR
            [`&.MuiChip-colorError`]: {
              backgroundColor: status.error.primary,
              "& *": {
                color: "#ffffff",
              },
            },
            [`&.MuiChip-colorError.MuiChip-outlined`]: {
              backgroundColor: status.error.secondary,
              "& *": {
                color: status.error.primary,
              },
            },

            // WARNING
            [`&.MuiChip-colorWarning`]: {
              backgroundColor: status.warning.primary,
              "& *": {
                color: "#ffffff",
              },
            },
            [`&.MuiChip-colorWarning.MuiChip-outlined`]: {
              backgroundColor: status.warning.secondary,
              "& *": {
                color: status.warning.primary,
              },
            },

            // INFO
            [`&.MuiChip-colorInfo`]: {
              backgroundColor: status.info.primary,
              "& *": {
                color: "#ffffff",
              },
            },
            [`&.MuiChip-colorInfo.MuiChip-outlined`]: {
              backgroundColor: status.info.secondary,
              "& *": {
                color: status.info.primary,
              },
            },

            // PRIMARY
            [`&.MuiChip-colorPrimary`]: {
              backgroundColor: status.primary.primary,
              "& *": {
                color: "#ffffff",
              },
            },
            [`&.MuiChip-colorPrimary.MuiChip-outlined`]: {
              backgroundColor: status.primary.secondary,
              "& *": {
                color: status.primary.primary,
              },
            },

            // NEUTRAL
            [`&.MuiChip-colorNeutral`]: {
              backgroundColor: status.neutral.primary,
              "& *": {
                color: "#ffffff",
              },
            },
            [`&.MuiChip-colorNeutral.MuiChip-outlined`]: {
              backgroundColor: status.neutral.secondary,
              "& *": {
                color: status.neutral.primary,
              },
            },
            // SECONDARY
            [`&.MuiChip-colorSecondary`]: {
              backgroundColor: status.secondary.primary,
              "& *": {
                color: "#ffffff",
              },
            },
            [`&.MuiChip-colorSecondary.MuiChip-outlined`]: {
              backgroundColor: status.secondary.secondary,
              "& *": {
                color: status.secondary.primary,
              },
            },
          },
        },
      },
    },
  });

  return responsiveFontSizes(theme);
}

export default configureTheme;
