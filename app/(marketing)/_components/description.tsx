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
      {"/*"}Eu sou desenvolvedor web fullstack, sou apaixonado por tecnologia.
      Possuo solido conhecimento em HTML, CSS, Javascript, React, Typescript,
      Tailwind, Next.js e Node.js. Sou uma pessoa dedicada e comprometida com
      minha carreira, estou disposto a ajudar com novos projetos, estou sempre
      aberto a novas contribuições e estou sempre buscando aprender e evoluir.
      Se quiser saber mais sobre mim, fique a vontade para entrar em contato.
      {"*/"}
    </p>
  );
};
