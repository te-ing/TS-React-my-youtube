import React, { SyntheticEvent, useState } from "react";
import { Box, Input, IconButton } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

type SearchProps = {
  search: (arg: string) => void;
};

interface Searching extends SyntheticEvent {
  key?: string;
}

const searchBoxStyle = { width: "80%", maxWidth: "480px" };
const SearchTabInput = ({ search }: SearchProps) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: Searching) => {
    if (e.key === "Enter" || !e.key) {
      e.preventDefault();
      search(searchValue);
      setSearchValue("");
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Input
        placeholder="검색어를 입력하세요"
        sx={searchBoxStyle}
        value={searchValue}
        onKeyPress={handleSearch}
        autoFocus={true}
        required={true}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        data-testid="searchTabInput"
      />
      <IconButton
        color="primary"
        type="button"
        sx={{ p: "10px" }}
        onClick={handleSearch}
        data-testid="searchTabInputButton"
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchTabInput;
