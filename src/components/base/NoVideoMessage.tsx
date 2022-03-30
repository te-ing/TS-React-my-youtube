import React from "react";
import Box from "@mui/material/Box";

interface MessageProps {
  tab?: string;
}

const NoVideoMessage = ({ tab }: MessageProps) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", color: "divider" }}>
      <h3>:( 해당 탭의 영상이 존재하지 않습니다</h3>
    </Box>
  );
};

export default NoVideoMessage;
