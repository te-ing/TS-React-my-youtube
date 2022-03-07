import React from 'react';
import Header from '@/components/base/Header';
import MainTabs from '@/components/domain/Tabs/MainTabs';
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
