import { IVideo, ISearchResult } from "@/types/video";

export const formatSearchResult = (result: ISearchResult[]) => {
  const videoData = result.map((data) => {
    const { id, snippet } = data;
    const { channelId, channelTitle, publishTime, title } = snippet;
    const date = publishTime;

    return {
      videoId: id.videoId,
      title,
      date,
      channelTitle,
      channelId,
      status: { watch: false, like: false },
    };
  });
  return videoData;
};

export const toggleVideoLikeStatus = (video: IVideo) => {
  video.status.like = !video.status.like;
  return video;
};

export const toggleVideoWatchStatus = (video: IVideo) => {
  video.status.watch = !video.status.watch;
  return video;
};
