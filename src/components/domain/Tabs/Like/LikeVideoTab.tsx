import React, { useState } from "react";
import { setItem, getItem } from "@/utils/storage";
import { IVideo } from "@/types/video";
import { IconButton } from "@mui/material";
import VideoGrid from "@/components/base/VideoGrid";
import { Favorite as FavoriteIcon } from "@mui/icons-material";
import { toggleVideoLikeStatus } from "@/utils/video";

const LikeVideoTab = () => {
  const [likeVideos, setLikeVideos] = useState(
    getItem("videos").filter((video: IVideo) => video.status.like === true)
  );

  const handleLike = (e: React.MouseEvent) => {
    const id = e.currentTarget.parentElement?.parentElement?.dataset.id;
    setItem(
      "videos",
      JSON.stringify(
        getItem("videos").map((video: IVideo) =>
          video.videoId === id ? toggleVideoLikeStatus(video) : video
        )
      )
    );
    setLikeVideos(
      getItem("videos").filter((video: IVideo) => video.status.like === true)
    );
  };

  return (
    <VideoGrid videos={likeVideos}>
      <IconButton color="secondary" size="small" onClick={handleLike}>
        <FavoriteIcon fontSize="small" />
      </IconButton>
    </VideoGrid>
  );
};

export default LikeVideoTab;
