import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootTemplate from './templates/RootTemplate'
import Blog from './routes/Blog'
import Main from './routes/Main'

import './App.scss'

function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootTemplate />,
      children: [
        {
          path: '/',
          element: <Main />
        },
        {
          path: '/media',
          element: <Blog />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App;
