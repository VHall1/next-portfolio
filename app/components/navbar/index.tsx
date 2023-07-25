'use client';

import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { handleScroll } from '../../utils/handle-scroll';
import styles from './styles.module.scss';

export const NavBar = () => {
  const [drawerStatus, setDrawerStatus] = useState(false);

  const toggleDrawer = () => setDrawerStatus((oldStatus) => !oldStatus);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.linksContainer}>
          <a className={styles.link} onClick={() => handleScroll('funnel')}>
            👨‍💻 Victor
          </a>
          <a className={styles.link} onClick={() => handleScroll('funnel')}>
            About
          </a>
          <a className={styles.link} onClick={() => handleScroll('portfolio')}>
            Projects
          </a>
        </div>

        <div className={styles.hamburger}>
          <Hamburger toggled={drawerStatus} toggle={toggleDrawer} size={18} />
        </div>
      </div>
    </header>
  );
};
