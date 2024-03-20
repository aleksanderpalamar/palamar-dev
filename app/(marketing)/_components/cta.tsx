"use client";

import { Button } from "@/components/ui/button";
import { LanguageContext } from "@/context/language-context";
import { useContact } from "@/hooks/use-contact";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { WhatsappLogo } from "phosphor-react";
import { useContext } from "react";
import { FaThreads, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa6";

export const CTA = () => {
  const { language } = useContext(LanguageContext)!;
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
          {language === "en"
           ? "Let's develop something together?"
            : "Vamos desenvolver algo junto?"}
        </h2>
        <p className="text-sm text-zinc-500 text-left">
          {language === "en"
           ? "If you have an idea, a solution or a project that needs to be developed, contact us."
            : "Se você tem uma ideia, uma solução ou um projeto que precisa ser desenvolvido, entre em contato conosco."}
        </p>
        <div className="flex items-center gap-x-2">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center w-[max-content] p-1 border-l-2 border-r-2 border-zinc-700/75 hover:bg-zinc-500/10 text-base cursor-pointer text-white"
            onClick={contact.onOpen}
            aria-label="Button Contact"
          >
            <Mail className="w-4 h-4" />
            <span className="ml-2">
              {language === "en"? "Contact" : "Contato"}
            </span>
          </Button>
          <Button
            className="flex items-center w-[max-content] p-1 border-l-2 border-r-2 border-zinc-700/75 hover:bg-zinc-500/10 text-base cursor-pointer text-white"
            variant="ghost"
            size="sm"
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
          </Button>
        </div>
      </div>
      <div className="border-t border-muted-foreground/25 dark:border-zinc-700 mt-4" />
      <div
        className="flex items-center justify-center p-4 gap-x-2"
        aria-label="Social"
      >
        <Link href="https://github.com/aleksanderpalamar">
          <Button
            variant="ghost"
            size="icon"
            className="p-2 border-l-2 border-r-2 border-zinc-700/75 hover:bg-zinc-500/10 text-white"
            role="button"
            aria-label="Github"
          >
            <FaGithub className="w-7 h-7" />
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/in/aleksanderpalamar/">
          <Button
            variant="ghost"
            size="icon"
            className="p-2 border-l-2 border-r-2 border-zinc-700/75 hover:bg-zinc-500/10 text-white"
            role="button"
            aria-label="Linkedin"
          >
            <FaLinkedin className="w-7 h-7" />
          </Button>
        </Link>
        <Link href="https://www.threads.net/@palamar.dev">
          <Button
            variant="ghost"
            size="icon"
            className="p-2 border-l-2 border-r-2 border-zinc-700/75 hover:bg-zinc-500/10 text-white"
            role="button"
            aria-label="Threads"
          >
            <FaThreads className="w-7 h-7" />
          </Button>
        </Link>
        <Link href="https://x.com/Palamar_Dev_">
          <Button
            variant="ghost"
            size="icon"
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
          </Button>
        </Link>
        <Link href="https://discord.com/users/273228029843734528">
          <Button
            variant="ghost"
            size="icon"
            className="p-2 border-l-2 border-r-2 border-zinc-700/75 hover:bg-zinc-500/10 text-white"
            role="button"
            aria-label="Discord"
          >
            <FaDiscord className="w-7 h-7" />
          </Button>
        </Link>
      </div>
    </footer>
  );
};
