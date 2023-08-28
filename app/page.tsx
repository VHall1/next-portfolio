import { Footer } from '@/components/footer';
import { NavBar } from '@/components/navbar';
import { Projects } from '@/components/projects';
import { ProjectsButton } from '@/components/projects-button';
import styles from './styles.module.scss';

export default function Page() {
  return (
    <>
      <NavBar />
      <main>
        <div id="funnel" className={styles.funnel}>
          <h1>Hey, I&apos;m Victor 👨‍💻</h1>
          <h2>I&apos;m a Full Stack Engineer and a React enthusiast</h2>
          <ProjectsButton />
        </div>
        <Projects />
      </main>
      <Footer />
    </>
  );
}
