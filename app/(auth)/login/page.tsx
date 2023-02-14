"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useEffect } from "react";

export default function login() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/channels/me");
  };

  return (
    <div className="relative z-30 flex w-9/12 max-w-xl flex-col items-center rounded-lg bg-slate-100 p-10 shadow-lg">
      <p className="text-2xl font-bold">Welcome back!</p>
      <p className="text-gray-500">We're so excited to see you again!</p>
      <form action="" className="w-full space-y-5" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">
            email <span className="text-xs text-red-900">*</span>
          </label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form-control">
          <label htmlFor="password">
            password <span className="text-xs text-red-900">*</span>
          </label>
          <input type="password" name="password" id="password" />
          <Link href={"/forgot-password"}>
            <span className="text-xs font-medium text-indigo-700 hover:underline">
              Forgot your password?
            </span>
          </Link>
        </div>
        <button className="helper w-full rounded-md bg-indigo-700 py-3 font-medium text-white duration-150 hover:bg-indigo-800">
          Login
        </button>
        <span className="text-xs">
          Need an account?{" "}
          <Link href={"/register"}>
            <span className="text-xs font-medium text-indigo-700 hover:underline">
              Register
            </span>
          </Link>
        </span>
      </form>

      <button className="group mt-5 flex w-full items-stretch">
        <span className="inline-block bg-white p-3">
          <FcGoogle size={25} />
        </span>
        <p className="flex flex-grow items-center justify-center bg-blue-600 text-sm font-semibold text-white duration-150 group-hover:bg-blue-700">
          Sign in with Google
        </p>
      </button>
    </div>
  );
}
