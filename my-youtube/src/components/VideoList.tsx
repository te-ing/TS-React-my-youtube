import React from 'react';
import { IVideo } from '@/types/IVideo';
import { Card, Grid, Typography, Box } from '@mui/material';
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

type Props = {
  props: IVideo[];
  tab?: string;
}

const VideoList: React.FC<any> = ({ props, tab }: Props) => {

  return (
    <>
    <article>
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={2}>
        {props.map((prop: IVideo, index: number) => 
        <Grid item xs={4} sm={4} md={4} key={index} >
            <iframe width="100%" height="250vw" key={prop.videoId} title={prop.videoId} src={`https://www.youtube.com/embed/${prop.videoId}`}></iframe>
            <Card sx={{ p: "4px", position: "relative"}}>
              <Title>
                {replaceSingleQuote(prop.title)}
              </Title>
              <Typography sx={{ fontSize: 12 }} color="text.secondary">
                {prop.channelTitle}
              </Typography>
              <Typography sx={{ fontSize: 12 }} color="text.secondary">
                {dateToYMD(prop.date)}
              </Typography>
              <Box data-item={JSON.stringify(prop)} sx={{ display: "flex", gap: "4px", position: "absolute", right: "4px", bottom: "4px" }}>
                {tab === "search" ? <SearchTabButton prop={prop} /> : ""}
              </Box>
            </Card>
          </Grid >
        )}
        </Grid>
    </article>
  </>
  );
}

export default VideoList;
