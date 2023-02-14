import React, { useEffect } from "react";
import discordsvg from "@/public/discord-mark-white.svg";
import Image from "next/image";
import { MdWavingHand } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { ExtractInitialsFromName } from "@/utils/extact-initial-from-name";
import ImagePlaceHolder from "@/components/ImagePlaceHolder";

const getUser = async () => {
  const data = await fetch("http://localhost:4000/users").then((res) =>
    res.json()
  );

  console.log(data);

  return data as { name: string; id: string }[];
};

export default async function page() {
  const users = await getUser();

  return (
    <div className="flex h-screen w-screen">
      {/* baris satu */}
      <div className="hide-scrollbar max-h-screen w-[72px] flex-shrink-0 overflow-hidden overflow-y-auto bg-slate-200 pt-3">
        <ul className="flex flex-col items-center justify-center">
          <li className="relative flex w-full justify-center">
            <div className="absolute left-0 top-0 flex h-full items-center">
              <div className="h-5/6 w-1 rounded-tr-lg rounded-br-lg bg-black"></div>
            </div>
            <div
              className="h-12 w-12 rounded-2xl bg-indigo-700 p-3 text-sm"
              data-tooltip-selector="Direct Messages"
              data-tooltip-position="right"
            >
              <div className="relative h-full w-full">
                <Image
                  src={discordsvg}
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
        <ul className="flex flex-col items-center justify-center gap-3">
          {users.slice(0, 20).map((user) => {
            return (
              <li
                className="relative flex w-full justify-center last:mb-3"
                key={user.id}
              >
                <div
                  className="group h-12 w-12 rounded-[30px] bg-white p-3 text-sm duration-150 hover:rounded-xl hover:bg-indigo-700"
                  data-tooltip-selector={user.name}
                  data-tooltip-position="right"
                >
                  <div className="relative h-full w-full">
                    {/* <Image
                  src={discordsvg}
                  fill
                  className="object-contain"
                  alt="discord svg"
                /> */}
                    <ImagePlaceHolder
                      name={user.name}
                      className="group-hover:text-white"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* baris dua */}
      <div className="w-[240px] bg-slate-100">
        <div className="flex h-12 items-center justify-start border-b border-b-slate-300 py-2 px-3">
          <input
            type="text"
            placeholder="Find or start conversation"
            className="h-7 w-full rounded bg-slate-300 text-xs text-gray-600 placeholder:text-xs placeholder:font-semibold"
          />
        </div>
        <div className="flex flex-col gap-1 py-2 px-3">
          <div className="group flex h-10 cursor-pointer items-center gap-2 rounded px-3 duration-150 hover:bg-slate-300">
            <MdWavingHand className="text-gray-500 duration-150 group-hover:text-gray-700" />
            <span className="text-sm font-medium text-gray-500 duration-150 group-hover:text-gray-700">
              Friends
            </span>
          </div>
          <div
            className={`group flex h-10 cursor-pointer items-center gap-2 rounded px-3 duration-150 hover:bg-slate-300 ${
              true &&
              "bg-slate-300 [&>span]:text-gray-700 [&>svg]:text-gray-700"
            }`}
          >
            <MdWavingHand className="text-gray-500 duration-150 group-hover:text-gray-700" />
            <span className="text-sm font-medium text-gray-500 duration-150 group-hover:text-gray-700">
              Friends
            </span>
          </div>
        </div>
        <div className="flex flex-col py-2 px-3">
          <h2 className="flex items-center justify-between text-xs font-semibold text-gray-500">
            Direct Message{" "}
            <span
              data-tooltip-selector="Create DM"
              data-tooltip-position="top"
              className="text-xs"
            >
              <AiOutlinePlus className="cursor-pointer" size={17} />
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}
