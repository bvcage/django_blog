import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootTemplate from './templates/RootTemplate'
import Blog from './routes/Blog'
import BlogPost from './routes/BlogPost'
import Main from './routes/Main'
import UserAccount from './routes/UserAccount'

import './App.scss'

function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootTemplate />,
      children: [
        {
          path: '',
          element: <Main />
        },
        {
          path: 'blog',
          children: [
            {
              path: '',
              element: <Blog />
            },
            {
              path: 'account',
              element: <UserAccount />
            },
            {
              path: ':slug',
              element: <BlogPost />
            }
          ]
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App;
