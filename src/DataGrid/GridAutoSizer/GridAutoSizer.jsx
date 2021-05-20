import React, { useState, useEffect } from 'react';
import styles from './GridAutoSizer.module.scss';

const GridAutoSizer = ({ children }) => {
  const [rootEl, setRootEl] = useState();
  const [size, setSize] = useState();

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      const [entry] = entries;
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });

    rootEl && resizeObserver.observe(rootEl);

    return () => rootEl && resizeObserver.unobserve(rootEl);
  }, [rootEl]);

  return (
    <div ref={setRootEl} className={styles.root}>
      {size && <div className={styles.content}>{children(size)}</div>}
    </div>
  );
};

export default GridAutoSizer;
