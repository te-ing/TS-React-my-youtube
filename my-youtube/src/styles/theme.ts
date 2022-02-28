import { createTheme } from "@mui/material/styles";
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      light: red[500],
      main: "#FF0000",
      dark: red[800],
    },
  },
});

export default theme;
