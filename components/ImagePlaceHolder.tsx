import { ExtractInitialsFromName } from "@/utils/extact-initial-from-name";
import React from "react";

type props = {
  name: string;
  className?: string;
};
export default function ImagePlaceHolder(props: props) {
  return (
    <div
      data-placeholder-image={ExtractInitialsFromName(props.name)}
      className={props.className}
    ></div>
  );
}
