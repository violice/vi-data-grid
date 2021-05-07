import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';
import styles from './GridRowMenu.module.scss';

const GridRowMenu = ({ rowId, rowData, items, onItemClick }) => {
  const [isOpened, setIsOpened] = useState(false);

  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);

  useEffect(() => {
    if (isOpened) {
      const clickHandler = e => {
        if (!referenceElement.contains(e.target)) {
          setIsOpened(false);
        }
      };
      window.addEventListener('click', clickHandler);
      return () => {
        window.removeEventListener('click', clickHandler);
      };
    }
  }, [isOpened, referenceElement, popperElement]);

  const { styles: popperStyles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: { name: 'offset', options: { offset: [0, 8] } },
    placement: 'bottom-end',
  });

  return (
    <>
      <td ref={setReferenceElement} className={styles.root} onClick={() => setIsOpened(!isOpened)}>
        menu
      </td>

      {isOpened &&
        ReactDOM.createPortal(
          <div
            ref={setPopperElement}
            style={popperStyles.popper}
            className={styles.popper}
            {...attributes.popper}
          >
            {items.map(item => (
              <button
                key={item.key}
                className={styles.item}
                onClick={() => {
                  if (onItemClick) {
                    onItemClick({
                      rowId,
                      rowData,
                      menuItemKey: item.key,
                    });
                  }
                }}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>,
          document.body,
        )}
    </>
  );
};

export default GridRowMenu;
