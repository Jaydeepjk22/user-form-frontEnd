import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#000000",
    },
    text: {
      primary: "#000000",
    },
  },
  typography: {
    fontFamily: "sans-serif",
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderColor: "#E75480",
        },
      },
    },
  },
});

export default theme;
