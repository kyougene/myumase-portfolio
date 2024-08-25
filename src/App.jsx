import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Work from "./components/Work";

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
]);

const App = () => {
  return (
    <>
        <RouterProvider router={router}/>
    </>


  )
}

export default App
