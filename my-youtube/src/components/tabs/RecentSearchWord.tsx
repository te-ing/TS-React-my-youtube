import React, { useEffect, useState } from 'react';
import { Chip , Stack , } from '@mui/material';
import { getItem, setItem } from '@/hooks/storage';

const RecentSearchWord = ({ func, searchComplete }: any) => {
  const [words, setWords] = useState(getItem("search"));
  useEffect(() => {
    setWords(getItem("search"));
    return 
  }, [searchComplete])

  
  const handleDelete = (e: any) => {
    const clickedWord = e.currentTarget.previousElementSibling?.innerText;
    const filteredItem = getItem("search").filter((search: string) => search !== clickedWord)
    setWords(filteredItem);
    setItem("search", JSON.stringify(filteredItem));
  };

  const handleClick = (e: any) => {
    const clickedWord = e.currentTarget.innerText;
    func(clickedWord);
  };
  return (
    <>
      <Stack direction="row" spacing={1} sx={{ p: "10px 0", overflow: "auto" }} >
        {words?.map((word: string) => { return <Chip key={Date.now() + Math.random()} label={word} variant="outlined" onClick={handleClick} onDelete={handleDelete} /> })}
    </Stack>
    </>
  );
}

export default RecentSearchWord;
