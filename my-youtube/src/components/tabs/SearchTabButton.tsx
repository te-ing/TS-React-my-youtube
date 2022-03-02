import React, {useEffect, useState} from 'react';
import { IVideo } from '@/types/IVideo';
import { Button } from '@mui/material';
import { setItem, getItem } from '@/hooks/storage';
import { SaveAlt as SaveAltIcon, DeleteOutline as DeleteOutlineIcon } from "@mui/icons-material";

const SearchTabButton: React.FC<any> = ({prop}) => {
	const [isStored, SetIsStored] = useState(false);
	useEffect(() => {
		if (getItem("videos")) {
			if (getItem("videos").map((video: IVideo) => video.videoId).includes(prop.videoId)) {
				SetIsStored(true);
			}
		}
		return;
  }, [prop.videoId]);
		
	const storeVideo = (prop?: IVideo) => { 
		SetIsStored(!isStored);
		getItem("videos")
		? setItem("videos", JSON.stringify([...getItem("videos"), prop]))
		: setItem("videos", JSON.stringify([prop]));
		console.log(getItem("videos"))
	}

	const removeVideo = (prop?: IVideo) => { 
		SetIsStored(!isStored);
		setItem("videos", JSON.stringify(getItem("videos").filter((video: IVideo)=> video.videoId !== prop?.videoId)))
		console.log(getItem("videos"))
	}

	return (
	<>
		{isStored ?
			<Button variant="outlined" color="secondary" size="small" onClick={() => removeVideo(prop)} startIcon={<DeleteOutlineIcon />}>삭제</Button>
			:
			<Button variant="outlined" color="secondary" size="small" onClick={() => storeVideo(prop)} startIcon={<SaveAltIcon />}>저장</Button>
		}
  </>
  );
}

export default SearchTabButton;
