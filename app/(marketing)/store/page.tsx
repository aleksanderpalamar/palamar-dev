/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

type ProductProps = {
  id: number;
  name?: string;
  image: string;
  href: string;
  tag: string;
  price: string;}

const StorePage = () => {
  const listProducts = [
    {
      id: 1,
      name: "Código Limpo",
      image:
        "https://cdn.discordapp.com/attachments/1194975393971699732/1194975415001948160/image.png?ex=65b24e94&is=659fd994&hm=9d01f3e7be115e799afff4d6c19e6a2a563aea261c760dee8c94d5c6d5785bd3&",
      href: "https://www.amazon.com.br/dp/8576082675/?coliid=I43U30GCKOBFL&colid=3DVRN6V5D0QCE&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it&_encoding=UTF8&tag=palamardev-20&linkCode=ur2&linkId=61eff2b2b83b6ab7752993d60e0a4318&camp=1789&creative=9325",
      tag: "Book",
      price: "102,61",
    },
    {
      id: 2,
      name: "Arquitetura Limpa",
      image:
        "https://cdn.discordapp.com/attachments/1194975393971699732/1194975895744696330/image.png?ex=65b24f07&is=659fda07&hm=4ae4aabfaf61200b3ab7700200cde2557d14391a5df52b086d84e1779d70c604&",
      href: "https://www.amazon.com.br/dp/B085PP6Y8P/?coliid=I1VPIE731IWQ8W&colid=3DVRN6V5D0QCE&psc=0&ref_=list_c_wl_lv_ov_lig_dp_it&_encoding=UTF8&tag=palamardev-20&linkCode=ur2&linkId=26387311daba025da4bdb6ad929fa36a&camp=1789&creative=9325",
      tag: "Book",
      price: "53,09",
    },
    {
      id: 3,
      name: "Desenvolvimento Agil",
      image:
        "https://cdn.discordapp.com/attachments/1194975393971699732/1194976240059301908/image.png?ex=65b24f59&is=659fda59&hm=c24aa7f05823e50c2b39087b3a826c7018dfb9e63e1acfcf4138e07a89e923f2&",
      href: "https://www.amazon.com.br/Desenvolvimento-%25C3%25A1gil-limpo-volta-origens/dp/8550815004/ref=tmm_pap_swatch_0?_encoding=UTF8&coliid=I3MGELBDRRJ49F&colid=3DVRN6V5D0QCE&qid=&sr=&_encoding=UTF8&tag=palamardev-20&linkCode=ur2&linkId=914529d845b6da86d1eceae1f8cedf4b&camp=1789&creative=9325",
      tag: "Book",
      price: "37,71",
    },
    {
      id: 4,
      name: "Refatoração",
      image:
        "https://cdn.discordapp.com/attachments/1194975393971699732/1194980684662579320/image.png?ex=65b2537c&is=659fde7c&hm=08b53a23d935d4f1173405d7ec7727d14276f93cbf8d69956250d59492ba78a3&",
      href: "https://www.amazon.com.br/Refatora%25C3%25A7%25C3%25A3o-Aperfei%25C3%25A7oando-Design-C%25C3%25B3digos-Existentes/dp/8575227246/ref=tmm_pap_swatch_0?_encoding=UTF8&coliid=IMQVXA6S530SD&colid=3DVRN6V5D0QCE&qid=&sr=&_encoding=UTF8&tag=palamardev-20&linkCode=ur2&linkId=d4474b23a9b4302b08a1af4e6d9b1378&camp=1789&creative=9325",
      tag: "Book",
      price: "105,96",
    },
    {
      id: 4,
      name: "Mouse Logitech Lift",
      image:
        "https://cdn.discordapp.com/attachments/1194975393971699732/1194978396254523402/image.png?ex=65b2515b&is=659fdc5b&hm=5af2d06ced5ee6989e9beb3ec12857edffd6625c9331ffac6351ae0e95b9c883&https://cdn.discordapp.com/attachments/1194975393971699732/1194978396254523402/image.png?ex=65b2515b&is=659fdc5b&hm=5af2d06ced5ee6989e9beb3ec12857edffd6625c9331ffac6351ae0e95b9c883&",
      href: "https://www.amazon.com.br/dp/B09J1TB35S/?coliid=IMEZB8SOPH4VX&colid=3DVRN6V5D0QCE&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it&_encoding=UTF8&tag=palamardev-20&linkCode=ur2&linkId=30290d7d4f3dce8caff6c65be739b22c&camp=1789&creative=9325",
      tag: "Periféricos",
      price: "360,91",
    },
    {
      id: 5,
      name: "Mouse Pad Logitech",
      image: "https://cdn.discordapp.com/attachments/1194975393971699732/1194986053401055342/image.png?ex=65b2587c&is=659fe37c&hm=206d0df45f6a741ae0e1f46fb1a67cdc0053177478e6dafd37b3b2be98dd38cb&",
      href: "https://www.amazon.com.br/dp/B09DV8WKK8/?coliid=I2Q23EZULIVY0P&colid=3DVRN6V5D0QCE&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it&_encoding=UTF8&tag=palamardev-20&linkCode=ur2&linkId=6cd19cd382a7cb3a3db3b4fcfec1e53a&camp=1789&creative=9325",
      tag: "Periféricos",
      price: "124,39",
    },
    {
      id: 6,
      name: "Mouse Pad Gamer",
      image: "https://cdn.discordapp.com/attachments/1194975393971699732/1194986830660108381/image.png?ex=65b25936&is=659fe436&hm=5e41a0af7e1cfc55a7d62fb236d2af7cc46e49e8f3e47d033f833b4c8af0b139&",
      href: "https://www.amazon.com.br/dp/B0CLPDRL7D/?coliid=I19IAOQWKFF9K8&colid=3DVRN6V5D0QCE&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it&_encoding=UTF8&tag=palamardev-20&linkCode=ur2&linkId=b675579bdd9cd7bccf7c82de55030a82&camp=1789&creative=9325",
      tag: "Periféricos",
      price: "72,90",
    },
  ] as ProductProps[];

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
              <div className="absolute top-0 w-full h-full flex flex-col justify-around p-2">
                <div className="flex items-start justify-between w-full gap-x-2">
                  <Link
                    href={product.href}
                    target="_blank"
                    className="bg-zinc-50 p-2 rounded flex items-center text-zinc-950 hover:bg-zinc-300"
                  >
                    Buy
                  </Link>
                  <div className="text-sm font-bold text-white">
                    {product.name}
                  </div>
                  <div className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 transition-all text-xs rounded-xl p-1">
                    {product.tag}
                  </div>
                </div>
                <div className="p-2 flex text-zinc-950 w-1/2 gap-x-2">
                  <span className="text-white text-sm">R$:</span><p className="text-2xl font-bold text-white">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StorePage;
