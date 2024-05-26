// ScaleComponent.tsx

import React, { useState, useEffect } from "react";
import styles from "./ScaleComponent.module.scss";

const ScaleComponent: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollableHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <div className={styles.scale}>
      <div
        className={styles.pointer}
        style={{ top: `${scrollProgress}%` }}
      ></div>
    </div>
  );
};

export default ScaleComponent;
