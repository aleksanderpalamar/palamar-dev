import Image from "next/image";
import Link from "next/link";
import { getStore } from "@/app/_service/store";
import { Badge } from "@/components/ui/badge";

export const revalidate = 60; // 60 seconds
export const dynamic = "force-dynamic";

const StorePage = async () => {
  const products = await getStore();

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-start dark:bg-zinc-900">
      <div className="container items-center justify-center w-max  p-2 space-y-4 mt-40">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 text-center">
          Shop
        </h1>        
        <Badge className="text-[#8257e6] bg-[#8257e6]/10 hover:bg-[#8257e6]/20">
          <p>The products listed here are Amazon affiliates.</p>
        </Badge>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-left mt-40">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[258px] h-[160px] bg-base-100 dark:bg-zinc-800 shadow-xl hover:shadow-2xl 
              dark:shadow-2xl hover:scale-105 transition duration-500 rounded-xl overflow-hidden
              flex flex-col relative"
            >
              <Image
                src={product.image}
                width={1000}
                height={1000}
                alt=""
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute top-0 w-full h-full flex flex-col justify-around p-2">
                <div className="flex items-start justify-between w-full gap-x-2">
                  <Link
                    href={product.href}
                    target="_blank"
                    className="bg-zinc-50 p-2 rounded flex items-center text-zinc-950 hover:bg-zinc-300"
                  >
                    Buy
                  </Link>
                  <div className="text-xs font-bold text-white">
                    {product.name}
                  </div>
                  <div className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 transition-all text-xs rounded-xl p-1">
                    {product.tags}
                  </div>
                </div>
                <div className="p-2 flex text-zinc-950 w-1/2 gap-x-2">
                  <span className="text-white text-sm">R$:</span>
                  <p className="text-2xl font-bold text-white">
                    <span>{product.price}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorePage;
