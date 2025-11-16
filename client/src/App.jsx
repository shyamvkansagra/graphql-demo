import { lazy, Suspense } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import './App.scss'

const GetUser = lazy(() => import('./components/GetUser/GetUser'))
const AddUser = lazy(() => import('./components/AddUser/AddUser'))

function App() {
  return (
    <div className="app-container">
      <h1>GraphQL Demo</h1>
      <nav className="button-container">
        <Link to="/users" className="button button--primary">
          Get Users
        </Link>
        <Link to="/add-user" className="button button--success">
          Add User
        </Link>
      </nav>
      <Suspense fallback={<div className="loading-fallback">Loading...</div>}>
        <Routes>
          <Route path="/" element={
            <p className="welcome-message">
              Click a button above to get started
            </p>
          } />
          <Route path="/users" element={<GetUser />} />
          <Route path="/add-user" element={<AddUser />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
