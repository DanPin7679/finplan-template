import * as React from "react";
import {
  AppBar,
  Button,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { uiAction } from "../../store/uiState/ui-slice";
import { lightTheme, darkTheme } from "../../theme/themes";
import { CustomThemes } from "../../store/uiState/ui-data-models";

const Settings = () => {
  const customTheme = useAppSelector((state) => state.ui.customTheme);
  const dispatch = useAppDispatch();

  const handleThemeSelection = (selectedTheme: CustomThemes) => {
    dispatch(uiAction.colorsSelection(selectedTheme));
  };

  const handleSettingOpen = () => {
    dispatch(uiAction.toggleSetting());
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
    <Paper
      sx={{
        height: "100%",
        padding: "20px",
        margin: "5px",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="h5">Settings</Typography>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          onClick={handleSettingOpen}
        >
          <CloseIcon />
        </IconButton>
      </Stack>
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
  );
};

export default Settings;
