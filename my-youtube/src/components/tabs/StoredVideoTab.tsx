import React, { useState, useEffect } from 'react';
import { setItem, getItem } from '@/hooks/storage';
import VideoList from '../VideoList';
import { IVideo } from '@/types/IVideo';

type Prop = {
  tab?: string;
}
const StoredVideoTab = ({ tab }: Prop) => {
  const [storedVideo, setStoredVideo] = useState([]);
	useEffect(() => {
    if (getItem("videos")) {
      if (tab) {
        setStoredVideo(getItem("videos").filter((video: IVideo)=>getItem(`${tab}Videos`).includes(video.videoId)))    
      }
      else setStoredVideo(getItem("videos"));
		}
		return;
  }, [tab]);

  const storedButtonHandler = (e: any) => {
    const id = e.currentTarget.parentNode.dataset.id;
    const button = e.currentTarget.dataset.button;
    if (button === "delete") {
      setStoredVideo(storedVideo.filter((video: IVideo) => video.videoId !== id));
      setItem("videos", JSON.stringify(getItem("videos").filter((video: IVideo) => video.videoId !== id)));
      setItem("likeVideos", JSON.stringify(getItem("likeVideos").filter((videoId: string) => videoId !== id)));
    }
    if (button === "unlike") {
      setItem("likeVideos", JSON.stringify(getItem("likeVideos").filter((videoId: string) => videoId !== id)));
      tab === "like" && setStoredVideo(getItem("videos").filter((video: IVideo) => getItem("likeVideos").includes(video.videoId)));
    }
  }

  return (
    <>
      <VideoList props={storedVideo} func={(e: React.MouseEvent<HTMLDivElement>)=>storedButtonHandler(e) }/>
  </>
  );
}

export default StoredVideoTab;
