import { ISearchResult } from "@/types/video";

export const formatSearchResult = (result: ISearchResult[]) => {
  return result.map((data) => {
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
};
