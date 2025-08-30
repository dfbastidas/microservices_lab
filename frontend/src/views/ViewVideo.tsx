import { useParams, Link } from "react-router" // Me srive para recibir el parametro que estoy enviando
import type { VideoItem } from "../types";
export default function ViewVideo() {
  const {id} = useParams<{id: string}>(); // USE PARAMS DEVUELVE SIEMPRE STRINGS
  const storedVideos: VideoItem[] = JSON.parse(localStorage.getItem('videos') ||"[]") 
  let video = storedVideos.find(vid => vid.id === id);
  if(!video) {
    return <div className="alert alert-danger">Video not found</div>;
  }
  return (
    <>
      <div className="row">
        <div className="col-md-6 text-center">
          <img src={video.url} className="w-75 rounded-t-full" alt={video?.name} />
        </div>
        <div className="col-md-6 text-center">
          <h3>{video.name}</h3>
          <p>{video?.description}</p>
          <Link to="/videos" className="btn btn-primary my-3">Regresar</Link>
        </div>
      </div>
    </>
    
  )
}
