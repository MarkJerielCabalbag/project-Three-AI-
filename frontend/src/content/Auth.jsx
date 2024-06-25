import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BrainCircuit, Lock, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function navigate(url) {
  window.location.href = url;
}
async function auth() {
  const response = await fetch("http://127.0.0.1:8000/request", {
    method: "POST",
  });
  const data = await response.json();

  console.log(data);
  navigate(data.url);
}

function Auth({ authContent }) {
  return (
    <div className="bg-neutral-100 h-screen w-screen flex flex-col items-center justify-center gap-10">
      <div className=" text-center">
        <h1 className="text-2xl flex gap-2 items-center justify-center italic font-bold">
          <BrainCircuit />
          eduGemini
        </h1>
        <p className="text-2xl font-bold my-3">
          “Empowering Educators: Unleashing Student Potential with eduGemini!”
        </p>
        <p className="opacity-75 ">
          Discover how eduGemini’s AI-driven insights revolutionize student work
          analysis, personalized feedback, and time-saving efficiency. 🌟🚀
        </p>
      </div>
      <Tabs defaultValue="signin" className="w-4/12 shadow-2xl p-5 rounded">
        <TabsList className="w-full">
          <TabsTrigger value="signin" className="w-2/4">
            Sign in
          </TabsTrigger>
          <TabsTrigger value="signup" className="w-2/4">
            Sign up
          </TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <SignIn />
        </TabsContent>
        <TabsContent value="signup">
          <SignUp />
        </TabsContent>
        <div className="flex items-center justify-center dark:bg-gray-800">
          <button
            className="w-full px-4 py-2  border flex justify-center gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
            onClick={(e) => {
              e.preventDefault();
              auth();
            }}
          >
            <img
              className="w-6 h-6"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
            <span>Continue with Google</span>
          </button>
        </div>
      </Tabs>
    </div>
  );
}

export default Auth;
