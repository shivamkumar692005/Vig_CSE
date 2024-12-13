import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {AppLayout} from "./Components/Layout/AppLayout"
import { ErrorPage } from "./Pages/ErrorPage";
import { Home } from "./Pages/Home";
import { People } from "./Pages/People";
import { Events } from "./Pages/Events";
import { Contact } from "./Pages/Contact";
import { Faculty } from "./Pages/Faculty";
import { Students } from "./Pages/Students";
import { Alumini } from "./Pages/Alumini";
import { Bos } from "./Pages/Bos";
import { Facilities } from "./Pages/Facilities";
import { Research } from "./Pages/Research";
import "./App.css";


function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "research",
          element: <Research />,
        },
        {
          path: "facilities",
          element: <Facilities />,
        },
        {
          path: "people",
          element: <People />,
        },
        {
          path: "events",
          element: <Events />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "/people/faculty",

          element: <Faculty />,
        },
        {
          path: "/people/students",
          element: <Students />,
        },
        {
          path: "/people/alumini",
          element: <Alumini />,
        },
        {
          path: "/people/board-of-studies",
          element: <Bos />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
