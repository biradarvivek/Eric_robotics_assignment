import React from "react";

const CameraView = ({ isMain = false, zoom = 1 }) => {
  return (
    <div className="w-full h-full bg-black relative overflow-hidden">
      {/* Top Left Status Badge */}
      <div
        className={`absolute z-20 flex items-center gap-2 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] text-white font-mono shadow-md border border-white/10 ${isMain ? "top-6 left-8" : "top-3 left-3"}`}
      >
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
        LIVE FEED
      </div>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover transition-transform duration-500 ease-out"
        style={{ transform: `scale(${zoom})` }}
      >
        <source
          src="http://localhost:5000/assets/sample_video.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default CameraView;
