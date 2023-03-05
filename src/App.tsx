import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Write from './pages/Write';
import Blog from './pages/Blog';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import path from "path";
import Single from "./pages/Single";
import "./style.scss";

const Layout = ()=>{
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path:"/" ,
        element: <Home />
      },
      {
        path:"/blog/:id" ,
        element: <Blog />
      },
      {
        path:"/write" ,
        element: <Write />
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/write",
    element: <Write />,
  },
  {
    path: "/blog",
    element: <Blog />
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}


export default App;
