import React, { useState } from 'react';
import styles from './GridWindow.module.scss';

const GridWindow = ({ children, width, height, isVirtualized }) => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = isVirtualized ? e => setScrollTop(e.target.scrollTop) : null;

  return (
    <div className={styles.root} style={{ width, height }} onScroll={onScroll}>
      {children(scrollTop)}
    </div>
  );
};

export default GridWindow;
