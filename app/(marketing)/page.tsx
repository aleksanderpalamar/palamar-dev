import { CTA } from "./_components/cta";
import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";

export const runtime = "edge";

export const revalidate = 60; // 60 seconds


const Home = () => {
  return (
    <section
      className="min-h-screen max-w-6xl mx-auto p-2 flex 
    flex-col items-center justify-between dark:bg-[#1f1f1f]"
    >
      <Heading />
      <Heroes />
      <CTA />
    </section>
  );
};

export default Home;
