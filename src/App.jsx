import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { useAuth } from "./Store/useAuth";


const App = () => {
  const { auth } = useAuth()
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />,
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/home',
      element: auth?.isAuth ? <Home /> : <Navigate to='/login' replace />
    }
  ]);
  
  return (
    <RouterProvider router={router} />
  )
}

export default App