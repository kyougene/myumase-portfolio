import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Work from "./components/Work";
import Contact from "./components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/work",
    element: <Work />
  },
  {
    path: "/gallery",
    element: <Gallery />
  },
  {
    path: "/contact",
    element: <Contact />
  },
]);

const App = () => {
  return (
    <>
        <RouterProvider router={router}/>
    </>


  )
}

export default App
