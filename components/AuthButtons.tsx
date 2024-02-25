"use client";

import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      onClick={(e) => {
        e.preventDefault();
        signIn(undefined, { callbackUrl: "/dashboard" });
      }}
    >
      Login
    </button>
  );
};

export const LoginButtonMobile = () => {
  return (
    <button
      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
      onClick={(e) => {
        e.preventDefault();
        signIn();
      }}
    >
      Login
    </button>
  );
};

export const LogoutButton = () => {
  return (
    <button
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      onClick={(e) => {
        e.preventDefault();
        signOut();
      }}
    >
      Logout
    </button>
  );
};

export const LogoutButtonMobile = () => {
  return (
    <button
      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
      onClick={(e) => {
        e.preventDefault();
        signOut();
      }}
    >
      Logout
    </button>
  );
};

export const RegisterButton = () => {
  return (
    <a
      href="/register"
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      Register
    </a>
  );
};

export const RegisterButtonMobile = () => {
  return (
    <a
      href="/register"
      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    >
      Register
    </a>
  );
};
