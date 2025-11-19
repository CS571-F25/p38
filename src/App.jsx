import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import Events from './screens/Events'
import SignUp from './screens/SignUp'
import About from './screens/About'
import Contact from './screens/Contact'
import Header from './components/Header'

function App() {
  return (
    <HashRouter>
      <Header />
      <main style={{ padding: '1rem', paddingTop: '84px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </HashRouter>
  )
}

export default App
