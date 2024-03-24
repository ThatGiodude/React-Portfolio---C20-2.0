import styles from './App.module.css';
import { About } from "./Components/About/About";
import { Experience } from "./Components/Experience/Experience";
import { Projects } from "./Components/Projects/Projects";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <About />
      <Experience />
      <Projects />
    </div>
  )
}

export default App
