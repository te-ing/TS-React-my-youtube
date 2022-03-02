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
	const [isLike, setIsLike] = useState(false);
	useEffect(() => {
		if (getItem("likeVideos")) {
			if (getItem("likeVideos").includes(prop.videoId)) {
				setIsLike(true);
			}
		}
		return;
  }, [prop.videoId]);

  const likeVideo = (prop?: IVideo) => { 
    const propId = prop?.videoId
		setIsLike(!isLike);
		getItem("likeVideos")
		? setItem("likeVideos", JSON.stringify([...getItem("likeVideos"), propId]))
		: setItem("likeVideos", JSON.stringify([propId]));
  }
	const unLikeVideo = (prop?: IVideo) => { 
		setIsLike(!isLike);
  }
  
	return (
    <>
      {isLike ?
        <IconButton data-button="unlike" color="secondary" size="small" onClick={(e) => { func(e); unLikeVideo(prop);}} >
          <FavoriteIcon fontSize="small" />
        </IconButton>
        :
        <IconButton color="secondary" size="small" onClick={() => likeVideo(prop)}>
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
