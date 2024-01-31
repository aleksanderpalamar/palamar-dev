"use client";

import { useEffect, useState } from "react";
import { Navbar } from "./navbar";

export default function Header() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    let element = document.getElementById("logo");
    if (element) {
      let style = window.getComputedStyle(element);
      let height = style.getPropertyValue("height");
      let logo = document.getElementById("logo");
      if (logo) {
        logo.style.height = height;
      }
    } else {
      console.error("Element not found");
    }
    setIsMounted(true);
  }, []);

  switch (isMounted) {
    case false:
      return null;
  }

  return (
    <header className="bg-[#1a1a1a] border-b-[1px] border-zinc-700">
      <Navbar />
    </header>
  );
}
