"use client";
import React, { useState } from "react";
import "./globals.css";

const VideoSwitcher = () => {
  const [selectedVideo, setSelectedVideo] = useState("video1");

  const handleVideoChange = (event) => {
    setSelectedVideo(event.target.value);
  };
  const videoData = [
    { value: "VKMw2it8dQY", label: "Video 1" },
    {
      value: "ZZ5LpwO-An4",
      label: "Video 2",
    },
    { value: "z94F8sx7PvU", label: "Video 3" },
    { value: "rn05-vqHePE", label: "Video 4" },
  ];
  return (
    <div className="video-container">
      <h1>Video Switcher</h1>
      {videoData.map((video, index) => (
        <div className="radio-container" key={index}>
          <label>
            <input
              type="radio"
              value={video.value}
              checked={selectedVideo === video.value}
              onChange={handleVideoChange}
            />
            {video.label}
          </label>
        </div>
      ))}
      <div className="video-box">
        {selectedVideo && (
          <iframe
            title="YouTube Video Player"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${selectedVideo}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default VideoSwitcher;
