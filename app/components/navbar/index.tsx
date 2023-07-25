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
          {actions.map((action) => (
            <a
              key={`desktop-action-${action.name}`}
              className={`${styles.link} ${styles.hideOnMobile}`}
              {...(action.href
                ? { href: action.href, target: '_blank', rel: 'noreferrer' }
                : {})}
              {...(action.scroll
                ? { onClick: () => handleScroll(action.scroll!) }
                : {})}
            >
              {action.name}
            </a>
          ))}
        </div>

        <div className={styles.hamburger}>
          <Hamburger toggled={drawerStatus} toggle={toggleDrawer} size={18} />
        </div>
      </div>
      <div
        className={`${styles.drawer}${drawerStatus ? ` ${styles.show}` : ''}`}
      >
        {actions.map((action) => (
          <a
            key={`mobile-action-${action.name}`}
            className={styles.link}
            {...(action.href
              ? { href: action.href, target: '_blank', rel: 'noreferrer' }
              : {})}
            {...(action.scroll
              ? { onClick: () => handleScroll(action.scroll!) }
              : {})}
          >
            {action.name}
          </a>
        ))}
      </div>
    </header>
  );
};

const actions: {
  name: string;
  scroll?: string;
  href?: string;
}[] = [
  {
    name: 'About',
    scroll: 'funnel',
  },
  {
    name: 'Projects',
    scroll: 'portfolio',
  },
  {
    name: 'Resume',
    href: 'https://drive.google.com/file/d/1D-3Ajar5UYg1DTu3aOutZVk9c2t5cezc/view?usp=sharing',
  },
];
