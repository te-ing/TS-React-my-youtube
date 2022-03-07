import React from "react";
import { IVideo } from "@/types/video";
import { Card, Grid, Typography, Box } from "@mui/material";
import styled from "@emotion/styled";
import { replaceSingleQuote } from "@/utils/replaceSingleQuote";
import SearchTabButton from "../domain/Tabs/Search/SearchTabButton";
import StoredTabButton from "./StoredTabButton";

const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const dateToYMD = (data: string) => {
  return `${data.slice(0, 4)}년 ${data.slice(5, 7)}월 ${data.slice(8, 10)}일`;
};

type VideoListProps = {
  videos: IVideo[];
  tab?: string;
  buttonClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const VideoList = ({ videos, tab, buttonClick }: VideoListProps) => {
  return (
    <>
      <article>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={2}>
          {videos.map((prop: IVideo, index: number) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <iframe
                width="100%"
                height="250vw"
                key={prop.videoId}
                title={prop.videoId}
                src={`https://www.youtube.com/embed/${prop.videoId}`}
              ></iframe>
              <Card sx={{ p: "4px", position: "relative" }}>
                <Title>{prop.title && replaceSingleQuote(prop.title)}</Title>
                <Typography sx={{ fontSize: 12 }} color="text.secondary">
                  {prop.channelTitle}
                </Typography>
                <Typography sx={{ fontSize: 12 }} color="text.secondary">
                  {prop.date && dateToYMD(prop.date)}
                </Typography>
                <Box
                  data-id={prop.videoId}
                  sx={{
                    display: "flex",
                    gap: "4px",
                    position: "absolute",
                    right: "4px",
                    bottom: "4px",
                  }}
                >
                  {tab === "search" ? (
                    <SearchTabButton prop={prop} />
                  ) : (
                    <StoredTabButton video={prop} buttonClick={buttonClick} />
                  )}
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </article>
    </>
  );
};

export default VideoList;
