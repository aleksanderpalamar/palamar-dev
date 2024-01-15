import { cn } from "@/lib/utils";
import { VT323, Poppins } from "next/font/google";

const bits = VT323({
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export const Description = () => {
  return (
    <p
      className={cn(
        "text-zinc-400 word-spacing-2 break-words p-2 text-justify animate-fade-up text-base font-light",
        poppins.className
      )}
    >
      Unindo design e código para criar experiências digitais incríveis.
    </p>
  );
};
