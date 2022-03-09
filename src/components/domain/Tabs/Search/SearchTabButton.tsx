import React, { useEffect, useState } from "react";
import { IVideo, IVideoProp } from "@/types/video";
import { Button } from "@mui/material";
import { setItem, getItem } from "@/utils/storage";
import {
  SaveAlt as SaveAltIcon,
  DeleteOutline as DeleteOutlineIcon,
} from "@mui/icons-material";

const SearchTabButton = ({ video }: IVideoProp) => {
  const [isStored, SetIsStored] = useState(false);

  useEffect(() => {
    if (getItem("videos")) {
      if (
        getItem("videos")
          .map((video: IVideo) => video.videoId)
          .includes(video.videoId)
      ) {
        SetIsStored(true);
      } else SetIsStored(false);
    }
    return;
  }, [video.videoId]);

  const storeVideo = (video?: IVideo) => {
    SetIsStored(!isStored);
    getItem("videos")
      ? setItem("videos", JSON.stringify([...getItem("videos"), video]))
      : setItem("videos", JSON.stringify([video]));
  };

  const removeVideo = (video?: IVideo) => {
    SetIsStored(!isStored);
    setItem(
      "videos",
      JSON.stringify(
        getItem("videos").filter(
          (video: IVideo) => video.videoId !== video?.videoId
        )
      )
    );
  };

  return (
    <>
      {isStored ? (
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          onClick={() => removeVideo(video)}
          startIcon={<DeleteOutlineIcon />}
        >
          삭제
        </Button>
      ) : (
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          onClick={() => storeVideo(video)}
          startIcon={<SaveAltIcon />}
        >
          저장
        </Button>
      )}
    </>
  );
};

export default SearchTabButton;
