import { Separator } from "@/components/ui/separator"
import { Heading } from "./_components/heading"
import { Heroes } from "./_components/heroes"

const Home = () => {  
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center dark:bg-[#313338]">
      <div
        className="flex flex-col items-center justify-center
      md:justify-start text-center flex-1 p-4 mt-20"
      >
        <Heading />
        <Heroes />
      </div>     
    </div>
  )
}

export default Home