import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import AddMusicPage from './pages/AddMusicPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'add_music',
        element: <AddMusicPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)
