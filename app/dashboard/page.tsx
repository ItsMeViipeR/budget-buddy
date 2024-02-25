"use client";

import { Card } from "@/components/card";
import { getSession, signIn, useSession } from "next-auth/react";

const Dashboard = () => {
  const session = typeof useSession === "function" ? useSession().data : null;

  return (
    <>
      {session?.user ? (
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <header className="text-center sm:text-right">
              <h2 className="text-sm font-bold text-gray-300 sm:text-2xl">
                Hello {session?.user?.name}!
              </h2>
            </header>
            <section>
              <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:gap-x-16">
                  <div className="mx-auto max-w-lg text-center lg:mx-0 min-w-full">
                    <h2 className="text-3xl font-bold sm:text-4xl lg:text-center">
                      What do you want to do today?
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    <Card />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      ) : (
        <h1>
          Please{" "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              signIn(undefined, { callbackUrl: "/dashboard" });
            }}
          >
            login
          </a>
        </h1>
      )}
    </>
  );
};

export default Dashboard;
