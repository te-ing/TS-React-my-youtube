import React, { useEffect, useState, SyntheticEvent } from "react";
import { Chip, Stack } from "@mui/material";
import { getItem, setItem } from "@/utils/storage";

type RecentSearchWordProps = {
  func: any; // React.FC;
  searchComplete: boolean;
};

const RecentSearchWord = ({ func, searchComplete }: RecentSearchWordProps) => {
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
    const clickedWord = e.currentTarget.textContent;
    func(clickedWord);
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
