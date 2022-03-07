import React, { useState, useEffect } from 'react';
import { setItem, getItem, addItem } from '@/hooks/storage';
import VideoList from '../../../base/VideoList';
import { IVideo } from '@/types/IVideo';
import { Grid, IconButton } from '@mui/material';
import VideoGrid from '@/components/base/VideoGrid';
import {
  FavoriteBorder as FavoriteBorderIcon,
  Favorite as FavoriteIcon,
} from "@mui/icons-material";



const LikeVideoTab = () => {
  const [isLike, setIsLike] = useState(false);
  const [likeVideos, setLikeVideos] = useState(getItem("videos"));
  useEffect(() => {
    setLikeVideos(getItem("videos").filter((video: IVideo) => video.status.like !== true));
    return
  }, [])

  const handleLike = (e: React.MouseEvent) => {
    console.log(e)
  }

  
  return (
    <VideoGrid videos={likeVideos}>
    {isLike ?
        <IconButton color="secondary" size="small" >
          <FavoriteIcon fontSize="small" />
        </IconButton>
        :
        <IconButton color="secondary" size="small" >
          <FavoriteBorderIcon fontSize="small" />
        </IconButton>
      }
    </VideoGrid>
  );
}

export default LikeVideoTab;
