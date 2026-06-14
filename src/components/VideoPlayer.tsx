import { useRef, useState, useMemo, useEffect, useCallback } from 'react';
import { useVideoTime } from '../hooks/useVideoTime';
import { hotspots } from '../data/hotspots';
import HotspotCard from './HotspotCard';
import styles from './VideoPlayer.module.css';

interface Props {
  onStructureClick?: (id: number) => void;
}

export default function VideoPlayer({ onStructureClick }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { currentTime, duration, isPlaying } = useVideoTime(videoRef);

  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const visitedHotspotsRef = useRef<Set<number>>(new Set());

  // Find the current hotspot based on time
  const currentHotspotIndex = useMemo(() => {
    if (!duration) return -1;
    for (let i = hotspots.length - 1; i >= 0; i--) {
      const windowSize = 4; // Fixed 4 second window for all hotspots
      if (currentTime >= hotspots[i].time && currentTime < hotspots[i].time + windowSize) {
        return i;
      }
    }
    return -1;
  }, [currentTime, duration]);

  // Pause at hotspot and show card (only if not already visited in this playback)
  useEffect(() => {
    if (currentHotspotIndex < 0) return;
    if (visitedHotspotsRef.current.has(currentHotspotIndex)) return;
    if (activeHotspot === currentHotspotIndex) return; // Already showing this card

    // Pause video at this hotspot
    const video = videoRef.current;
    if (video && !video.paused) {
      video.pause();
    }

    setActiveHotspot(currentHotspotIndex);
    visitedHotspotsRef.current.add(currentHotspotIndex);
  }, [currentHotspotIndex, activeHotspot]);

  // Reset visited hotspots when video ends and loops back to start
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      // Video ended - reset all visited hotspots for next playback
      visitedHotspotsRef.current.clear();
      setActiveHotspot(null);
    };

    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, []);

  const handleContinue = useCallback(() => {
    setActiveHotspot(null);
    const video = videoRef.current;
    if (video) {
      video.play();
    }
  }, []);

  const handleStructureClick = useCallback(
    (id: number) => {
      onStructureClick?.(id);
      handleContinue();
    },
    [onStructureClick, handleContinue]
  );

  // Show play overlay when not playing and no active hotspot
  const showOverlay = !isPlaying && activeHotspot === null;

  // Handle click on video wrapper to start playback
  const handleStartPlay = useCallback(() => {
    const video = videoRef.current;
    if (video && video.paused) {
      video.play();
    }
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.videoWrapper} onClick={handleStartPlay}>
          <video ref={videoRef} src={import.meta.env.BASE_URL + "videos/v2.mp4"} className={styles.video} preload="metadata" />

          {/* Play overlay */}
          {showOverlay && (
            <div className={styles.overlay}>
              <div className={styles.overlayText}>点击开始播放</div>
            </div>
          )}

          {/* Hotspot card */}
          {activeHotspot !== null && hotspots[activeHotspot] && (
            <HotspotCard
              hotspot={hotspots[activeHotspot]}
              onClose={handleContinue}
              onStructureClick={handleStructureClick}
            />
          )}
        </div>
      </div>
    </section>
  );
}
