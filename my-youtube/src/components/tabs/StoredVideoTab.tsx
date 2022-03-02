import React, { useState, useEffect } from 'react';
import { setItem, getItem } from '@/hooks/storage';
import VideoList from '../VideoList';
import { IVideo } from '@/types/IVideo';

const StoredVideoTab = () => {
  const [storedVideo, setStoredVideo] = useState(getItem("videos"));

  const storedButtonHandler = (e: any) => {
    const id = e.currentTarget.parentNode.dataset.id;
    const button = e.currentTarget.dataset.button;
    if (button === "delete") {
      setStoredVideo(storedVideo.filter((video: IVideo) => video.videoId !== id));
      setItem("videos", JSON.stringify(getItem("videos").filter((video: IVideo) => video.videoId !== id)));
    }
  }

  return (
    <>
      <VideoList props={storedVideo} func={(e: React.MouseEvent<HTMLDivElement>)=>storedButtonHandler(e) }/>
  </>
  );
}

export default StoredVideoTab;
