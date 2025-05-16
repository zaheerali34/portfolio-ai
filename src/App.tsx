import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import UpcomingProjects from './components/UpcomingProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <About />
        <Projects />
        <UpcomingProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;