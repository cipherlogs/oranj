import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey, blue, deepOrange } from "@mui/material/colors";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import ThemeContext from "@context/ThemeContext";

const darkMode = {};
const lightMode = {};

const AppThemeProvider = (props) => {
  // const prefersDarkMode = useMediaQuery ("(prefers-color-scheme: dark)");
  const prefersDarkMode = false;
  const [mode, setMode] = useState(prefersDarkMode ? "dark" : "light");

  const toggleTheme = () =>
    mode === "dark" ? setMode("light") : setMode("dark");

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "dark" ? darkMode : lightMode),
      primary: { main: "#1565c0" },
      secondary: { main: deepOrange["A400"] },
    },
    typography: { fontFamily: "'IBM Plex Sans', sans-serif" },
    components: {
      MuiChip: {
        styleOverrides: {
          backgroundColor: blue[400],
        },
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default AppThemeProvider;
