import React, {useEffect, useState} from 'react';
import { ISearchResult } from '@/types/ISearchResult';
import { Button } from '@mui/material';
import { setItem, getItem } from '@/hooks/storage';
import { SaveAlt as SaveAltIcon, DeleteOutline as DeleteOutlineIcon } from "@mui/icons-material";

const SearchTabButton: React.FC<any> = ({prop}) => {
	const [isStored, SetIsStored] = useState(false);
	useEffect(() => {
		if (getItem("videos")) {
			if (getItem("videos").map((video: ISearchResult) => video.id.videoId).includes(prop.id.videoId)) {
				SetIsStored(true);
			}
		}
		return;
  }, [prop.id.videoId]);
		
	const storeVideo = (prop?: ISearchResult) => { 
		SetIsStored(!isStored);
		getItem("videos")
		? setItem("videos", JSON.stringify([...getItem("videos"), prop]))
		: setItem("videos", JSON.stringify([prop]));
		console.log(getItem("videos"))
	}

	const removeVideo = (prop?: ISearchResult) => { 
		SetIsStored(!isStored);
		setItem("videos", JSON.stringify(getItem("videos").filter((video: ISearchResult)=> video.id.videoId !== prop?.id.videoId)))
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
