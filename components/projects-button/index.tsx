'use client';

import { handleScroll } from '@/util/handle-scroll';
import styles from './styles.module.scss';

export const ProjectsButton = () => {
  return (
    <button className={styles.button} onClick={() => handleScroll('portfolio')}>
      Projects
    </button>
  );
};
