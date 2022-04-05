import { Switch } from "@mui/material";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { uiAction } from "./store/uiState/ui-slice";

const App = () => {
  const drawerOpen = useAppSelector((state) => state.ui.drawerIsVisible);
  const settingOpen = useAppSelector((state) => state.ui.settingIsVisible);
  const dispatch = useAppDispatch();

  const handleDrawerOpen = () => {
    dispatch(uiAction.toggle());
  };
  const handleSettingOpen = () => {
    dispatch(uiAction.toggleSetting());
  };

  return (
    <>
      <Switch defaultChecked onChange={handleDrawerOpen} />

      {drawerOpen === true ? "Drawer is open" : "Drawer is close"}
      <br></br>
      <Switch color="warning" onChange={handleSettingOpen} />
      {settingOpen === true ? "Setting is open" : "Setting is close"}
      <h3>React TypeScript Webpack Starter Template</h3>
    </>
  );
};

export default App;
