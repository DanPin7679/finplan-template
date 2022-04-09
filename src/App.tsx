import { useAppSelector } from "./store/hooks";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./theme/themes";
import { CustomThemes } from "./store/uiState/ui-data-models";
import Layout from "./layout/layout";

const App = () => {
  const customTheme = useAppSelector((state) => state.ui.customTheme);

  const getTheme = () => {
    switch (customTheme) {
      case CustomThemes.light:
        return lightTheme;
        break;
      case CustomThemes.dark:
        return darkTheme;
        break;
      default:
        return lightTheme;
    }
  };

  return (
    <ThemeProvider theme={getTheme()}>
      <CssBaseline />
      <Layout></Layout>
    </ThemeProvider>
  );
};

export default App;
