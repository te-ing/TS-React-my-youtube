import React, { useState } from 'react';
import { Box, Input, IconButton, Button } from '@mui/material';
import { getSearch, DUMMY } from '@/api/axios';
import VideoList from '../VideoList';
import {
  Search as SearchIcon,
} from "@mui/icons-material";

const SearchTab = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(DUMMY);
  const searching = async (e?: React.KeyboardEvent<HTMLDivElement>) => {
    if (e?.key === "Enter" || !e) {
      e?.preventDefault();
      if (!search) return
      setSearchResult(await getSearch(search));
    }
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
        <IconButton color="primary" type="button" sx={{ p: '10px'}} onClick={() => searching()}>
            <SearchIcon />
        </IconButton>
      </Box>
    </Box>
    <VideoList props={searchResult} tab="search" />
  </>
  );
}

export default SearchTab;
