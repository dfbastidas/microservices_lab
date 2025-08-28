import { useState } from "react";
import { videoItems } from "../data/db";
import type { VideoItem } from "../types";

export default function useVideo() {
  const[videos, setVideos] = useState(videoItems);

  const addVideo = (video: VideoItem) => {
    const newVideo = {...videos, video}
    setVideos(newVideo)
  }

  const removeVideo = (id: VideoItem['id']) => {
    setVideos(videos.filter(video => video.id != id))
  }

  return {
    videos,
    addVideo,
    removeVideo
  }
}