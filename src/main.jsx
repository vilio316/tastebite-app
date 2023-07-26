import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AboutUs from './components/About.jsx'
import CompErr from './components/404Comp.jsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import RecipeSearch, {fetchRecipe, imageHunter, Recipe, RecipesHome, categoryHunt, CategorySearch}  from './components/Recipes.jsx'
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
    element: <RecipesHome/>,
    errorElement: <CompErr/>,
  },
  {
    path:"/recipes/categories/:categ",
    element: <CategorySearch/>,
    loader: ({params})=>{
      return categoryHunt(params.categ)
    },
    errorElement: <CompErr></CompErr>
  },
  {
    path: "recipes/:search",
    element: <RecipeSearch/>,
    loader:({params})=>{
      return imageHunter(params.search);
    }, 
    errorElement: <CompErr/>,
  },
  {
    path: "recipes/:search/:mealId",
    element: <Recipe/>,
    loader: ({params}) => {
      return fetchRecipe(params.mealId)
    },
    errorElement: <CompErr/>
  },
  {
    path: "/about-us",
    element: <AboutUs/>,
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
