/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "./ui/button";

interface BannerProps {
  title: string;
  description: string;
  image?: React.ReactNode;
  span: string;
  handleGetStarted?: () => void;
}

export const Banner = ({
  title,
  description,
  image,
  span,
  handleGetStarted,
}: BannerProps) => {
  return (
    <div
      className="p-1 border-[1px] shadow-sm mt-8
      bg-fuchsia-100 text-fuchsia-700 rounded-md w-full mb-14"
      aria-label="Banner marketing"
    >
      <div className="flex-1 flex gap-2 h-full w-full break-words p-2">
        <div className="w-1/2 items-center justify-center flex">
          {image && <>{image}</>}
          <h2
            className="text-transparent bg-clip-text bg-gradient-to-r 
                from-violet-500 to-orange-500 font-bold text-3xl"
          >
            {title}
          </h2>
        </div>
        <div className="w-1/2 items-center justify-center flex flex-col">
          <p className="text-justify">
            {description}
          </p>
          <Button            
            size="sm"
            onClick={handleGetStarted}
            className="mt-4 bg-gradient-to-r from-fuchsia-500 to-violet-500 
            text-white hover:from-fuchsia-600 hover:to-violet-600 transition"
          >
            {span}
          </Button>
        </div>
      </div>
    </div>
  );
};
