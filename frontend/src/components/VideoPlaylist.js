import React, { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer';
import '../styles/VideoPlaylist.css';

const VideoPlaylist = ({ topicId, videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [watchedVideos, setWatchedVideos] = useState([]);
  const [showNextNotification, setShowNextNotification] = useState(false);
  const [nextVideoCountdown, setNextVideoCountdown] = useState(5);

  const currentVideo = videos[currentVideoIndex];

  const markVideoAsWatched = (videoId) => {
    if (!watchedVideos.includes(videoId)) {
      setWatchedVideos([...watchedVideos, videoId]);
      localStorage.setItem(
        `watched_topic_${topicId}`,
        JSON.stringify([...watchedVideos, videoId])
      );
    }
  };

  const handleVideoEnd = () => {
    markVideoAsWatched(currentVideo.id);
    
    if (currentVideoIndex < videos.length - 1) {
      setShowNextNotification(true);
      setNextVideoCountdown(5);
      
      const countdown = setInterval(() => {
        setNextVideoCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(countdown);
            playNextVideo();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const playNextVideo = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
      setShowNextNotification(false);
    }
  };

  const skipNextVideo = () => {
    setShowNextNotification(false);
  };

  const playVideo = (index) => {
    setCurrentVideoIndex(index);
    setShowNextNotification(false);
  };

  const completionPercentage = ((watchedVideos.length / videos.length) * 100).toFixed(0);

  return (
    <div className="video-playlist-container">
      <div className="main-video-section">
        <VideoPlayer
          videoId={currentVideo.youtubeId}
          title={currentVideo.title}
          description={currentVideo.description}
          duration={currentVideo.duration}
          onVideoEnd={handleVideoEnd}
        />

        {showNextNotification && (
          <div className="next-video-notification">
            <div className="notification-content">
              <p>Next video plays in {nextVideoCountdown} seconds</p>
              <div className="notification-buttons">
                <button onClick={playNextVideo} className="btn-play-next">
                  ▶️ Play Now
                </button>
                <button onClick={skipNextVideo} className="btn-skip">
                  Skip
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="playlist-sidebar">
        <div className="playlist-header">
          <h3>📺 Playlist ({videos.length} videos)</h3>
          <div className="progress-info">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
            <p className="progress-text">{completionPercentage}% Complete</p>
          </div>
        </div>

        <div className="videos-list">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`video-item ${index === currentVideoIndex ? 'active' : ''} ${
                watchedVideos.includes(video.id) ? 'watched' : ''
              }`}
              onClick={() => playVideo(index)}
            >
              <div className="video-item-number">
                {watchedVideos.includes(video.id) ? '✅' : index + 1}
              </div>
              <div className="video-item-content">
                <p className="video-item-title">{video.title}</p>
                <p className="video-item-duration">{video.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPlaylist;