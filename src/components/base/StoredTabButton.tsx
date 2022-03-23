import React, { MouseEventHandler, useEffect, useState } from "react";
import { IVideo, IVideoProp } from "@/types/video";
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
import { useSnackbar } from "notistack";
import { replaceSingleQuote } from "@/utils/replaceSingleQuote";
import {
  DELETE_VIDEO_MSG,
  LIKE_VIDEO_MSG,
  NOT_LIKE_VIDEO_MSG,
  NOT_WATCHED_VIDEO_MSG,
  WATCHED_VIDEO_MSG,
} from "@/constants/snackbarMessage";

interface IStoredTabButton extends IVideoProp {
  buttonClick: () => void;
}

const StoredTabButton = ({ video, buttonClick }: IStoredTabButton) => {
  const { enqueueSnackbar } = useSnackbar();
  const [isWatched, setIsWatched] = useState({});
  const [isLike, setIsLike] = useState({});

  useEffect(() => {
    setIsWatched(video.status.watch);
    setIsLike(video.status.like);
    return;
  }, [video.status.like, video.status.watch]);

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
    isWatched
      ? enqueueSnackbar(
          `${replaceSingleQuote(video?.title)} ${NOT_WATCHED_VIDEO_MSG}`,
          { variant: "error" }
        )
      : enqueueSnackbar(
          `${replaceSingleQuote(video?.title)} ${WATCHED_VIDEO_MSG}`,
          { variant: "success" }
        );
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
    isLike
      ? enqueueSnackbar(
          `${replaceSingleQuote(video?.title)} ${NOT_LIKE_VIDEO_MSG}`,
          { variant: "error" }
        )
      : enqueueSnackbar(
          `${replaceSingleQuote(video?.title)} ${LIKE_VIDEO_MSG}`,
          { variant: "success" }
        );
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
    enqueueSnackbar(`${replaceSingleQuote(video?.title)} ${DELETE_VIDEO_MSG}`, {
      variant: "error",
    });
  };

  return (
    <>
      <IconButton color="secondary" size="small" onClick={handleWatch}>
        {isWatched ? (
          <CheckCircleIcon
            fontSize="small"
            data-testid="storedTabNotWatchButton"
          />
        ) : (
          <CheckCircleOutlineIcon
            fontSize="small"
            data-testid="storedTabWatchButton"
          />
        )}
      </IconButton>
      <IconButton color="secondary" size="small" onClick={handleLike}>
        {isLike ? (
          <FavoriteIcon fontSize="small" data-testid="storedTabNotLikeButton" />
        ) : (
          <FavoriteBorderIcon
            fontSize="small"
            data-testid="storedTabLikeButton"
          />
        )}
      </IconButton>
      <IconButton color="secondary" size="small" onClick={handleDelete}>
        <DeleteOutlineIcon
          fontSize="small"
          data-testid="storedTabDeleteButton"
        />
      </IconButton>
    </>
  );
};

export default StoredTabButton;
