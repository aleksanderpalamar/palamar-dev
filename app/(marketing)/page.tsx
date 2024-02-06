import { CTA } from "./_components/cta";
import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";

export const runtime = "edge";

export const revalidate = 60; // 60 seconds

const Home = () => {
  return (
    <section
      className="min-h-screen min-w-screen flex 
    flex-col items-center justify-center dark:bg-zinc-900"
    >
      <div
        className="container flex flex-col items-center justify-center
      md:justify-between flex-1 py-4 max-w-[80rem] w-full"
      >
        <Heroes />
        <CTA />
      </div>
    </section>
  );
};

export default Home;
