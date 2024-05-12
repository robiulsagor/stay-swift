"use client";

import { register } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function RegistrationForm() {
  const [error, setError] = useState("");
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const user = await register(formData);
      console.log(user);

      if (!user?.error) {
        toast.success(user?.message);
        router.push("/login");
      } else {
        toast.error(user?.message);
        setError(user?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setError(error.message || "Something went wrong");
    }
  };

  return (
    <>
      {error && <div className="text-red-500 font-bold"> {error} </div>}

      <form className="login-form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="fname">First Name</label>
          <input type="text" name="fname" id="fname" />
        </div>
        <div>
          <label htmlFor="lname">Last Name</label>
          <input type="text" name="lname" id="lname" />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button type="submit" className="btn-primary w-full mt-4">
          Create account
        </button>
      </form>
    </>
  );
}
