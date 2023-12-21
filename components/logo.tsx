import { cn } from "@/lib/utils"
import { Poppins, VT323 } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const poppins = Poppins({ subsets: ["latin"], weight: "600" })
const bits = VT323({
  subsets: ["latin"],
  weight: ["400"],
})

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center">
        <div className="items-center hover:opacity-75 transition gap-x-2 flex p-2">
          <Image 
            src="/images/favicon.png"
            width={30}
            height={30}
            alt="logo"
          />
          <h1 className={cn(
            "font-bold text-lg text-[#8257e6] whitespace-nowrap overflow-hidden",
            poppins.className
          )}>
            Palamar.Dev
          </h1>
        </div>
      </div>
    </Link>
  )
}