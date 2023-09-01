import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Skills from './component/Skills/Skills.jsx'
import Work from './component/Work/Work.jsx'
import Contact from './component/Contact/Contact.jsx'
import Footer from './component/Footer/Footer.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
   <Home/>
   <About/>
   <Skills/>
   <Work/>
   <Contact/>
   <Footer/>

    </div>
  );
}

export default App;
