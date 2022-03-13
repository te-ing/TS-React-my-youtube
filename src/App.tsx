import React from "react";
import Header from "@/components/base/Header";
import MainTabs from "@/components/domain/Tabs/MainTabs";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/styles/theme";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={3}
          autoHideDuration={1500}
          style={{ backgroundColor: theme.palette.secondary.light }}
        >
          <Header />
          <MainTabs />
        </SnackbarProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
