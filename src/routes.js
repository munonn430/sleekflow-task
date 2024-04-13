import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Layout } from "./components";
import { ContactDetailPage, ContactPage } from "./pages";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Navigate to="/contact" replace />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
        {
          path: "contact/:id",
          element: <ContactDetailPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
