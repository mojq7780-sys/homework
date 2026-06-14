import { useState, useCallback } from 'react';
import HeroSection from './components/HeroSection';
import VideoPlayer from './components/VideoPlayer';
import NarrativeBar from './components/NarrativeBar';
import StructureGrid from './components/StructureGrid';
import SteleSection from './components/SteleSection';
import './styles/global.css';

function App() {
  const [structureOpenId, setStructureOpenId] = useState<number | null>(null);
  const [videoTime, setVideoTime] = useState(0);

  const handleStructureClick = useCallback((id: number) => {
    setStructureOpenId(id);
    setTimeout(() => {
      document.getElementById('structures')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, []);

  const handleSeek = useCallback((time: number) => {
    const video = document.querySelector('video');
    if (video) {
      video.currentTime = time;
      video.play();
    }
  }, []);

  // Track video time via onTimeUpdate on the video element
  const handleTimeUpdate = useCallback(() => {
    const video = document.querySelector('video');
    if (video) setVideoTime(video.currentTime);
  }, []);

  // Attach listener when video loads
  const attachListener = useCallback(() => {
    const video = document.querySelector('video');
    if (video) {
      video.addEventListener('timeupdate', handleTimeUpdate);
    }
  }, [handleTimeUpdate]);

  return (
    <div onMouseEnter={attachListener}>
      <HeroSection />
      <VideoPlayer onStructureClick={handleStructureClick} />
      <NarrativeBar currentTime={videoTime} onSeek={handleSeek} />
      <StructureGrid initialOpenId={structureOpenId} />
      <SteleSection />
    </div>
  );
}

export default App;
