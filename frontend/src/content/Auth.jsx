import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { BrainCircuit, Lock, Mail, User } from "lucide-react";
import { auth } from "@/api/useApi";

import mainBg from "../assets/main-bg.mp4";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Video from "./Video";

function Auth() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-10 relative z-50">
      <Video src={mainBg} className="absolute z-0 w-full h-full" />
      <div className=" text-center z-50">
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
      <Tabs
        defaultValue="signin"
        className="z-50 bg-white w-4/12 shadow-2xl p-5 rounded"
      >
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
