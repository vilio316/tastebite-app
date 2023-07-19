import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CompErr from './components/404Comp.jsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Recipes from './components/Recipes.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Foot.jsx'

const routerTest = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <CompErr/>,
  },
  {
    path: "/recipes",
    element: <Recipes/>,
    errorElement: <CompErr/>
  },
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={routerTest}></RouterProvider>
    <Footer/>
  </React.StrictMode>
    
)
