import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Header = () => {
  return (
    <Box sx={{display: "flex", justifyContent: "center"}}>
      <Button sx={{ fontSize: 20, fontWeight: "bold" }}>
      <YouTubeIcon sx={{ fontSize: 30, mr:"5px"}}/>
        MY OWN YOUTUBE
      </Button>
    </Box>
  );
}

export default Header;
