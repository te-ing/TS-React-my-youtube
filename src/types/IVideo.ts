export interface IVideo {
  videoId: string;
  channelId: string;
  channelTitle: string;
  date: string;
  title: string;
  status: IVideoStatus;
}

export interface IVideoStatus {
  watch: boolean;
  like: boolean;
}