import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Addcoffee from './Components/Addcoffee.jsx';
import Updatecoffee from './Components/Updatecoffee.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: ()=> fetch('http://localhost:5000/coffee')
  },
  {
    path:'addcoffee',
    element:<Addcoffee></Addcoffee>
  },{
    path:'updateCoffee',
    element:<Updatecoffee></Updatecoffee>

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />

  </React.StrictMode>,
)
