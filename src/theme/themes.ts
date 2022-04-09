import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { blue } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: blue[500],
    },
    secondary: {
      // Purple and green play nicely together.
      main: purple[100],
    },
    text: {
      primary: "#fff",
    },
    background: { default: "rgb(0, 30, 60)", paper: "rgb(10, 40, 70)" },
  },
});
