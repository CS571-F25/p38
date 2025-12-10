import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import Events from './screens/Events'
import SignUp from './screens/SignUp'
import About from './screens/About'
import Contact from './screens/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <HashRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ padding: '1rem', paddingTop: '84px', minHeight: '90vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
