import { IVideo } from "@/types/IVideo"

export const storageHandleLike = (video: IVideo) => {
  video.status.like = !video.status.like;
  return video;
}

export const storageHandleWatch = (video: IVideo) => {
  video.status.watch = !video.status.watch;
  return video;
}
