import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Root from './routes/Root/Root.jsx'
import PublicContent from './routes/PublicContent/PublicContent.jsx'

import Login from './routes/Login/Login.jsx'
import ProtectedContent from './routes/ProtectedContent/ProtectedContent.jsx'
import ProtectedRoute from './routes/ProtectedRoute/ProtectedRoute.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="login" element={<Login />}/>
          <Route path="public" element={<PublicContent />}/>
          <Route path="protected" element={<ProtectedRoute />}>
            <Route index element={<ProtectedContent />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
