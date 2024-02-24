"use client";

import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button
      className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition-all duration-75"
      onClick={() => signIn()}
    >
      Login
    </button>
  );
};

export const LogoutButton = () => {
  return (
    <button
      className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition-all duration-75"
      onClick={() => signOut()}
    >
      Logout
    </button>
  );
};
