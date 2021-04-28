import React, { useState, useEffect } from 'react';
import styles from './GridAutoSizer.module.scss';

const GridAutoSizer = ({ children }) => {
  const [rootEl, setRootEl] = useState();
  const [size, setSize] = useState();

  useEffect(() => {
    if (rootEl) {
      const resizeHandler = () => {
        const { width, height } = rootEl.getBoundingClientRect();
        setSize({ width, height });
      };

      resizeHandler();

      window.addEventListener('resize', resizeHandler);

      return () => window.removeEventListener('resize', resizeHandler);
    }
  }, [rootEl]);

  return (
    <div ref={setRootEl} className={styles.root}>
      {size && children(size)}
    </div>
  );
};

export default GridAutoSizer;
