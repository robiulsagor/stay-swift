"use client";

import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <button
      onClick={() =>
        signOut({
          callbackUrl: "http://localhost:3000/login",
        })
      }
      className="bg-orange-500 py-1 px-2 text-white font-bold rounded-lg hover:bg-orange-400 transition"
    >
      LogOut{" "}
    </button>
  );
}
