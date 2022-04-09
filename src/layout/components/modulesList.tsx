import HandymanIcon from "@mui/icons-material/Handyman";
import SchoolIcon from "@mui/icons-material/School";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DashboardIcon from "@mui/icons-material/Dashboard";

export const modules = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: <DashboardIcon color="primary" />,
  },
  { name: "Learning", link: "/learning", icon: <SchoolIcon color="primary" /> },
  {
    name: "Library",
    link: "/library",
    icon: <LibraryBooksIcon color="primary" />,
  },
  { name: "Tools", link: "/tools", icon: <HandymanIcon color="primary" /> },
];
