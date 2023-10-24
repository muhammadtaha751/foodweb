import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    useNavigate
  } from "react-router-dom"
  
  
import Login from "../components/Login"
import Create from "../components/Create";
import Dashboard from "../components/Dashboard";
  

  
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [,
  
  
        {
          path: "/",
          element: <Login/>,
        },
  
        {
          path: "/dashboard",
          element: <Dashboard/>,
        },
        {
          path: "/signup",
          element: <Create/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        // {
        //   path: "/postAd",
        //   element: <PostAd/>,
        // },
        // {
        //   path: "/detailAd",
        //   element: <DetailAd/>,
        // },
      ]
  
    }
  ]);
  
  function Router() {
    return <RouterProvider router={router} />
  }
  
  function Main() {
    const navigate = useNavigate()
  
    return <div>
  <Outlet/>
    </div>
  }
  
  export default Router