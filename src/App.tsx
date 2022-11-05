import { HashRouter, Routes, Route } from 'react-router-dom';
import './Styles.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
function App() {


  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </HashRouter>
  )
}

export default App
