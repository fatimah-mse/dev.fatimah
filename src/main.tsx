import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from "react-router"
import './index.css'
import Route from './Route.tsx'
import Home from './Pages/Home.tsx'
import About from './Pages/About.tsx'
import Portfolio from './Pages/Portfolio.tsx'
import Contact from './Pages/Contact.tsx'

const routes = createHashRouter([
  {
    path: "/",
    element: <Route />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ]
  },
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
