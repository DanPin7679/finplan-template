import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import styles from "../Layout.module.css";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MoreIcon from "@mui/icons-material/MoreVert";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useDispatch } from "react-redux";
import { uiAction } from "../../store/uiState/ui-slice";
import { Stack } from "@mui/material";

import { modules } from "./modulesList";
import { useAppSelector } from "../../store/hooks";

export default function ButtonAppBar() {
  const sideBarOpen = useAppSelector((state) => state.ui.drawerIsVisible);
  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    console.log("close navbar");
    dispatch(uiAction.toggle());
  };
  const handleSettingOpen = () => {
    dispatch(uiAction.toggleSetting());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          // backgroundColor: "transparent",
          borderBottom: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <Toolbar>
          <Stack
            width="100%"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleDrawerOpen}
              >
                {sideBarOpen ? <ChevronLeftIcon /> : <MenuIcon />}
              </IconButton>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
              {modules.map((module) => (
                <Typography>
                  <Link to={module.link}>{module.name}</Link>
                </Typography>
              ))}
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
              {" "}
              <Button color="inherit">Login</Button>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleSettingOpen}
              >
                <MoreIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
