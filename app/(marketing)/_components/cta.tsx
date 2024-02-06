"use client";

import { useContact } from "@/hooks/use-contact";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { WhatsappLogo } from "phosphor-react";
import { FaThreads, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa6";

export const CTA = () => {
  const contact = useContact();

  return (
    <footer
      className="flex flex-col w-full border-[1px] border-muted-foreground/25 dark:border-zinc-700 rounded"
      aria-label="Call to action"
    >
      <div className="flex flex-col space-y-4 p-4">
        <h2
          className="text-xl font-bold transform uppercase text-left "
          aria-label="Let's develop something together?"
        >
          VAMOS DESENVOLVER ALGO JUNTOS?
        </h2>
        <p className="text-sm text-zinc-500 text-left">
          Se você tem uma ideia, uma solução ou um projeto que precisa ser
          desenvolvido, entre em contato conosco.
        </p>
        <div className="flex items-center gap-x-2">
          <div
            role="button"
            className="flex items-center w-[max-content] p-1 border-l-2 border-r-2 border-zinc-700/75 hover:bg-zinc-500/10 text-base cursor-pointer"
            onClick={contact.onOpen}
            aria-label="Button Contact"
          >
            <Mail className="w-4 h-4" />
            <span className="ml-2">Contato</span>
          </div>
          <div
            className="flex items-center w-[max-content] p-1 border-l-2 border-r-2 border-zinc-700/75 hover:bg-zinc-500/10 text-base cursor-pointer"
            role="button"
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send?phone=5541987938328",
                "_blank"
              )
            }
            aria-label="Button WhatsApp"
          >
            <WhatsappLogo className="w-4 h-4" />
            <span className="ml-2">WhatsApp</span>
          </div>
        </div>
      </div>
      <div className="border-t border-muted-foreground/25 dark:border-zinc-700 mt-4" />
      <div
        className="flex items-center justify-center p-4 gap-x-2"
        aria-label="Social"
      >
        <Link href="https://github.com/aleksanderpalamar">
          <div
            className="p-2 border-l-2 border-r-2 border-zinc-700/75 hover:bg-zinc-500/10 text-base"
            role="button"
            aria-label="Github"
          >
            <FaGithub className="w-7 h-7" />
          </div>
        </Link>
        <Link href="https://www.linkedin.com/in/aleksanderpalamar/">
          <div
            className="p-2 border-l-2 border-r-2 border-zinc-700/75 hover:bg-zinc-500/10 text-base"
            role="button"
            aria-label="Linkedin"
          >
            <FaLinkedin className="w-7 h-7" />
          </div>
        </Link>
        <Link href="https://www.threads.net/@palamar.dev">
          <div
            className="p-2 border-l-2 border-r-2 border-zinc-700/75 hover:bg-zinc-500/10 text-base"
            role="button"
            aria-label="Threads"
          >
            <FaThreads className="w-7 h-7" />
          </div>
        </Link>
        <Link href="https://x.com/Palamar_Dev_">
          <div
            className="p-2 border-l-2 border-r-2 border-zinc-700/75 hover:bg-zinc-500/10 text-base text-zinc-700 dark:text-white"
            role="button"
            aria-label="X"
          >
            <Image
              src="/assets/X.svg"
              width={20}
              height={20}
              alt=""
              className="w-7 h-7 dark:invert"
            />
          </div>
        </Link>
        <Link href="https://discord.com/users/273228029843734528">
          <div
            className="p-2 border-l-2 border-r-2 border-zinc-700/75 hover:bg-zinc-500/10 text-base"
            role="button"
            aria-label="Discord"
          >
            <FaDiscord className="w-7 h-7" />
          </div>
        </Link>
      </div>
    </footer>
  );
};
