import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Layout from './components/Layout'
import Career from './pages/Career'
import Projects from './pages/Projects'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/career" element={<Career />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
