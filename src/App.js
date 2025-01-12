import Navbar from './Componenets/Navbar/Navbar';
import Home from './Componenets/Home/Home';
import About from './Componenets/About/About';
import Skills from './Componenets/Skills/Skills';
import Project from './Componenets/Project/Project';
import Footer from './Componenets/Footer/Footer';

function App() {
  return (
    <div  className="bg-[#171d32] h-auto w-full overflow-hidden">
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <Footer/>
    
     </div>

  );
}

export default App;
