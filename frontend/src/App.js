import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootTemplate from './templates/RootTemplate'
import Blog from './routes/Blog'
import BlogPost from './routes/BlogPost'
import Login from './routes/account/Login'
import Main from './routes/Main'
import Profile from './routes/account/Profile'
import Signup from './routes/account/Signup'

import './App.scss'
import Account from './routes/account/Account'

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
              element: <Account />,
              children: [
                {
                  path: '',
                  element: <Profile />
                },
                {
                  path: 'login',
                  element: <Login />
                },
                {
                  path: 'signup',
                  element: <Signup />
                }
              ]
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
