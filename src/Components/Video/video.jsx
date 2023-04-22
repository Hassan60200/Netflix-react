import React from 'react';

function VideoPlayer(props) {
    const videoKey = props.videoKey;
    const videoUrl = "https://www.youtube.com/embed/" + videoKey;

    return (
        <div>
            <iframe title="video player" width="560" height="315" src={videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
    );
}

export default VideoPlayer;
