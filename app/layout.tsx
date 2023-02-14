import { PropsWithChildren } from "react";
import "@/styles/globals.scss";
import TooltipWatcher from "@/components/TooltipWatcher";

type props = PropsWithChildren;

export default function RootLayout(props: props) {
  return (
    <html lang="en">
      <head />
      <body className="">
        {props.children}
        <TooltipWatcher />
      </body>
    </html>
  );
}
