import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./views/Home";
import { Story } from "./views/story/Story";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/story/:id",
        Component: Story,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
