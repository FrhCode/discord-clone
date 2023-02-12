import Image from "next/image";
import { PropsWithChildren } from "react";
import svg from "@/public/auth.svg";

type props = PropsWithChildren;

export default function RootLayout(props: props) {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      <div className="absolute inset-0">
        <div className="relative  h-full w-full">
          <Image src={svg} fill className="object-cover" alt="bg" />
        </div>
      </div>
      {/* child below */}
      {props.children}
    </div>
  );
}
