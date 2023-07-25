import { Footer } from './components/footer';
import { NavBar } from './components/navbar';
import { ProjectsButton } from './components/projects-button';
import styles from './styles.module.scss';

export default function Page() {
  return (
    <>
      <NavBar />
      <main>
        <div id="funnel" className={styles.funnel}>
          <h1>Hey, I'm Victor 👨‍💻</h1>
          <h2>I'm a Full Stack Engineer and a React enthusiast</h2>
          <ProjectsButton />
        </div>

        {/* <Portfolio /> */}
      </main>
      <Footer />
    </>
  );
}
