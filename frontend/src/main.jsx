
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import About from './pages/About.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "/products",
    element:<Products/>,
  },
  {
    path: "/about",
    element:<About/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
 <RouterProvider router={router} />

)
