import { ISearchResult } from "@/types/ISearchResult";

export const FormattingSearchResult = (result: ISearchResult[]) => {
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
    }
  })
  return videoData;
}
