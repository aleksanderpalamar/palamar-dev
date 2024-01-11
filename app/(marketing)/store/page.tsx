import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const StorePage = () => {
  const listProducts = [
    {
      id: 1,
      name: "Product 1",
      image: "https://cdn.discordapp.com/attachments/811800332006457356/1188820804520132638/e9a8244b217a8cb45e0425252c6d4606.jpg?ex=659beaa7&is=658975a7&hm=57970c20a79e1bd5358ee984c1e3534aadd5a7a46f9fc863e320ded944259022&",
      href: ""
    },
    {
      id: 2,
      name: "Product 2",
      image: "https://cdn.discordapp.com/attachments/811800332006457356/1188820804520132638/e9a8244b217a8cb45e0425252c6d4606.jpg?ex=659beaa7&is=658975a7&hm=57970c20a79e1bd5358ee984c1e3534aadd5a7a46f9fc863e320ded944259022&",
      href: ""
    },
    {
      id: 3,
      name: "Product 3",
      image: "https://cdn.discordapp.com/attachments/811800332006457356/1188820804520132638/e9a8244b217a8cb45e0425252c6d4606.jpg?ex=659beaa7&is=658975a7&hm=57970c20a79e1bd5358ee984c1e3534aadd5a7a46f9fc863e320ded944259022&",
      href: ""
    },
    {
      id: 4,
      name: "Product 4",
      image: "https://cdn.discordapp.com/attachments/811800332006457356/1188820804520132638/e9a8244b217a8cb45e0425252c6d4606.jpg?ex=659beaa7&is=658975a7&hm=57970c20a79e1bd5358ee984c1e3534aadd5a7a46f9fc863e320ded944259022&",
      href: ""
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start dark:bg-zinc-900">
      <div className="max-w-6xl p-2 space-y-4 mt-40">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 text-center">
          Loja
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-left mt-40">
          {listProducts.map((product) => (
            <div
              key={product.id}
              className="w-[258px] h-[160px] bg-base-100 dark:bg-zinc-800 shadow-xl hover:shadow-2xl 
              dark:shadow-2xl hover:scale-105 transition duration-500 rounded-xl overflow-hidden
              flex flex-col relative"
            >
              <img
                src={product.image}
                alt=""
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute top-0 w-full h-full flex items-start justify-between p-2">
                <Link href={product.href}
                  target="_blank"                  
                  className="bg-zinc-50 p-2 rounded flex items-center text-zinc-950 hover:bg-zinc-300"
                >
                  Comprar
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StorePage;
