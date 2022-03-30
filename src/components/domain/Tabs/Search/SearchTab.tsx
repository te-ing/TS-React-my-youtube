import React, { useState } from "react";
import { Box } from "@mui/material";
import { getSearch } from "@/api/axios";
import VideoList from "../../../base/VideoList";
import RecentSearchWord from "./RecentSearchWord";
import { addItem, getItem } from "@/utils/storage";
import SearchTabInput from "./SearchTabInput";

const searchBoxStyle = { width: "80%", maxWidth: "480px" };

const SearchTab = () => {
  const [searchComplete, setsearchComplete] = useState(false);
  const [searchResult, setSearchResult] = useState({});

  const searchInput = async (searchValue: string) => {
    if (!getItem("search")) {
      setSearchResult(await getSearch(searchValue));
      addItem("search", searchValue);
      setsearchComplete(!searchComplete);
    } else if (!getItem("search").includes(searchValue)) {
      setSearchResult(await getSearch(searchValue));
      addItem("search", searchValue);
      setsearchComplete(!searchComplete);
    }
  };

  const recentSearch = async (e: React.SyntheticEvent<Element, Event>) => {
    const recentSearchWord = e.currentTarget.textContent;
    setSearchResult(await getSearch(recentSearchWord as string));
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", mb: "10px" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={searchBoxStyle}>
            <SearchTabInput search={searchInput} />
            <RecentSearchWord
              search={recentSearch}
              searchComplete={searchComplete}
            />
          </Box>
        </Box>
      </Box>
      {Object.keys(searchResult).length ? (
        <VideoList
          videos={searchResult}
          tab="search"
          buttonClick={() => null}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default SearchTab;
