import React, { useRef } from 'react';

const VideoPlayer = ({ videoSrc, title }) => {
    const videoRef = useRef(null);

    const handlePlay = () => {
        videoRef.current.play();
    };

    const handlePause = () => {
        videoRef.current.pause();
    };

    return (
        <div className="video-player">
            <h2>{title}</h2>
            <video ref={videoRef} width="600" controls>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="controls">
                <button onClick={handlePlay}>Play</button>
                <button onClick={handlePause}>Pause</button>
            </div>
        </div>
    );
};

export default VideoPlayer;