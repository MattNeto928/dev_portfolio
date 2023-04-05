import './App.css';
import DynamicHeader from './header'
import About from './about'
import Skills from './skills'
import Projects from './projects'
import Footer from './footer'

const App = () => {
  return (
    <>
      <DynamicHeader />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
