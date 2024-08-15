// react router dom
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// layout
import MainLayout from "./layout/MainLayout";
// pages
import { Home, Login, Register, About, MovieDetail } from "./page";

function App() {
  let routes = createBrowserRouter([
    {
      path: `/`,
      element: <MainLayout />,
      children: [
        {
          index: `/`,
          element: <Home />,
        },
        {
          path: `/about`,
          element: <About />,
        },
        {
          path: `/movie/:id`, // Yangi yo‘nalish
          element: <MovieDetail />,
        },
      ],
    },
    {
      path: `/login`,
      element: <Login />,
    },
    {
      path: `/register`,
      element: <Register />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
