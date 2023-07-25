import { FiGithub } from 'react-icons/fi';
import { Project } from './project';
import styles from './styles.module.scss';

export const Projects = () => {
  return (
    <div className={styles.container} id="portfolio">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <Project
            key={project.source}
            name={project.name}
            image={project.image}
            description={project.description}
            demo={project.demo}
            source={project.source}
          />
        ))}
      </div>
      <a href="https://github.com/vhall1" className={styles.button}>
        <FiGithub />
        <span>Other projects</span>
      </a>
    </div>
  );
};

const projects = [
  {
    name: '🔥 Firebase Chat',
    image: '/firebase-chat.gif',
    description:
      'Chat with others in real-time. Built with React and Firebase. Hosted on Netlify',
    source: 'https://github.com/VHall1/firebase-chat',
    demo: 'https://condescending-lalande-a15c2d.netlify.app/',
  },
  {
    name: '📈 Expense Tracker',
    image: '/expense-tracker.png',
    description:
      'Expense tracker app. Built with React and Typescript. Original project by @bradtraversy. Hosted on Netlify',
    source: 'https://github.com/VHall1/react-expense-tracker',
    demo: 'https://pensive-ptolemy-58671a.netlify.app/',
  },
  {
    name: '⛅ React Weather',
    image: '/weather.png',
    description:
      'Simple weather app. Built with React and OpenWeatherMap. Hosted on Netlify',
    source: 'https://github.com/VHall1/react-weather',
    demo: 'https://vigilant-leakey-c36a17.netlify.app/',
  },
];
