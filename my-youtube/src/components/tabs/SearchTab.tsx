import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchTab = () => {
  const [search, setSearch] = useState("");
  const searching = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    if(!search) return
    console.log(search);
  }

  return (
    <>
    <Box sx={{ display:"flex", justifyContent:"center", mb: "30px"}}>
      <Box component="form" sx={{display:"flex",justifyContent:"center",width: "100%" }}>
          <Input placeholder="검색어를 입력하세요" sx={{ width: "80%", maxWidth: "480px" }}
        value={search}
        onKeyPress={(e)=> searching(e)}
        onChange={(e) => {
          setSearch(e.target.value);
        }}  />
        <IconButton color="primary" type="submit" sx={{ p: '10px'}} onClick={(e) => searching(e)}>
            <SearchIcon />
        </IconButton>
      </Box>
    </Box>
      <Box>{search}</Box>
  </>
  );
}

export default SearchTab;
