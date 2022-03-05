import React, { useState, useEffect } from 'react';
import { setItem, getItem, addItem } from '@/hooks/storage';
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
        try {
          setStoredVideo(getItem("videos").filter((video: IVideo)=>getItem(`${tab}Videos`).includes(video.videoId)))    
        } catch (error) {
          console.log(`${tab}에 저장된 영상이 없습니다`)
        }
      }
      else
      try {
          setStoredVideo(getItem("videos").filter((video: IVideo) => !getItem("watchVideos").includes(video.videoId)))    
      } catch (error) {
        setStoredVideo(getItem("videos"))
        }
		}
		return;
  }, [tab]);

  const storedButtonHandler = (e: any) => {
    const id = e.currentTarget.parentNode.dataset.id;
    const button = e.currentTarget.dataset.button;
    if (button === "delete") {
      setStoredVideo(storedVideo.filter((video: IVideo) => video.videoId !== id));
      setItem("videos", JSON.stringify(getItem("videos").filter((video: IVideo) => video.videoId !== id)));
      setItem("likeVideos", JSON.stringify(getItem("likeVideos")?.filter((videoId: string) => videoId !== id)));
      setItem("watchVideos", JSON.stringify(getItem("watchVideos")?.filter((videoId: string) => videoId !== id)));
    }
    if (button === "dislike") {
      setItem("likeVideos", JSON.stringify(getItem("likeVideos").filter((videoId: string) => videoId !== id)));
      tab === "like" && setStoredVideo(getItem("videos").filter((video: IVideo) => getItem("likeVideos").includes(video.videoId)));
    }
    if (button === "watch") {
      addItem("watchVideos",id)
      !tab && setStoredVideo(getItem("videos").filter((video: IVideo) => !getItem("watchVideos").includes(video.videoId)));
    }
    if (button === "notwatch") {
      setItem("watchVideos", JSON.stringify(getItem("watchVideos").filter((videoId: string) => videoId !== id)));
      tab === "watch" && setStoredVideo(getItem("videos").filter((video: IVideo) => getItem("watchVideos").includes(video.videoId)));
    }
  }

  return (
    <>
      <VideoList props={storedVideo} func={(e: React.MouseEvent<HTMLDivElement>) => storedButtonHandler(e)} tab={tab} />
  </>
  );
}

export default StoredVideoTab;
