import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import ScrollProgress from './components/ui/ScrollProgress';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import TechStack from './components/sections/TechStack';
import Projects from './components/sections/Projects';
import FigmaDesigns from './components/sections/FigmaDesigns';
import Certificates from './components/sections/Certificates';
// import Hackathons from './components/sections/Hackathons';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

import './styles/themes.css';
import './styles/animations.css';
import './styles/responsive.css';

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Helmet>
          <title>Muhammad Fawwaz Perdana | Full Stack Developer</title>
          <meta name="description" content="Muhammad fawwaz Perdana — Full Stack Developer from Lampung, Indonesia. Building performant, elegant web apps with React, Node.js, and MongoDB. Open to work." />
          <meta name="keywords" content="Muhammad Fawwaz Perdana, Full Stack Developer, React, Node.js, MongoDB, Portfolio, Lampung, Indonesia." />
          <meta name="author" content="Muhammad Fawwaz Perdana" />
          <meta name="robots" content="index, follow" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Muhammad Fawwaz Perdana | Full Stack Developer" />
          <meta property="og:description" content="Full Stack Developer from Lampung, Indonesia. Building performant, elegant web apps." />
          <meta property="og:url" content="https://portfoliofwazzr.netlify.app/" />
          <meta property="og:site_name" content="Muhammad Fawwaz Perdana Portfolio" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Muhammad Fawwaz Perdana | Full Stack Developer" />
          <meta name="twitter:description" content="Full Stack Developer from Lampung, Indonesia. Building performant, elegant web apps." />
          <meta name="twitter:creator" content="." />

          {/* Canonical */}
          <link rel="canonical" href="https://portfoliofwazzr.netlify.app/" />
        </Helmet>

        <ScrollProgress />
        <Navbar />

        <main>
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <FigmaDesigns />
          <Certificates />
          {/* <Hackathons /> */}
          <Achievements />
          <Contact />
        </main>

        <Footer />
      </ThemeProvider>
    </HelmetProvider>
  );
}
