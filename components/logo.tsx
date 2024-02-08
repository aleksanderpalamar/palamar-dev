import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
  return (
    <Link href="/">
      <div className="h-10 w-auto sm:h-12 flex items-center">
      <Image
        alt="Logo"
        className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
        height="70"
        src="/images/favicon.png"
        width="70"
      />
      <p className="font-normal text-lg">Palamar.Dev</p>
    </div>
    </Link>
  )
}