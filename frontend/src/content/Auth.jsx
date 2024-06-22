import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Auth() {
  return (
    <Tabs defaultValue="signin" className="w-[500px]">
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
    </Tabs>
  );
}

export default Auth;
