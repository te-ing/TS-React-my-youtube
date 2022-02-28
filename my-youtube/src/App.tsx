import React from 'react';
import Header from '@/components/Header';
import MainTabs from '@/components/MainTabs';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/styles/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <MainTabs />
      </ThemeProvider>
    </div>
  );
}

export default App;
