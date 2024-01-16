import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

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
      aria-label="Creating amazing digital experiences, with a focus on performance and usability."
    >      
      Creating amazing digital experiences, with a focus on performance and usability.
    </p>
  );
};
