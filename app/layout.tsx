import { PropsWithChildren } from "react";
import "./globals.css";

type props = PropsWithChildren;

export default function RootLayout(props: props) {
  return (
    <html lang="en">
      <head />
      <body>{props.children}</body>
    </html>
  );
}
