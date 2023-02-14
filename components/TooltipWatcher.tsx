"use client";
import React, { useEffect } from "react";

export default function TooltipWatcher() {
  // useEffect(() => {
  //   const mouseMove = (e: MouseEvent) => {
  //     const doc = document.querySelector(
  //       '[style*="position: fixed; top: 12px; left: 12px;"]'
  //     );
  //     console.log(doc);

  //     const target = e.target as unknown as HTMLElement;

  //     const element = target.closest("[data-tooltip-selector]");
  //     if (element == null) return;

  //     const offset = element.getBoundingClientRect();
  //     const div = document.createElement("div");
  //     div.style.position = "fixed";
  //     div.style.top = `${offset.top}px`;
  //     div.style.left = `${offset.left}px`;
  //     const cloneNode = element.cloneNode(true);
  //     div.insertBefore(cloneNode, div.firstChild);
  //     document.body.insertAdjacentElement("beforeend", div);
  //   };

  //   document.querySelector("body")?.addEventListener("mousemove", mouseMove);

  //   return () => {
  //     document
  //       .querySelector("body")
  //       ?.removeEventListener("mousemove", mouseMove);
  //   };
  // }, []);

  useEffect(() => {
    // const tooltips = document.querySelectorAll(
    //   "[data-tooltip-selector]"
    // ) as NodeListOf<HTMLDivElement>;
    // tooltips.forEach((tooltip) => {
    //   const offset = tooltip.getBoundingClientRect();
    //   const div = document.createElement("div");
    //   div.style.position = "absolute";
    //   div.style.top = `${offset.top}px`;
    //   div.style.left = `${offset.left}px`;
    //   // div.style.height = `${offset.height}px`;
    //   // div.style.width = `${offset.width}px`;
    //   const cloneNode = tooltip.cloneNode(true);
    //   div.insertBefore(cloneNode, div.firstChild);
    //   document.body.insertAdjacentElement("beforeend", div);
    //   console.log(div);
    // });
    // const div = document.createElement("div");
    // div.style.background = "transparent";
    // document.body.appendChild(div);
  });

  useEffect(() => {
    const tooltips = document.querySelectorAll(
      "[data-tooltip-selector]"
    ) as NodeListOf<HTMLDivElement>;

    const mouseEnterHandler = (e: MouseEvent) => {
      // typeguard
      if (!(e.currentTarget instanceof HTMLElement)) return;
      const offset = e.currentTarget.getBoundingClientRect();
      const message = e.currentTarget.getAttribute("data-tooltip-selector")!;

      const cloneNode = e.currentTarget.cloneNode(true);

      const transitionDuration = +getComputedStyle(e.currentTarget)
        .getPropertyValue("--transition-duration")
        .replace(/[a-z]/g, "");

      // typeguard
      if (!(cloneNode instanceof HTMLElement)) return;

      cloneNode.style.position = "fixed";
      cloneNode.style.top = `${offset.top}px`;
      cloneNode.style.left = `${offset.left}px`;
      cloneNode.style.height = `${offset.height}px`;
      cloneNode.style.width = `${offset.width}px`;
      // cloneNode.style.background = "transparent";
      cloneNode.setAttribute("data-tooltip", message);

      cloneNode.addEventListener("mouseleave", (e) => {
        (e.target as HTMLElement).addEventListener("transitionend", (e) =>
          (e.target as HTMLElement).remove()
        );
      });

      document.body.insertAdjacentElement("beforeend", cloneNode);
    };

    tooltips.forEach((tooltip) => {
      tooltip.addEventListener("mouseenter", mouseEnterHandler);
    });

    return () => {
      tooltips.forEach((tooltip) => {
        tooltip.removeEventListener("mouseenter", mouseEnterHandler);
      });
    };
  }, []);

  return <></>;
}
