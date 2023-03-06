import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import './styles/index.css'

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Home />
      <About />
      <Experience />
      {/* Contact */}
    </div>
  )
}

export default App;