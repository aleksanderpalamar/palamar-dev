import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
  return (
    <Link href="/">
      <div className="h-10 w-auto sm:h-12 flex items-center">
      <Image
        alt="Logo"
        className="aspect-auto overflow-hidden rounded-lg object-contain object-center mr-2"
        height="40"
        src="/images/favicon.png"
        width="40"
        loading="lazy"
      />
      <p className="font-normal text-lg">Palamar.Dev</p>
    </div>
    </Link>
  )
}