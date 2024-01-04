import { CTA } from "./_components/cta"
import { Heading } from "./_components/heading"
import { Heroes } from "./_components/heroes"

const Home = () => {  
  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center dark:bg-zinc-900">
      <div
        className="flex flex-col items-center justify-center
      md:justify-between text-center flex-1 p-4"
      >
        <Heading />
        <Heroes />
        <CTA />
      </div>     
    </div>
  )
}

export default Home