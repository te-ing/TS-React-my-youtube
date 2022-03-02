import React from 'react';
import { ISearchResult } from '@/types/ISearchResult';
import { Card, Grid, Typography, Button, Box } from '@mui/material';
import styled from '@emotion/styled';
import { replaceSingleQuote } from '@/utils/ReplaceSingleQuote';
import SearchTabButton from './tabs/SearchTabButton';

const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
const dateToYMD = (data: string) => {
  return `${data.slice(0,4)}년 ${data.slice(5,7)}월 ${data.slice(8,10)}일`
}

const VideoGrid: React.FC<any> = ({ props, tab }) => {

  return (
    <>
    <article>
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={2}>
        {props.map((item: ISearchResult, index: number) => 
        <Grid item xs={4} sm={4} md={4} key={index} >
            <iframe width="100%" height="250vw" key={item.id.videoId} title={item.id.videoId} src={`https://www.youtube.com/embed/${item.id.videoId}`}></iframe>
            <Card sx={{ p: "4px", position: "relative"}}>
              <Title>
                {replaceSingleQuote(item.snippet.title)}
              </Title>
              <Typography sx={{ fontSize: 12 }} color="text.secondary">
                {item.snippet.channelTitle}
              </Typography>
              <Typography sx={{ fontSize: 12 }} color="text.secondary">
                {dateToYMD(item.snippet.publishedAt)}
              </Typography>
              <Box data-item={JSON.stringify(item)} sx={{ display: "flex", gap: "4px", position: "absolute", right: "4px", bottom: "4px" }}>
                <SearchTabButton prop={item}/>
              </Box>
            </Card>
          </Grid >
        )}
        </Grid>
    </article>
  </>
  );
}

export default VideoGrid;
