import PreviewVideo from '../components/PreviewVideo';
import useVideo from './../hooks/useVideo'
export default function HomePage() {
  const {videos, removeVideo} = useVideo();
  return (
    <>
      <div className='row'>
        {videos.map(video => (          
          <PreviewVideo
            key={video.id}
            video = {video}
            removeVideo = {removeVideo}
          />          
        ))}
      </div>
    </>
  )
}
