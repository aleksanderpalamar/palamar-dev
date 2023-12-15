import { cn } from "@/lib/utils";
import { VT323 } from "next/font/google";

const bits = VT323({
  subsets: ["latin"],
  weight: ["400"],
});

export const Description = () => {
  return (
    <p
      className={cn(
        "text-zinc-400 word-spacing-2 break-words p-2 text-justify animate-fade-up text-base md:text-2xl",
        bits.className
      )}
    >
      <span className="font-bold text-zinc-400 text-2xl mr-2">{"/*"}</span>
      I&apos;m passionate about coding and have solid knowledge of{" "}
      <span className="bg-rose-500/10 text-rose-500 p-1 rounded-full">#HTML</span>,{" "}
      <span className="bg-amber-500/10 text-amber-500 p-1 rounded-full">#CSS</span>,{" "}
      <span className="bg-yellow-500/10 text-yellow-500 p-1 rounded-full">#JavaScript</span>,{" "}
      <span className="bg-lime-500/10 text-lime-500 p-1 rounded-full">#Node.js</span>,{" "}
      <span className="bg-sky-500/10 text-sky-500 p-1 rounded-full">#React</span>,{" "}
      <span className="bg-blue-500/10 text-blue-500 p-1 rounded-full">#TypeScript</span>,{" "}
      <span className="bg-pink-500/10 text-pink-500 p-1 rounded-full">#Tailwind</span>, and{" "}
      <span className="bg-violet-500/10 text-violet-500 p-1 rounded-full">#Next.js</span>. My professional journey is
      centered on crafting UI according to UX, ensuring that each web experience
      not only works perfectly, but also captivates users. By exploring these
      tools, I discover new ways to turn ideas into reality, while sharing my
      enthusiasm through innovative projects. I m here to not just write code,
      but to create engaging and impactful digital narratives.
      <span className="font-bold text-zinc-400 text-2xl ml-2">{"*/"}</span>
    </p>
  );
};
