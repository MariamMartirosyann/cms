
import Login from "../Components/Login";
import MinimalLayout from "../Layouts/MinimalLayout";
import NotFoundPage from "../Components/NotFoundPage";
import ResetPassword from "../Components/ResetPassword";

const PublicRoutes = [
  {
    path: "/",
    element: <MinimalLayout/>,
    children: [
      { path: "/", element: <Login /> },
      { path: "/resetpassword", element: <ResetPassword/>},
      { path: "404", element: <NotFoundPage /> },
    ],
  },
];

export default PublicRoutes;
