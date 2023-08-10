import { FiCodesandbox, FiGithub } from 'react-icons/fi';
import styles from './styles.module.scss';

export const Project: React.FC<ProjectProps> = ({
  name,
  description,
  source,
  demo,
  image,
}) => {
  return (
    <div className={styles.card}>
      {image ? <img src={image} alt={name} className={styles.cardImg} /> : null}
      <p className={styles.cardTitle}>{name}</p>
      <p className={styles.cardDescription}>{description}</p>

      <div className={styles.cardActions}>
        <a
          className={`${styles.button} ${styles.demoButton}`}
          href={demo}
          target="_blank"
          rel="noreferrer"
        >
          <FiCodesandbox />
          <span>Demo</span>
        </a>
        <a
          className={`${styles.button} ${styles.sourceButton}`}
          href={source}
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub />
          <span>Source</span>
        </a>
      </div>
    </div>
  );
};

export interface ProjectProps {
  name: string;
  description: string;
  source: string;
  demo: string;
  image?: string;
}
