import * as React from "react";
import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";
import HandymanIcon from "@mui/icons-material/Handyman";
import SchoolIcon from "@mui/icons-material/School";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { modules } from "./modulesList";
import { useAppSelector } from "../../store/hooks";
import { textAlign } from "@mui/system";

export const moduleIcons = [
  { name: "Dashboard", link: "/dashboard", icon: DashboardIcon },
  { name: "Learning", link: "/learning", icon: SchoolIcon },
  { name: "Library", link: "/library", icon: LibraryBooksIcon },
  { name: "Tools", link: "/tools", icon: HandymanIcon },
];

const SideBar = () => {
  const sideBarOpen = useAppSelector((state) => state.ui.drawerIsVisible);

  return (
    <>
      {sideBarOpen === true && (
        <Paper
          sx={{
            margin: "10px",
            height: "100%",
          }}
        >
          <MenuList>
            <Typography
              variant="h6"
              sx={{ marginBottom: "50px", textAlign: "center" }}
            >
              Welcome Dany
            </Typography>
            {modules.map((module) => (
              <MenuItem>
                <ListItemIcon>{module.icon}</ListItemIcon>
                <ListItemText>{module.name}</ListItemText>
              </MenuItem>
            ))}
          </MenuList>
        </Paper>
      )}
    </>
  );
};

export default SideBar;
