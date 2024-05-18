import React from 'react'
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <RouterProvider router={routes} />
  )
}

export default App
