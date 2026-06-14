import { useState } from 'react';
import { structures } from '../data/structures';
import StructureDetail from './StructureDetail';
import styles from './StructureGrid.module.css';

interface Props {
  initialOpenId?: number | null;
}

export default function StructureGrid({ initialOpenId }: Props) {
  const [selectedId, setSelectedId] = useState<number | null>(initialOpenId ?? null);

  // Sync with external initialOpenId
  useState(() => {
    if (initialOpenId) setSelectedId(initialOpenId);
  });

  const selected = structures.find((s) => s.id === selectedId);

  return (
    <section className={styles.section} id="structures">
      <div className={styles.container}>
        <h2 className={styles.heading}>五种负泊松比结构</h2>
        <div className={styles.grid}>
          {structures.map((s) => (
            <button
              key={s.id}
              className={`${styles.card} ${selectedId === s.id ? styles.cardActive : ''}`}
              onClick={() => setSelectedId(s.id)}
            >
              <div className={styles.imageWrap}>
                <img src={s.image} alt={s.nameCN} className={styles.image} loading="lazy" />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{s.nameCN}</h3>
                <span className={styles.nameEN}>{s.nameEN}</span>
                <p className={styles.desc}>{s.shortDesc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <StructureDetail structure={selected} onClose={() => setSelectedId(null)} />
      )}
    </section>
  );
}
