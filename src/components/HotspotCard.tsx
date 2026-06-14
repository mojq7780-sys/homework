import type { Hotspot } from '../data/hotspots';
import styles from './HotspotCard.module.css';

interface Props {
  hotspot: Hotspot;
  onClose: () => void;
  onStructureClick?: (id: number) => void;
}

export default function HotspotCard({ hotspot, onClose, onStructureClick }: Props) {
  const typeLabel =
    hotspot.type === 'structure'
      ? '结构'
      : hotspot.type === 'concept'
        ? '概念'
        : '叙事';

  const typeClass =
    hotspot.type === 'structure'
      ? styles.typeStructure
      : hotspot.type === 'concept'
        ? styles.typeConcept
        : styles.typeNarrative;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={`${styles.badge} ${typeClass}`}>{typeLabel}</span>
        <button className={styles.continueBtn} onClick={onClose}>
          继续播放 ▶
        </button>
      </div>
      <h3 className={styles.title}>{hotspot.title}</h3>
      <p className={styles.desc}>{hotspot.description}</p>
      {hotspot.type === 'structure' && hotspot.structureId && (
        <button
          className={styles.detailBtn}
          onClick={() => onStructureClick?.(hotspot.structureId!)}
        >
          查看结构详情 →
        </button>
      )}
    </div>
  );
}
