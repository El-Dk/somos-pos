import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from '../pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '*',
    element: <Navigate to='/' />
  }
]);

export default router;
