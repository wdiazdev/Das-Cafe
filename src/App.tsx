import { HashRouter, Routes, Route } from 'react-router-dom';
import './Styles.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import { MenuBagProvider } from './context/MenuContext';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <MenuBagProvider>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </HashRouter>
    </MenuBagProvider>
  )
}

export default App
