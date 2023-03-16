import React from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.aboutUs}>
      <h1 className={styles.title}>關於我們</h1>
      <p className={styles.content}>
        健力環保發展有限公司，取名自“健” 康活“力”之意，亦是環境保護所帶來之效益，亦竭盡所能發展環保項目。自1999年成立以來，為香港、九龍、新界各住宅屋苑、清潔公司及回收商提供回收服務，至今已擁有龐大的物流團隊回收舊衣物及其他之廢料，如廢紙、鋁罐、廢鐵、等其他可回收再造之物品。專車遍佈全港，務求全面履行保護環境之責任。
      </p>
    </div>
  );
}
