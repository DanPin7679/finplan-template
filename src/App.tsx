import { Button, Card, Paper, Switch, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { uiAction } from "./store/uiState/ui-slice";
import { Colors } from "./store/uiState/ui-data-models";

const palettes: Colors[] = [
  {
    primary: "#29b6f6",
    secondary: "#9c27b0",
    background: "#1a2035;",
    paper: "#202940",
    text: "rgb(255,255,255)",
    icon: "rgba(255,255,255,0.5)",
  },
  {
    primary: "#ce93d8",
    secondary: "#9c27b0",
    background: "#1a2035;",
    paper: "#aa37bb",
    text: "rgb(255,255,255)",
    icon: "rgba(255,255,255,0.5)",
  },
  {
    primary: "#ffa726",
    secondary: "#9c27b0",
    background: "#1a2035;",
    paper: "#f57c00",
    text: "rgb(255,255,255)",
    icon: "rgba(255,255,255,0.5)",
  },
];

const App = () => {
  const drawerOpen = useAppSelector((state) => state.ui.drawerIsVisible);
  const settingOpen = useAppSelector((state) => state.ui.settingIsVisible);
  const colorsSelected = useAppSelector((state) => state.ui.colorsSelected);
  const dispatch = useAppDispatch();

  const handleDrawerOpen = () => {
    dispatch(uiAction.toggle());
  };
  const handleSettingOpen = () => {
    dispatch(uiAction.toggleSetting());
  };
  const handleColorSelection = (index: number) => {
    dispatch(uiAction.colorsSelection(palettes[index]));
  };

  return (
    <Paper
      sx={{
        backgroundColor: colorsSelected.paper,
        width: "500px",
        padding: "20px",
      }}
    >
      <Switch defaultChecked onChange={handleDrawerOpen} />
      <Typography variant="h5" color={"white"}>
        {drawerOpen === true ? "Drawer is open" : "Drawer is close"}
      </Typography>
      <br></br>
      <Switch color="warning" onChange={handleSettingOpen} />
      <Typography variant="h5" color={"white"}>
        {settingOpen === true ? "Setting is open" : "Setting is close"}
      </Typography>
      <br></br>
      <h3 style={{ color: "white" }}>Select your favorite color</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "100px 100px 100px",
          gap: "10px",
        }}
      >
        {palettes.map((palette, index) => (
          <Button
            variant="contained"
            sx={{ backgroundColor: palette.primary }}
            onClick={() => handleColorSelection(index)}
          >
            {index}
          </Button>
        ))}
      </div>
      <h3 style={{ color: colorsSelected.primary }}>
        React TypeScript Webpack Starter Template
      </h3>
    </Paper>
  );
};

export default App;
