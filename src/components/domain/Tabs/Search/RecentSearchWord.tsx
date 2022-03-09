import React, { useEffect, useState, SyntheticEvent } from "react";
import { Chip, Stack } from "@mui/material";
import { getItem, setItem } from "@/utils/storage";

type RecentSearchWordProps = {
  searchComplete: boolean;
  search: (arg: React.SyntheticEvent<Element, Event>) => void;
};

const RecentSearchWord = ({
  search,
  searchComplete,
}: RecentSearchWordProps) => {
  const [words, setWords] = useState(getItem("search"));
  useEffect(() => {
    setWords(getItem("search"));
    return;
  }, [searchComplete]);

  const handleDelete = (e: SyntheticEvent) => {
    const clickedWord = e.currentTarget.previousElementSibling?.innerHTML;
    const filteredItem = getItem("search").filter(
      (search: string) => search !== clickedWord
    );
    setWords(filteredItem);
    setItem("search", JSON.stringify(filteredItem));
  };

  const handleClick = (e: SyntheticEvent) => {
    search(e);
  };

  return (
    <>
      <Stack direction="row" spacing={1} sx={{ p: "10px 0", overflow: "auto" }}>
        {words?.map((word: string) => {
          return (
            <Chip
              key={Date.now() + Math.random()}
              label={word}
              variant="outlined"
              onClick={handleClick}
              onDelete={handleDelete}
            />
          );
        })}
      </Stack>
    </>
  );
};

export default RecentSearchWord;
