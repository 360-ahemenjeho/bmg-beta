export const THEME_KEY = "theme";

export const fontSizes = {
  h1: "25px",
  h2: "20.96px",
  h3: "16px",
  caption: "12px",
  body1: "14px",
  body2: "14px",
};

export const typefaces = {
  default: "Roboto",
};

export const buttonColors = {
  light: {
    destructive: {
      default: {
        bg: {
          normal: "#DC143C",
          hover: "#C8102E",
          focus: "#B40C20",
        },
        border: {
          normal: "#E63946",
          hover: "#DC2C39",
          focus: "#C8102E",
        },
        fg: {
          normal: "#FAFAFA",
          hover: "#FAFAFA",
          focus: "#FAFAFA",
        },
      },
      outline: {
        bg: {
          normal: "transparent",
          hover: "#DC143C",
          focus: "#DC143C",
        },
        border: {
          normal: "#E63946",
          hover: "#DC2C39",
          focus: "#C8102E",
        },
        fg: {
          normal: "#DC143C",
          hover: "#FAFAFA",
          focus: "#FAFAFA",
        },
      },
      bare: {
        bg: {
          normal: "transparent",
          hover: "#C8102E",
          focus: "#C8102E",
        },
        border: {
          normal: "transparent",
          hover: "#DC2C39",
          focus: "#C8102E",
        },
        fg: {
          normal: "#DC143C",
          hover: "#E63946",
          focus: "#E63946",
        },
      },
      ghost: {
        bg: {
          normal: "#DC143C20",
          hover: "#DC143C33",
          focus: "#DC143C40",
        },
        border: {
          normal: "#DC143C20",
          hover: "#DC143C33",
          focus: "#DC143C40",
        },
        fg: {
          normal: "#E63946",
          hover: "#E63946",
          focus: "#E63946",
        },
      },
    },
    secondary: {
      outline: {
        bg: { normal: "#FFFFFF", hover: "#FFFFFF", focus: "#FFFFFF" },
        border: { normal: "#FFFFFF", hover: "#FFFFFF", focus: "#FFFFFF" },
        fg: { normal: "#4B566A", hover: "#4B566A", focus: "#4B566A" },
      },
      default: {
        bg: {
          normal: "#EFF0F0",
          hover: "#e0e2e2",
          focus: "#d6d8d8",
        },
        border: { normal: "#EFF0F0", hover: "#e0e2e2", focus: "#d6d8d8" },
        fg: {
          normal: "#000000",
          hover: "#000000",
          focus: "#000000",
        },
      },
      bare: {
        bg: {
          normal: "transparent",
          hover: "transparent",
          focus: "transparent",
        },
        border: {
          normal: "transparent",
          hover: "transparent",
          focus: "transparent",
        },
        fg: { normal: "#4B566A", hover: "#4B566A", focus: "#4B566A" },
      },
      ghost: {
        bg: {
          normal: "#EFF0F0",
          hover: "#EFF0F0",
          focus: "#EFF0F0",
        },
        border: {
          normal: "#EFF0F0",
          hover: "#EFF0F0",
          focus: "#EFF0F0",
        },
        fg: {
          normal: "#00000045",
          hover: "#00000045",
          focus: "#00000045",
        },
      },
    },
    primary: {
      default: {
        bg: { normal: "#2C3891", hover: "#3744a6", focus: "#192472" },
        border: { normal: "#2C3891", hover: "#3744a6", focus: "#192472" },
        fg: { normal: "#FFFEFE", hover: "#FFFEFE", focus: "#FFFEFE" },
      },
      outline: {
        bg: {
          normal: "transparent",
          hover: "rgba(31, 102, 229, 0.08)",
          focus: "rgba(31, 102, 229, 0.16)",
        },
        border: { normal: "#1F66E5", hover: "#2C74F0", focus: "#1958C8" },
        fg: { normal: "#1F66E5", hover: "#1958C8", focus: "#174FB5" },
      },
      bare: {
        bg: {
          normal: "transparent",
          hover: "rgba(31, 102, 229, 0.08)",
          focus: "rgba(31, 102, 229, 0.16)",
        },
        border: {
          normal: "transparent",
          hover: "transparent",
          focus: "transparent",
        },
        fg: { normal: "#1F66E5", hover: "#1958C8", focus: "#174FB5" },
      },
      ghost: {
        bg: {
          normal: "#2C389120",
          hover: "#2C389120",
          focus: "#2C389120",
        },
        border: {
          normal: "#2C389120",
          hover: "#2C389120",
          focus: "#2C389120",
        },
        fg: { normal: "#2C3891", hover: "#2C3891", focus: "#2C3891" },
      },
    },
  },
  dark: {
    primary: {
      default: {
        bg: {
          normal: "#6256B8",
          hover: "#4B3F9D",
          focus: "#3D3380",
        },
        border: {
          normal: "#7D73CC",
          hover: "#7D73CC",
          focus: "#7D73CC",
        },
        fg: {
          normal: "#1A1A1A",
          hover: "#1A1A1A",
          focus: "#1A1A1A",
        },
      },
      outline: {
        bg: {
          normal: "transparent",
          hover: "#4B3F9D",
          focus: "#3D3380",
        },
        border: {
          normal: "#7D73CC",
          hover: "#7D73CC",
          focus: "#7D73CC",
        },
        fg: {
          normal: "#6256B8",
          hover: "#1A1A1A",
          focus: "#1A1A1A",
        },
      },
      bare: {
        bg: {
          normal: "transparent",
          hover: "#4B3F9D",
          focus: "#3D3380",
        },
        border: {
          normal: "transparent",
          hover: "#4B3F9D",
          focus: "#3D3380",
        },
        fg: {
          normal: "#6256B8",
          hover: "#1A1A1A",
          focus: "#1A1A1A",
        },
      },
      ghost: {
        bg: {
          normal: "#6256B840",
          hover: "#4B3F9D",
          focus: "#3D3380",
        },
        border: {
          normal: "#6256B840",
          hover: "#6256B8",
          focus: "#6256B8",
        },
        fg: {
          normal: "#6256B8",
          hover: "#6256B8",
          focus: "#6256B8",
        },
      },
    },
    destructive: {
      default: {
        bg: {
          normal: "#DC143C",
          hover: "#C8102E",
          focus: "#B40C20",
        },
        border: {
          normal: "#E63946",
          hover: "#DC2C39",
          focus: "#C8102E",
        },
        fg: {
          normal: "#FAFAFA",
          hover: "#FAFAFA",
          focus: "#FAFAFA",
        },
      },
      outline: {
        bg: {
          normal: "transparent",
          hover: "#DC143C",
          focus: "#DC143C",
        },
        border: {
          normal: "#E63946",
          hover: "#DC2C39",
          focus: "#C8102E",
        },
        fg: {
          normal: "#DC143C",
          hover: "#FAFAFA",
          focus: "#FAFAFA",
        },
      },
      bare: {
        bg: {
          normal: "transparent",
          hover: "#C8102E",
          focus: "#C8102E",
        },
        border: {
          normal: "transparent",
          hover: "#DC2C39",
          focus: "#C8102E",
        },
        fg: {
          normal: "#DC143C",
          hover: "#E63946",
          focus: "#E63946",
        },
      },
      ghost: {
        bg: {
          normal: "#DC143C20",
          hover: "#DC143C33",
          focus: "#DC143C40",
        },
        border: {
          normal: "#DC143C20",
          hover: "#DC143C33",
          focus: "#DC143C40",
        },
        fg: {
          normal: "#E63946",
          hover: "#E63946",
          focus: "#E63946",
        },
      },
    },
    secondary: {
      outline: {
        bg: {
          normal: "hsla(0, 0%, 20%, 1)",
          hover: "hsla(0, 0%, 8%, 1)",
          focus: "hsla(0, 0%, 8%, 1)",
        },
        border: {
          normal: "hsla(0, 0%, 13%, 1)",
          hover: "hsla(0, 0%, 13%, 1)",
          focus: "hsla(0, 0%, 22%, 1)",
        },
        fg: {
          normal: "hsla(0, 0%, 98%, 1)",
          hover: "hsla(0, 0%, 98%, 1)",
          focus: "hsla(0, 0%, 98%, 1)",
        },
      },
      default: {
        bg: {
          normal: "hsla(0, 0%, 35%, 1)",
          hover: "hsla(0, 0%, 32%, 1)",
          focus: "hsla(0, 0%, 30%, 1)",
        },
        border: {
          normal: "hsla(0, 0%, 25%, 1)",
          hover: "hsla(0, 0%, 27%, 1)",
          focus: "hsla(0, 0%, 27%, 1)",
        },
        fg: {
          normal: "hsla(0, 0%, 80%, 1)",
          hover: "hsla(0, 0%, 70%, 1)",
          focus: "hsla(0, 0%, 70%, 1)",
        },
      },
      bare: {
        bg: {
          normal: "transparent",
          hover: "hsla(0, 0%, 22%, 1)",
          focus: "hsla(0, 0%, 22%, 1)",
        },
        border: {
          normal: "transparent",
          hover: "hsla(0, 0%, 27%, 1)",
          focus: "hsla(0, 0%, 27%, 1)",
        },
        fg: {
          normal: "hsla(0, 0%, 98%, 1)",
          hover: "hsla(0, 0%, 98%, 1)",
          focus: "hsla(0, 0%, 98%, 1)",
        },
      },
      ghost: {
        bg: {
          normal: "hsla(0, 0%, 20%, 1)",
          hover: "hsla(0, 0%, 22%, 1)",
          focus: "hsla(0, 0%, 22%, 1)",
        },
        border: {
          normal: "hsla(0, 0%, 25%, 1)",
          hover: "hsla(0, 0%, 27%, 1)",
          focus: "hsla(0, 0%, 27%, 1)",
        },
        fg: {
          normal: "hsla(0, 0%, 40%, 1)",
          hover: "hsla(0, 0%, 40%, 1)",
          focus: "hsla(0, 0%, 40%, 1)",
        },
      },
    },
  },
};

