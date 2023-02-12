import Link from "next/link";
import React, { PropsWithChildren, useRef } from "react";

type props = PropsWithChildren<{ name: string; id: string }>;

export default function CheckBoxInput(props: props) {
  const checkBoxRef = useRef<null | HTMLInputElement>(null);
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        name={props.name}
        id={props.id}
        className="peer hidden"
        ref={checkBoxRef}
      />
      <div
        className="flex h-6 w-6 cursor-pointer items-center justify-center rounded border border-gray-300 peer-checked:border-none peer-checked:bg-indigo-700 peer-checked:before:text-white peer-checked:before:content-['✓']"
        onClick={() => {
          checkBoxRef.current?.click();
        }}
      ></div>
      <label
        htmlFor={props.id}
        className="cursor-pointer select-none text-xs font-normal normal-case"
      >
        {props.children}
      </label>
    </div>
  );
}
