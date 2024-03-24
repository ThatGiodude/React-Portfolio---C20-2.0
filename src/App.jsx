import './App.module.css';
import { About } from "./Components/Pages/About/About";
import { Experience } from "./Components/Pages/Experience/Experience";
import { Projects } from "./Components/Pages/Projects/Projects";

function App() {
  return (
    <Router>
      <div className="app-container"> {/* Wrap content in a div for potential styling */}
        <Header /> {/* Ensures Header is displayed across all routes */}
        <main> {/* Use main for the primary content for semantic HTML */}
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/meet" element={<Meet />} /> {/* Add route for Meet page */}
            <Route path="/resume" element={<Resume />} />
            {/* You can add more routes here if you have additional sections */}
          </Routes>
        </main>
        <Footer /> {/* This ensures Footer is displayed across all routes */}
      </div>
    </Router>
  );
}

export default App
