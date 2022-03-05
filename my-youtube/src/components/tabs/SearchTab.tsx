import React, { useState } from 'react';
import { Box, Input, IconButton } from '@mui/material';
import { getSearch, DUMMY } from '@/api/axios';
import VideoList from '../VideoList';
import {
  Search as SearchIcon,
} from "@mui/icons-material";
import RecentSearchWord from './RecentSearchWord';
import { addItem, getItem } from '@/hooks/storage';

const searchBoxStyle = { width: "80%", maxWidth: "480px" };

const SearchTab = () => {
  const [search, setSearch] = useState("");
  const [searchComplete, setsearchComplete] = useState(false);
  const [searchResult, setSearchResult] = useState(DUMMY);
  
  const searching = async (e?: any) => {
    if (typeof e === "string") setSearchResult(await getSearch(e));
    if (e?.key === "Enter" || !e) {
      e?.preventDefault();
      if (!search) return
      if (!getItem("search")) {
        setSearchResult(await getSearch(search));
        addItem("search", search);
        setsearchComplete(!searchComplete);
      } else if(!getItem("search").includes(search)){
        setSearchResult(await getSearch(search));
        addItem("search", search);
        setsearchComplete(!searchComplete);
      }
      setSearch("")
    }
  } 

  return (
    <>
    <Box sx={{ display:"flex", flexDirection: "column", mb: "10px"}}>
      <Box component="form" sx={{display:"flex",justifyContent:"center"}}>
          <Input placeholder="검색어를 입력하세요" sx={searchBoxStyle}
        value={search}
        onKeyPress={(e)=> searching(e)}
        onChange={(e) => {
          setSearch(e.target.value);
        }} />
        <IconButton color="primary" type="button" sx={{ p: '10px'}} onClick={() => searching()}>
            <SearchIcon />
        </IconButton>
        </Box>
        <Box sx={{display:"flex",justifyContent:"center"}}>
              <Box sx={searchBoxStyle}>
            <RecentSearchWord func={searching} searchComplete={searchComplete} />
          </Box>
        </Box>
    </Box>
    <VideoList props={searchResult} tab="search" />
  </>
  );
}

export default SearchTab;
