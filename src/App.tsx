import {
  AppBar,
  Button,
  Card,
  Paper,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { uiAction } from "./store/uiState/ui-slice";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./theme/themes";
import { CustomThemes } from "./store/uiState/ui-data-models";

const App = () => {
  const drawerOpen = useAppSelector((state) => state.ui.drawerIsVisible);
  const settingOpen = useAppSelector((state) => state.ui.settingIsVisible);
  const customTheme = useAppSelector((state) => state.ui.customTheme);
  const dispatch = useAppDispatch();

  const handleThemeSelection = (selectedTheme: CustomThemes) => {
    dispatch(uiAction.colorsSelection(selectedTheme));
  };

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
      <Paper
        sx={{
          width: "500px",
          padding: "20px",
        }}
      >
        <br></br>
        <Typography variant="h6">Select your Theme</Typography>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button
            variant="outlined"
            onClick={() => handleThemeSelection(CustomThemes.light)}
          >
            Light
          </Button>
          <Button
            variant="outlined"
            onClick={() => handleThemeSelection(CustomThemes.dark)}
          >
            Dark
          </Button>
        </div>

        <br></br>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
