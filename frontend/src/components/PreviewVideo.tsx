import type { VideoItem } from '../types/index';
import { Link } from 'react-router';
type PreviewVideoProps = {
    video: VideoItem,
    removeVideo: (id: VideoItem["id"]) => void
}
export default function PreviewVideo({video, removeVideo}: PreviewVideoProps) {
  return (
    <>
        <div className='col-md-4 my-4'>
            <div className='p-3 border text-center'>
                <img src={video.url} alt={video.name} className='w-100'/>
                <h4 className='my-3'>{video.name}</h4>
                <div className='my-2'>
                  <Link to={`/view/video/${video.id}`} className='btn btn-success'>Ver Video</Link>
                </div>
                <div>
                  <button className='btn btn-danger' onClick={() => removeVideo(video.id)}>Delete</button>
                </div>
            </div>
        </div>
    </>
  )
}
