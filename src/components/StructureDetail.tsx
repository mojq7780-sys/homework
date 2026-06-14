import type { Structure } from '../data/structures';
import styles from './StructureDetail.module.css';

interface Props {
  structure: Structure;
  onClose: () => void;
}

export default function StructureDetail({ structure, onClose }: Props) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>
          &times;
        </button>

        <div className={styles.layout}>
          <div className={styles.imageWrap}>
            <img src={structure.image} alt={structure.nameCN} className={styles.image} />
          </div>

          <div className={styles.content}>
            <span className={styles.number}>第{structure.id}物</span>
            <h2 className={styles.name}>{structure.nameCN}</h2>
            <span className={styles.nameEN}>{structure.nameEN}</span>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>物理原理</h3>
              <p className={styles.text}>{structure.principle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
