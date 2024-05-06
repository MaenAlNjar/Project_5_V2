import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./router/homePage/page";
import { Layout, RequireAuth } from "./router/layouts/layout.jsx";
import "./App.css";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },
   
  ]);

  return <RouterProvider router={router} />;
}

export default App;
