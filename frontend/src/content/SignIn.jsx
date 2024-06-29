import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
function SignIn() {
  return (
    <>
      <h1 className="mt-5 mb-2 text-xl font-bold text-center">Welcome Back!</h1>
      <p className="italic opacity-50 text-center">
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
        <Button className="bg-primary w-full">Sign in</Button>

        <div className="border-t-2 w-full my-5"></div>
      </form>
    </>
  );
}

export default SignIn;
