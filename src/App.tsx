import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './pages/home/components/Layout'
import { ErrorPage } from './pages/errorPage/ErrorPage'
import HomePage from './pages/home/HomePage'
import PageNotFound from './pages/notFound/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
        <Route path="error" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
