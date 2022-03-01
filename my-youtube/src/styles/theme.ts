import { createTheme } from "@mui/material/styles";
import { red, blue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      light: red[500],
      main: "#FF0000",
      dark: red[800],
    },
    secondary: {
      light: blue[500],
      main: blue[700],
      dark: blue[800],
    },
  },
});

export default theme;