export const mainColors = {
  light: {
    primary: "#2C3891",
    secondary: "#4B566A",
    success: "#28A745",
    warning: "#F7941D",
    destructive: "#DC143C",
  },
  dark: {
    primary: "#6256B8",
    secondary: "#A1A3C3",
    success: "#28A745",
    warning: "#FFC107",
    destructive: "#DC143C",
  },
};

export const backgroundColors = {
  light: {
    primary: "#F7F7F7",
    secondary: "#F9FAFB",
    tertiary: "#FFFFFF",
  },
  dark: {
    primary: "#F7F7F7",
    secondary: "#F9FAFB",
    tertiary: "#FFFFFF",
  },
};

export const borderColors = {
  light: {
    primary: "#E5E5E5",
    secondary: "#eeeeee",
    tertiary: "#f7f7f7",
  },
  dark: {
    primary: "#E5E5E5",
    secondary: "#eeeeee",
    tertiary: "#f7f7f7",
  },
};

export const foregroundColors = {
  light: {
    primary: "#000000",
    secondary: "#76778b",
    tertiary: "#b2b4c7",
  },
  dark: {
    primary: "#000000",
    secondary: "#63658F",
    tertiary: "#A1A3C3",
  },
};

export const scrollBarColors = {
  light: {
    track: "hsl(0, 0%, 50%)",
    thumb: "hsl(0, 0%, 20%)",
  },
  dark: {
    track: "hsl(0, 0%, 50%)",
    thumb: "hsl(0, 0%, 80%)",
  },
};

