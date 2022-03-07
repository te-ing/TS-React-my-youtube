import React, { useState } from "react";
import { getItem } from "@/utils/storage";
import { IVideo } from "@/types/video";
import VideoList from "@/components/base/VideoList";

const WatchTab = () => {
  const [watchVideos, setWatchVideos] = useState(
    getItem("videos").filter((video: IVideo) => video.status.watch === true)
  );

  const updateTab = () => {
    console.log(getItem("videos"));
    setWatchVideos(
      getItem("videos").filter((video: IVideo) => video.status.watch === true)
    );
  };

  return <VideoList videos={watchVideos} buttonClick={updateTab} />;
};

export default WatchTab;
