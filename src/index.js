import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import Add from "./Pages/Add";
import Details from "./Pages/Details";
import Edit from "./Pages/Edit";
import NotFound from "./Pages/NotFound";
import Postdata from "./components/Postdata";

import { Provider } from "react-redux";
import storee from "./State/Store";

let postnumdata = (data)=>
{
  if(isNaN(data.params.id))
  {
    console.log(data.params.id);
    throw new Response("Bad Request", { statusText:"Go to Home Pls",status: 400 });

  }

  return null
}
let routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <NotFound/>,  
    children:[
      {
        index:true,
        element: <Postdata/>
      },
      {
        path: "Post/add",
        element: <Add/>
      },
    
      {
        path: "Post/:id/Edit",
        element: <Edit/>,
        loader:postnumdata
      },
      {
        path: "Post",
        element: <Postdata/>
      },
      {
        path: "Post/:id",
        element: <Details/>,
        loader:postnumdata
      },  
    
      
      
    
    ]
  },



])





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storee}>
    <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);