export const inputColors = {
  light: {
    outlined: {
      default: {
        fg: "#4B4B4B",
        placeholder: "#7e7e7e",
        bg: "#F7F7F7",
        border: "#E5E5E5",
      },
      error: {
        fg: "#E95070",
        placeholder: "rgba(233, 80, 112, 0.9)",
        bg: "rgba(233, 80, 112, 0.08)",
        border: "#E95070",
      },
      disabled: {
        fg: "#a9a9a9",
        placeholder: "#bbbbbb",
        bg: "#F7F7F7",
        border: "#E5E5E5",
      },
    },
    filled: {
      default: {
        fg: "#4B4B4B",
        placeholder: "#7e7e7e",
        bg: "#FFFFFF",
        border: "#FFFFFF",
      },
      error: {
        fg: "#E95070",
        placeholder: "rgba(233, 80, 112, 0.9)",
        bg: "rgba(233, 80, 112, 0.08)",
        border: "#E95070",
      },
      disabled: {
        fg: "#a9a9a9",
        placeholder: "#bbbbbb",
        bg: "#FFFFFF",
        border: "#FFFFFF",
      },
    },
  },
  dark: {
    outlined: {
      default: {
        fg: "#4B4B4B",
        placeholder: "#7e7e7e",
        bg: "#F7F7F7",
        border: "#E5E5E5",
      },
      error: {
        fg: "#E95070",
        placeholder: "rgba(233, 80, 112, 0.9)",
        bg: "rgba(233, 80, 112, 0.08)",
        border: "#E95070",
      },
      disabled: {
        fg: "#a9a9a9",
        placeholder: "#bbbbbb",
        bg: "#F7F7F7",
        border: "#E5E5E5",
      },
    },
    filled: {
      default: {
        fg: "#4B4B4B",
        placeholder: "#7e7e7e",
        bg: "#FFFFFF",
        border: "#FFFFFF",
      },
      error: {
        fg: "#E95070",
        placeholder: "rgba(233, 80, 112, 0.9)",
        bg: "rgba(233, 80, 112, 0.08)",
        border: "#E95070",
      },
      disabled: {
        fg: "#a9a9a9",
        placeholder: "#bbbbbb",
        bg: "#FFFFFF",
        border: "#FFFFFF",
      },
    },
  },
};

