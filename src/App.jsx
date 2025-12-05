import './index.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Cta from './components/cta';
import ProjectsPage from './components/ProjectsPage';
import Team from './components/Team';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Cta />
      <ProjectsPage />
      <Team />
      <Contact />
      <Footer />
    </>

  );
}

export default App;
