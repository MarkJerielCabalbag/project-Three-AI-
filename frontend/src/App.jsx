import React from "react";
import Auth from "./content/Auth";
import SelectUser from "./content/SelectUser";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={< />}>
      <Route path="/user/auth" element={<Auth />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
