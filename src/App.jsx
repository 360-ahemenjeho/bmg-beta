import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { useColor } from "@/contexts/color";
import { useMemo } from "react";
import { configureDashboardTheme } from "@/themes";
import Routes from "@/routes";

function App() {
  const colors = useColor();
  const dashboardTheme = useMemo(
    () =>
      configureDashboardTheme({
        colors,
      }),
    [colors],
  );

  return (
    <BrowserRouter>
      <ThemeProvider theme={dashboardTheme}>
        <CssBaseline></CssBaseline>
        <Routes></Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
