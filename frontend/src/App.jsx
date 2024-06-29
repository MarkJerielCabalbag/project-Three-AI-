import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./content/Home";
import Class from "./content/Class";
import Enrolled from "./content/Enrolled";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="/home" element={<Home />} />
      <Route path="/class" element={<Class />} />
      <Route path="/enrolled" element={<Enrolled />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
