import { useState, useEffect } from "react";
import type { VideoItem } from "../types";

export default function useVideo() {
  // LocalStorage recibi un string como parametro.
  // Como el valor inicial puede ser nulo, entonces asignamos un valos por defecto
  // En este caso es []:
  const storedVideos = JSON.parse(localStorage.getItem('videos') ||"[]") 
  const[videos, setVideos] = useState<VideoItem[]>(storedVideos);
  
  // El useEffect sirve para: cuando X cambie, haz Y
  // En este caso nos interesa guardar el video en el local storage.
  useEffect(() => {
    localStorage.setItem('videos', JSON.stringify(videos))
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