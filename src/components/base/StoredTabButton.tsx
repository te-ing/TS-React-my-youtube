import React, { MouseEventHandler, useEffect, useState } from "react";
import { IVideo } from "@/types/video";
import { IconButton } from "@mui/material";
import { getItem, addItem, setItem } from "@/utils/storage";
import {
  DeleteOutline as DeleteOutlineIcon,
  FavoriteBorder as FavoriteBorderIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  CheckCircle as CheckCircleIcon,
  Favorite as FavoriteIcon,
} from "@mui/icons-material";
import { toggleVideoLikeStatus, toggleVideoWatchStatus } from "@/utils/video";

type video = {
  video: IVideo;
  buttonClick: () => void;
};

const StoredTabButton = ({ video, buttonClick }: video) => {
  const [isWatched, setIsWatched] = useState(video.status.watch);
  const [isLike, setIsLike] = useState(video.status.like);

  const handleWatch: MouseEventHandler<HTMLButtonElement> = (e) => {
    const id = e.currentTarget.parentElement?.dataset.id;
    setItem(
      "videos",
      JSON.stringify(
        getItem("videos").map((video: IVideo) =>
          video.videoId === id ? toggleVideoWatchStatus(video) : video
        )
      )
    );
    setIsWatched(!isWatched);
    buttonClick();
  };

  const handleLike = (e: React.MouseEvent) => {
    const id = e.currentTarget.parentElement?.dataset.id;
    setItem(
      "videos",
      JSON.stringify(
        getItem("videos").map((video: IVideo) =>
          video.videoId === id ? toggleVideoLikeStatus(video) : video
        )
      )
    );
    setIsLike(!isLike);
  };

  return (
    <>
      <IconButton color="secondary" size="small" onClick={handleWatch}>
        {isWatched ? (
          <CheckCircleIcon fontSize="small" />
        ) : (
          <CheckCircleOutlineIcon fontSize="small" />
        )}{" "}
      </IconButton>
      <IconButton color="secondary" size="small" onClick={handleLike}>
        {isLike ? (
          <FavoriteIcon fontSize="small" />
        ) : (
          <FavoriteBorderIcon fontSize="small" />
        )}{" "}
      </IconButton>
      <IconButton data-button="delete" color="secondary" size="small">
        <DeleteOutlineIcon fontSize="small" />
      </IconButton>
    </>
  );
};

export default StoredTabButton;
