import React from "react";
import Auth from "./content/Auth";
import Home from "./content/Home";
import { Toaster } from "react-hot-toast";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navigation from "./content/Navigation";
import AppLayout from "./layout/AppLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="/home" element={<Home />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <Auth />
        <Toaster />
      </div>
    </>
  );
}

export default App;
