import React, {useEffect, useState} from 'react';
import { IVideo } from '@/types/IVideo';
import { Button, IconButton } from '@mui/material';
import { setItem, getItem } from '@/hooks/storage';
import {
  SaveAlt as SaveAltIcon,
  DeleteOutline as DeleteOutlineIcon,
  FavoriteBorder as FavoriteBorderIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  CancelPresentation as CancelPresentationIcon,
  Favorite as FavoriteIcon,
} from "@mui/icons-material";
type Prop = {
  prop: IVideo;
  func?: any;
}

const StoredTabButton = ({ prop, func }: Prop) => {
	const [isLike, SetIsLike] = useState(false);

	const removeVideo = (prop?: IVideo) => { 
    // setItem("videos", JSON.stringify(getItem("videos").filter((video: IVideo) => video.videoId !== prop?.videoId)))
    SetIsLike(!isLike);
    console.log(prop)
  }
  
	return (
    <>
      {isLike ?
        <IconButton color="secondary" size="small" onClick={() => removeVideo(prop)}>
          <FavoriteIcon fontSize="small" />
        </IconButton>
        :
        <IconButton color="secondary" size="small" onClick={() => removeVideo(prop)}>
          <FavoriteBorderIcon fontSize="small" />
        </IconButton>
      }
  <IconButton data-button="delete" color="secondary" size="small" onClick={(e) => func(e)}>
      <DeleteOutlineIcon fontSize="small" />
  </IconButton>

  </>
  );
}

export default StoredTabButton;
