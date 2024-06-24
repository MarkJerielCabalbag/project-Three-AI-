import React from "react";
import Auth from "./content/Auth";
import Home from "./content/Home";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Auth />
      <Toaster />
    </div>
  );
}

export default App;