export const menuColors = {
  light: {
    bg: backgroundColors.light.tertiary,
    fg: foregroundColors.light.secondary,
    border: borderColors.light.tertiary,
  },
  dark: {
    bg: "hsla(0, 0%, 20%, 1)",
    fg: "hsla(0, 0%, 80%, 1)",
    border: "hsla(0, 0%, 25%, 1)",
  },
};

export const menuItemColors = {
  light: {
    default: {
      bg: backgroundColors.light.tertiary,
      fg: foregroundColors.light.secondary,
    },
    hover: {
      bg: mainColors.light.primary,
      fg: "hsl(0, 0%, 100%)",
    },
  },
  dark: {
    default: {
      bg: "hsla(0, 0%, 30%, 1)",
      fg: "rgb(204, 204, 204)",
    },
    hover: {
      bg: "hsla(0, 0%, 25%, 1)",
      fg: "rgb(217, 217, 217)",
    },
  },
};

export const spacing = {
  0: "0px",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "28px",
  8: "32px",
  9: "36px",
  10: "40px",
};

export const radius = {
  0: "0px",
  1: "2px",
  2: "4px",
  3: "6px",
  4: "8px",
  5: "10px",
  6: "12px",
  7: "14px",
  8: "16px",
  9: "18px",
  10: "20px",
  11: "22px",
  12: "24px",
  full: "9999px",
};

export const spacingTokens = {
  xs: spacing[1],
  sm: spacing[2],
  md: spacing[4],
  lg: spacing[6],
  xl: spacing[8],
};

export const radiusTokens = {
  sm: radius[2],
  md: radius[4],
  lg: radius[6],
  xl: radius[8],
};

export const inputHeight = "34px";
export const dashboardNavHeight = "40px";

export const statusColors = {
  light: {
    primary: {
      primary: "#2C3891",
      secondary: "#EFF0F0",
    },
    success: {
      primary: "#05970F",
      secondary: "#EFF0F0",
    },
    error: {
      primary: "#FF0004",
      secondary: "#EFF0F0",
    },
    warning: {
      primary: "#F7941D",
      secondary: "#EFF0F0",
    },
    info: {
      primary: "#13ABBC",
      secondary: "#EFF0F0",
    },
    secondary: {
      primary: "#0A62C7",
      secondary: "#EFF0F0",
    },
    neutral: {
      primary: "#7DBBFF",
      secondary: "#EFF0F0",
    },
  },
  dark: {
    primary: {
      primary: "#2C3891",
      secondary: "#EFF0F0",
    },
    success: {
      primary: "#05970F",
      secondary: "#EFF0F0",
    },
    error: {
      primary: "#FF0004",
      secondary: "#EFF0F0",
    },
    warning: {
      primary: "#F7941D",
      secondary: "#EFF0F0",
    },
    info: {
      primary: "#13ABBC",
      secondary: "#EFF0F0",
    },
    secondary: {
      primary: "#0A62C7",
      secondary: "#EFF0F0",
    },
    neutral: {
      primary: "#7DBBFF",
      secondary: "#EFF0F0",
    },
  },
};
