import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className="countainer-fluid">
        <Nav/>
        <About/>
        <Experience/>
        <Skills/>
        <Contact/>
        <Footer/>

      </div>
      
    </div>
  );
}

export default App;
