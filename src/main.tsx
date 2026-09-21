import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import ProjectPage from './pages/ProjectPage'
import ScrollToTop from './ScrollToTop'
import WayToHeaven from './pages/WayToHeaven'
import ARRacing from './pages/ARRacing'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        <Route path="/" element={<App />} />

        <Route
          path="/projects/vals-haul"
          element={<ProjectPage />}
        />

        <Route
          path="/projects/way-to-heaven"
          element={<WayToHeaven />}
        />

        <Route
          path="/projects/ar-racing"
          element={<ARRacing />}
        />

      </Routes>

    </BrowserRouter>
  </StrictMode>,
)