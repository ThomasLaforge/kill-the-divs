import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Game from './routes/Game'
import Home from './routes/Home'
import End from './routes/End'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/game',
    element: <Game />,
  },
  {
    path: '/end/:time',
    element: <End />
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
