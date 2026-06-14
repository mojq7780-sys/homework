import { useEffect, useRef, useState } from 'react';
import styles from './SteleSection.module.css';

const steleLines = [
  '夫物有常理 材有定則',
  '',
  '凡世間諸材 受拉則縮其圍 受擠則脹其體',
  '此泊松之律 天地不易之數也',
  '',
  '然有異材 逆而行之',
  '拉之 不以縮應 反以脹應',
  '擠之 不以脹應 反以縮應',
  '',
  '是材也 泊松比負',
  '',
  '此材有五形 各匿於世',
  '',
  '一曰 內凹 — 蜂房之壁 反向而凹',
  '二曰 手性 — 絲絡旋纏 恒向不易',
  '三曰 旋剛 — 剛體鉸連 力至而鉸旋',
  '四曰 折剪 — 紙面起伏 剪刻縱橫',
  '五曰 織縷 — 絲縷交織 不縮反脹',
  '',
  '此五形者 皆逆天之道 反物之常',
  '',
  '然則 反常者未必惡 悖律者未必邪',
  '承千鈞之力而化之 遇衝擊而不潰反堅',
  '',
  '汝今見此碑 讀此文',
  '汝之所見 非常人也當見',
  '汝之所知 非常人也當知',
  '',
  '此碑立於暗室 非欲禁絕 乃欲待可託之人',
];

const whiteText =
  '此碑宣判了负泊松比超材料的"反自然性"——它以五种形式存在于世，每一种都违背了"受拉则缩、受挤则胀"的基本物质规律。但碑文同时指出：反常不等于邪恶——负泊松比材料在防护和生物相容性方面有独特的应用价值。';

export default function SteleSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animate lines appearing one by one
          let count = 0;
          intervalRef.current = window.setInterval(() => {
            count++;
            setVisibleLines(count);
            if (count >= steleLines.length) clearInterval(intervalRef.current!);
          }, 150);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { observer.disconnect(); if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  return (
    <section className={styles.section} ref={sectionRef} id="stele">
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Stele inscription */}
          <div className={styles.stele}>
            <div className={styles.steleHeader}>誡 碑</div>
            <div className={styles.steleBody}>
              {steleLines.map((line, i) => (
                <p
                  key={i}
                  className={`${styles.line} ${i < visibleLines ? styles.lineVisible : ''} ${
                    line === '' ? styles.emptyLine : ''
                  }`}
                >
                  {line || '\u00A0'}
                </p>
              ))}
            </div>
            <div className={`${styles.footer} ${visibleLines >= steleLines.length ? styles.lineVisible : ''}`}>
              泊松比負之誡 · 受拉而擴
            </div>
          </div>

          {/* White text explanation */}
          <div className={styles.explanation}>
            <h3 className={styles.expTitle}>碑文白话</h3>
            <p className={styles.expText}>{whiteText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
