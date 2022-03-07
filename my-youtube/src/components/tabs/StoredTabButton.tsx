import React, {useEffect, useState } from 'react';
import { IVideo } from '@/types/IVideo';
import { IconButton } from '@mui/material';
import { getItem, addItem } from '@/hooks/storage';
import {
  DeleteOutline as DeleteOutlineIcon,
  FavoriteBorder as FavoriteBorderIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  CheckCircle as CheckCircleIcon,
  Favorite as FavoriteIcon,
} from "@mui/icons-material";
type Prop = {
  prop: IVideo;
  func: React.FC<React.MouseEvent<HTMLButtonElement, MouseEvent>>;
  tab?: string;
}

const StoredTabButton = ({ prop, func, tab }: Prop) => {
  const [isWatched, setIsWatched] = useState(false);
  const [isLike, setIsLike] = useState(false);
  

	useEffect(() => {
		if (getItem("watchVideos")) {
			if (getItem("watchVideos").includes(prop.videoId)) {
				setIsWatched(true);
			}
		}
		return;
  }, [prop.videoId]);

  const watchVideoToggle = (prop?: IVideo) => { 
		setIsWatched(!isWatched);
  }

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
    addItem("likeVideos", propId);
  }
	const likeVideoToggle = (prop?: IVideo) => { 
		setIsLike(!isLike);
  }
	return (
    <>
      {isWatched ?
        <IconButton data-button="notwatch" color="secondary" size="small" onClick={(e) => { func(e); watchVideoToggle(prop);}} >
          <CheckCircleIcon fontSize="small" />
        </IconButton>
        :
        <IconButton data-button="watch" color="secondary" size="small" onClick={(e) => { func(e); tab && watchVideoToggle(prop);}}>
          <CheckCircleOutlineIcon fontSize="small" />
        </IconButton>
      }
      {isLike ?
        <IconButton data-button="dislike" color="secondary" size="small" onClick={(e) => { func(e); likeVideoToggle(prop);}} >
          <FavoriteIcon fontSize="small" />
        </IconButton>
        :
        <IconButton color="secondary" size="small" onClick={() => likeVideo(prop)}>
          <FavoriteBorderIcon fontSize="small" />
        </IconButton>
      }
    <IconButton data-button="delete" color="secondary" size="small" onClick={func}>
        <DeleteOutlineIcon fontSize="small" />
    </IconButton>
  </>
  );
}

export default StoredTabButton;
