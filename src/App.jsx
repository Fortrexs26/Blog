import style from './App.module.css';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Experience } from './components/Experience/Experience';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Partner } from './components/Partner-Industry/Partner';
import { Program } from './components/Program/Program';
import { Projects } from './components/Projects/Projects';
import { SchoolDept } from './components/SchoolDept/SchoolDept';


function App() {
  return <div className={style.App}>
    <Navbar />
    <Hero />
    <About />
    <Experience />
    {/* <Projects /> */}
    <Partner />
    <SchoolDept />
    <Program />
    <Contact />
  </div>;
}

export default App;
