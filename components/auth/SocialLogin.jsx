"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function SocialLogin() {
  async function handleLogin(provider) {
    try {
      const user = await signIn(provider, {
        callbackUrl: "http://localhost:3000",
      });
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <>
      <div>
        <div className="text-center text-xs text-gray-500">or Signup with</div>
        <div className="flex gap-4">
          <button
            onClick={() => handleLogin("github")}
            className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center"
          >
            <Image src="/github.svg" width={30} height={50} alt="fb" />
            <span>Github</span>
          </button>
          <button
            onClick={() => handleLogin("google")}
            className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center"
          >
            <Image src="/google.png" width={30} height={50} alt="google" />
            <span>Google</span>
          </button>
        </div>
      </div>
    </>
  );
}
