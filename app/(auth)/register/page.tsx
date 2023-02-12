"use client";

import CheckBoxInput from "@/components/CheckBoxInput";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="relative z-30 flex w-9/12 max-w-lg flex-col items-center rounded-lg bg-slate-100 p-10 shadow-lg">
      <p className="mb-6 text-2xl font-bold">Create an account</p>
      <form action="" className="w-full space-y-5">
        <div className="form-control">
          <label htmlFor="email">
            email <span className="text-xs text-red-900">*</span>
          </label>
          <input type="email" name="email" id="email" />
        </div>

        <div className="form-control">
          <label htmlFor="username">
            username <span className="text-xs text-red-900">*</span>
          </label>
          <input type="text" name="username" id="username" />
        </div>

        <div className="form-control">
          <label htmlFor="password">
            password <span className="text-xs text-red-900">*</span>
          </label>
          <input type="password" name="password" id="password" />
        </div>

        <div className="form-control">
          <label htmlFor="date-of-birth">
            Date of birth <span className="text-xs text-red-900">*</span>
          </label>
          <input
            type="date"
            name="date-of-birth"
            id="date-of-birth"
            onFocus={(e) => {
              e.currentTarget.showPicker();
            }}
          />
        </div>

        <CheckBoxInput name="aggree" id="aggree">
          I have read and agree to Discord's{" "}
          <a href="https://discord.com/terms" target={"_blank"}>
            <span className="text-indigo-700 hover:underline">
              Terms of Service
            </span>
          </a>{" "}
          and{" "}
          <a href="https://discord.com/privacy" target={"_blank"}>
            <span className="text-indigo-700 hover:underline">
              Privacy Policy
            </span>
          </a>
          .
        </CheckBoxInput>
        <button className="w-full rounded-md bg-indigo-700 py-3 font-medium text-white duration-150 hover:bg-indigo-800">
          Register
        </button>
        <span className="text-xs">
          <Link href={"/login"}>
            <span className="text-xs font-medium text-indigo-700 hover:underline">
              Alredy have an account?
            </span>
          </Link>
        </span>
      </form>
    </div>
  );
}
