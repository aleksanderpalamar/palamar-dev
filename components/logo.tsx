import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const poppins = Poppins({ subsets: ["latin"], weight: "600" })

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center">
        <div className="items-center hover:opacity-75 transition gap-x-2 flex p-2 overflow-hidden">
          <Image 
            src="/images/favicon.png"
            width={100}
            height={100}
            className="w-5 h-5"
            alt="logo"
          />
          <h1 className={cn(
            "font-bold text-base text-[#8257e6] whitespace-nowrap overflow-hidden",
            poppins.className
          )}>
            Palamar.Dev
          </h1>
        </div>
      </div>
    </Link>
  )
}