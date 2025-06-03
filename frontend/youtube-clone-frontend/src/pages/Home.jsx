import React from 'react';
import VideoPlayer from '../components/VideoPlayer';

const Home = () => {
    const videos = [
        { id: 1, title: 'Video 1', src: 'video1.mp4' },
        { id: 2, title: 'Video 2', src: 'video2.mp4' },
        { id: 3, title: 'Video 3', src: 'video3.mp4' },
    ];

    return (
        <div>
            <h1>Welcome to YouTube Clone</h1>
            <div className="video-player">
                <VideoPlayer 
                    title={videos[0].title} 
                    src={videos[0].src} 
                />
            </div>
            <h2>Video Thumbnails</h2>
            <div className="video-thumbnails">
                {videos.map(video => (
                    <div key={video.id} className="thumbnail">
                        <h3>{video.title}</h3>
                        <img src={`thumbnail${video.id}.jpg`} alt={video.title} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;