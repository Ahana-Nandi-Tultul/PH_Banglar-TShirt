import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import ReviewOrder from './components/ReviewOrder/ReviewOrder.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Grandpa from './components/GrandPa/GrandPa.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('tshirt.json')
      },
      {
        path: 'review',
        element: <ReviewOrder></ReviewOrder>
      },
      {
        path: 'grandpa',
        element: <Grandpa></Grandpa>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
