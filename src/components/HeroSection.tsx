import { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={`${styles.content} ${visible ? styles.visible : ''}`}>
        <h1 className={styles.title}>受拉而扩</h1>
        <p className={styles.subtitle}>负泊松比超材料 · 禁忌知识</p>
      </div>
      <div className={`${styles.scrollHint} ${visible ? styles.visible : ''}`}>
        <span className={styles.scrollText}>向下探索</span>
        <div className={styles.scrollArrow} />
      </div>
    </section>
  );
}
