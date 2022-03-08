import React, { useState } from "react";
import { getItem } from "@/utils/storage";
import { IVideo } from "@/types/video";
import VideoList from "@/components/base/VideoList";

const LikeVideoTab = () => {
  const [likeVideos, setLikeVideos] = useState(
    getItem("videos")?.filter((video: IVideo) => video.status.like === true)
  );

  const updateTab = () => {
    setLikeVideos(
      getItem("videos")?.filter((video: IVideo) => video.status.like === true)
    );
  };

  return <VideoList videos={likeVideos} buttonClick={updateTab} />;
};

export default LikeVideoTab;
