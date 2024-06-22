import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
function SignIn() {
  return (
    <>
      <h1 className="mt-5 mb-2 text-xl font-bold ">Welcome Back!</h1>
      <p className="italic opacity-50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
        totam!
      </p>
      <form>
        <div className="my-5">
          <Label
            htmlFor="email"
            className="font-bold italic flex items-center gap-2 mb-2"
          >
            <Mail /> Email
          </Label>
          <Input name="email" placeholder="Your Email Address" />
        </div>
        <div className="my-5">
          <Label
            htmlFor="email"
            className="font-bold italic flex items-center gap-2 mb-2"
          >
            <Lock /> Password
          </Label>
          <Input name="email" placeholder="Your Password" />
        </div>
        <Button className="bg-primary w-full">Sign-in</Button>

        <div className="border-t-2 w-full my-5"></div>

        <div className="flex items-center justify-center dark:bg-gray-800">
          <button className="w-full px-4 py-2  border flex justify-center gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
            <img
              className="w-6 h-6"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
            <span>Sign-in with Google</span>
          </button>
        </div>
      </form>
    </>
  );
}

export default SignIn;
