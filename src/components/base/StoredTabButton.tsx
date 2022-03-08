import React, { MouseEventHandler, useState } from "react";
import { IVideo } from "@/types/video";
import { IconButton } from "@mui/material";
import { getItem, setItem } from "@/utils/storage";
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
    buttonClick();
    setIsWatched(video.status.watch);
  };

  const handleLike: MouseEventHandler<HTMLButtonElement> = (e) => {
    const id = e.currentTarget.parentElement?.dataset.id;
    setItem(
      "videos",
      JSON.stringify(
        getItem("videos").map((video: IVideo) =>
          video.videoId === id ? toggleVideoLikeStatus(video) : video
        )
      )
    );
    buttonClick();
    setIsLike(video.status.like);
  };

  const handleDelete: MouseEventHandler<HTMLButtonElement> = (e) => {
    const id = e.currentTarget.parentElement?.dataset.id;
    setItem(
      "videos",
      JSON.stringify(
        getItem("videos").filter((video: IVideo) => video.videoId !== id)
      )
    );
    buttonClick();
  };

  return (
    <>
      <IconButton color="secondary" size="small" onClick={handleWatch}>
        {isWatched ? (
          <CheckCircleIcon fontSize="small" />
        ) : (
          <CheckCircleOutlineIcon fontSize="small" />
        )}
      </IconButton>
      <IconButton color="secondary" size="small" onClick={handleLike}>
        {isLike ? (
          <FavoriteIcon fontSize="small" />
        ) : (
          <FavoriteBorderIcon fontSize="small" />
        )}
      </IconButton>
      <IconButton color="secondary" size="small" onClick={handleDelete}>
        <DeleteOutlineIcon fontSize="small" />
      </IconButton>
    </>
  );
};

export default StoredTabButton;
