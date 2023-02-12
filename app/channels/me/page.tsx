"use client";

import React from "react";
import discordSvg from "@/public/discord-mark-white.svg";
import Image from "next/image";
import { MdWavingHand } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

export default function page() {
  return (
    <div className="flex h-screen w-screen">
      <div className="w-[72px] flex-shrink-0 bg-slate-200 pt-3">
        <ul className="flex flex-col items-center justify-center">
          <li className="relative flex w-full justify-center">
            <div className="absolute left-0 top-0 flex h-full items-center">
              <div className="h-5/6 w-1 rounded-tr-lg rounded-br-lg bg-black"></div>
            </div>
            <div className="h-12 w-12 rounded-2xl bg-indigo-700 p-3">
              <div className="relative h-full w-full">
                <Image
                  src={discordSvg}
                  fill
                  className="object-contain"
                  alt="discord svg"
                />
              </div>
            </div>
          </li>
        </ul>
        <div className="my-2 flex justify-center">
          <div className="h-[2px] w-10 rounded-md bg-slate-300"></div>
        </div>
      </div>
      <div className="w-[240px] bg-slate-100">
        <div className="flex h-12 items-center justify-start border-b border-b-slate-300 py-2 px-3">
          <input
            type="text"
            placeholder="Find or start conversation"
            className="h-7 w-full rounded bg-slate-300 text-xs text-gray-600 placeholder:text-xs placeholder:font-semibold"
          />
        </div>
        <div className="flex flex-col py-2 px-3">
          <div className="flex h-10 items-center gap-2 rounded px-3">
            <MdWavingHand className="text-gray-600" />
            <span className="text-sm font-medium text-gray-600">Friends</span>
          </div>
          <div className="flex h-10 items-center gap-2 rounded bg-slate-300 px-3 [&>span]:text-gray-700">
            <MdWavingHand className="text-gray-600" />
            <span className="text-sm font-medium text-gray-600">Friends</span>
          </div>
        </div>
        <div className="flex flex-col py-2 px-3">
          <h2 className="flex items-center justify-between text-xs font-semibold text-gray-800">
            Direct Message{" "}
            <span data-tooltip="Create DM">
              <AiOutlinePlus className="cursor-pointer" size={17} />
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}
