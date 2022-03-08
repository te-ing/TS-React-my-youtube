import React, { useState } from "react";
import { getItem } from "@/utils/storage";
import { IVideo } from "@/types/video";
import VideoList from "@/components/base/VideoList";

const NotWatchTab = () => {
  const [notWatchVideos, setNotWatchVideos] = useState(
    getItem("videos")?.filter((video: IVideo) => video.status.watch === false)
  );

  const updateTab = () => {
    setNotWatchVideos(
      getItem("videos")?.filter((video: IVideo) => video.status.watch === false)
    );
  };

  return <VideoList videos={notWatchVideos} buttonClick={updateTab} />;
};

export default NotWatchTab;
