import React, { useState } from 'react';
import { setItem, getItem } from '@/hooks/storage';
import { IVideo } from '@/types/IVideo';
import { IconButton } from '@mui/material';
import VideoGrid from '@/components/base/VideoGrid';
import {
  Favorite as FavoriteIcon,
} from "@mui/icons-material";
import { storageHandleLike } from '@/hooks/StorageHandle';

const LikeVideoTab = () => {
  const [likeVideos, setLikeVideos] = useState(getItem("videos").filter((video: IVideo) => video.status.like === true));

  const handleLike = (e: React.MouseEvent) => {
    const id = e.currentTarget.parentElement?.parentElement?.dataset.id;
    setItem("videos", JSON.stringify(getItem('videos').map((video: IVideo) => video.videoId === id ? storageHandleLike(video) : video)));
    setLikeVideos(getItem("videos").filter((video: IVideo) => video.status.like === true));
  }

  return (
    <VideoGrid videos={likeVideos}>
      <IconButton color="secondary" size="small" >
        <FavoriteIcon fontSize="small" onClick={handleLike}/>
      </IconButton>
    </VideoGrid>
  );
}

export default LikeVideoTab;
