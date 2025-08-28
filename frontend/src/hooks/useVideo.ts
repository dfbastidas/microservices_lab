import { useState, useEffect } from "react";
import { videoItems } from "../data/db";
import type { VideoItem } from "../types";

export default function useVideo() {
  const[videos, setVideos] = useState(videoItems);
  
  // El useEffect sirve para: cuando X cambie, haz Y
  useEffect(() => {
    console.log(videos)
  }, [videos])

  // Add videos on state:
  const addVideo = (video: VideoItem) => { 
    setVideos([...videos, video])
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