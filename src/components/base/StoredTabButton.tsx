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
          `${replaceSingleQuote(video?.title)} 영상을 시청 예정입니다.`,
          { variant: "error" }
        )
      : enqueueSnackbar(
          `${replaceSingleQuote(video?.title)} 영상을 시청하였습니다.`,
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
          `${replaceSingleQuote(video?.title)} 영상을 좋아요를 취소합니다.`,
          { variant: "error" }
        )
      : enqueueSnackbar(
          `${replaceSingleQuote(video?.title)} 영상의 좋아합니다.`,
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
    enqueueSnackbar(`${replaceSingleQuote(video?.title)} 영상을 삭제합니다.`, {
      variant: "error",
    });
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
