import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Marketplace from "../marketplace/Marketplace";
import About from "../components/About";
import Featured from "../components/Featured";
import SingleArt from "../marketplace/SingleArt";
import Dashboard from "../dashboard/Dashboard";
import DashboardLayout from "../dashboard/DashboardLayout";
import Edit from "../dashboard/Edit";
import Manage from "../dashboard/Manage";
import Upload from "../dashboard/Upload";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/marketplace",
        element: <Marketplace />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/featured",
        element: <Featured />,
      },
      {
        path: "/art/:id",
        element: <SingleArt />,
        loader: ({ params }) => fetch(`http://localhost:5000/art/${params.id}`),
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/dashboard/upload",
        element: <Upload />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <Manage />,
      },
      {
        path: "/admin/dashboard/edit/:id",
        element: <Edit />,
        loader: ({ params }) => fetch(`http://localhost:5000/art/${params.id}`),
      },
    ],
  },
]);
export default router;
