import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Info, Lock, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRegister } from "@/api/useApi";
import toast from "react-hot-toast";
function SignUp() {
  const [user, setUser] = useState({
    user_email: "",
    user_username: "",
    user_password: "",
  });
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

  const onSuccess = (data) => {
    setUser({
      user_email: "",
      user_username: "",
      user_password: "",
    });
    toast.success(data.message);
    console.log(data.message);
  };
  const onError = (error) => {
    setUser({
      user_email: "",
      user_username: "",
      user_password: "",
    });
    toast.error(error.message);
    console.log(error.message);
  };

  const { user_email, user_username, user_password } = user;

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });
  const { mutateAsync, isLoading, isError, isPending, error } = useRegister({
    onSuccess,
    onError,
  });

  return (
    <>
      <h1 className="mt-5 mb-2 text-xl font-bold ">Join Us!</h1>
      <p className="italic opacity-50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
        totam!
      </p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex gap-2 w-full mt-3">
          <div className=" w-2/4">
            <Label
              htmlFor="user_email"
              className="font-bold italic flex items-center gap-2 mb-2"
            >
              <Mail /> Email
            </Label>
            <Input
              type="email"
              name="user_email"
              value={user_email}
              onChange={handleChange}
              placeholder="Your Email Address"
              className={`${isError ? "border-red-500" : ""}`}
            />
            <p
              className={`${
                isError ? "show" : " "
              }hidden text-red-500 text-xs italic mt-2`}
            >
              {isError ? (
                <div className="flex items-center gap-1">
                  <Info size={13} />
                  Fill out all fields
                </div>
              ) : (
                ""
              )}
            </p>
          </div>
          <div className=" w-2/4">
            <Label
              htmlFor="user_name"
              className="font-bold italic flex items-center gap-2 mb-2"
            >
              <User /> Username
            </Label>
            <Input
              type="text"
              name="user_username"
              value={user_username}
              onChange={handleChange}
              placeholder="Your Username"
              className={`${isError ? "border-red-500" : ""}`}
            />
            <p
              className={`${
                isError ? "show" : " "
              }hidden text-red-500 text-xs italic mt-2`}
            >
              {isError ? (
                <div className="flex items-center gap-1">
                  <Info size={13} />
                  Fill out all fields
                </div>
              ) : (
                ""
              )}
            </p>
          </div>
        </div>
        <div className="my-5">
          <Label
            htmlFor="user_password"
            className="font-bold italic flex items-center gap-2 mb-2"
          >
            <Lock /> Password
          </Label>
          <Input
            type="text"
            name="user_password"
            value={user_password}
            onChange={handleChange}
            placeholder="Your Password"
            className={`${isError ? "border-red-500" : ""}`}
          />
          <p
            className={`${
              isError ? "show" : " "
            }hidden text-red-500 text-xs italic mt-2`}
          >
            {isError ? (
              <div className="flex items-center gap-1">
                <Info size={13} />
                Fill out all fields
              </div>
            ) : (
              ""
            )}
          </p>
        </div>
        <Button
          type="submit"
          onClick={async () => {
            try {
              const formData = {
                user_email,
                user_password,
                user_username,
              };
              await mutateAsync(formData);
              console.log("success");
            } catch (error) {
              console.log("Error", error);
            }
          }}
          className="bg-primary w-full"
        >
          Sign-up
        </Button>

        <div className="border-t-2 w-full my-5"></div>

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
            <span>Sign-up with Google</span>
          </button>
        </div>
      </form>
    </>
  );
}

export default SignUp;
