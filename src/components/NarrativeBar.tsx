import { hotspots } from '../data/hotspots';
import styles from './NarrativeBar.module.css';

interface Props {
  currentTime: number;
  onSeek: (time: number) => void;
}


export default function NarrativeBar({ currentTime, onSeek }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>叙事节点</h2>
        <div className={styles.bar}>
          {hotspots.map((h, i) => {
            const isActive =
              currentTime >= h.time &&
              (i === hotspots.length - 1 || currentTime < hotspots[i + 1].time);
            return (
              <button
                key={i}
                className={`${styles.node} ${isActive ? styles.active : ''}`}
                onClick={() => onSeek(h.time)}
                title={h.title}
              >
                <span className={styles.dot} />
                <span className={styles.label}>{h.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
