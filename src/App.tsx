import HomePage from './pages/HomePage.tsx'
import { useLocation, useRoutes } from 'react-router-dom'
import AboutPage from './pages/AboutPage.tsx'
import ProjectsPage from './pages/ProjectsPage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import { AnimatePresence } from 'framer-motion'
import React from 'react'

export default function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/about',
      element: <AboutPage />,
    },
    {
      path: '/projects',
      element: <ProjectsPage />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ])

  const location = useLocation()

  if (!element) return null

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        {React.cloneElement(element, { key: location.pathname })};
      </AnimatePresence>
    </>
  )
}
