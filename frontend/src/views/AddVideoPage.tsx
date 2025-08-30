import { useState } from 'react';
import useVideo from '../hooks/useVideo';
import type { ChangeEvent } from "react";
import type { VideoItem } from '../types/index';
export default function AddVideoPage() {

    const {addVideo} = useVideo();
    const InitialStateVideo = {
        id: 0,
        name: '',
        description: "",
        url: ''
    }
    const [video, setVideo] = useState<VideoItem>(InitialStateVideo);
    
    
    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setVideo(prev => ({ 
          ...prev, 
          [name]: name === "id" ? Number(value) : value 
        }));
      };

    return (

        <>
            <form className='container bg-warning p-3'>
                <div className="mb-3">
                    <label className="form-label">Movie Id</label>
                    <input type="number" className="form-control" name="id" value={video.id} onChange={handleChange}/>
                    <div id="movieId" className="form-text">Please set the input with the movie id</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Movie Name</label>
                    <input type="text" className="form-control" name="name" value={video.name} onChange={handleChange}/>
                    <div id="movieName" className="form-text">Please set the input with the movie name</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" name="description" placeholder="Write your description here..." value={video.description} onChange={handleChange}></textarea>
                    <div id="movieDescription" className="form-text">Please add your description</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Movie Url</label>
                    <input type="text" className="form-control" name="url" value={video.url} onChange={handleChange}/>
                </div>
                
                <button 
                    type="button" 
                    className="btn btn-primary" 
                    onClick={() => addVideo(video)}
                >
                    Submit
                </button>
            </form>
        </>
    )
}
