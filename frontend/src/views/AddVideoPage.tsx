import { useState } from 'react';
import useVideo from '../hooks/useVideo';
import type { ChangeEvent, FormEvent } from "react";
import type { VideoItem } from '../types/index';
import { v4 as uuid } from 'uuid'

export default function AddVideoPage() {

    const {addVideo} = useVideo();
    const InitialStateVideo = {
        id: uuid(),
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

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();         // evita recargar la página
        addVideo(video);            // guardas el video
        setVideo(InitialStateVideo); // reseteas el formulario
    };


    return (
        <>
            <form className='container bg-warning p-3' onSubmit={handleSubmit}>
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
                    type="submit" 
                    className="btn btn-primary"                     
                >
                    Submit
                </button>
            </form>
        </>
    )
}
