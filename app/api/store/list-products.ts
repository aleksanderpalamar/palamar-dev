type ProductProps = {
  id: number;
  name?: string;
  image: string;
  href: string;
  tag: string;
  price: string;
}

export const listProducts = [
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
  {
    id: 7,
    name: "Suporte para Monitor",
    image: "https://cdn.discordapp.com/attachments/1194975393971699732/1195021627906338876/image.png?ex=65b2799e&is=65a0049e&hm=00396f5ec434fcbf3489f6aab9f72533bac16040b375ea5bf6bd02f82249799f&",
    href: "https://www.amazon.com.br/gp/product/B0BTZRQSXK/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1&_encoding=UTF8&tag=palamardev-20&linkCode=ur2&linkId=3b9bbafeb0da8c54fdccfb7a98ca13de&camp=1789&creative=9325",
    tag: "Periféricos",
    price: "204,69",
  },
  {
    id: 8,
    name: "Teclado Mecânico 60% Redragon",
    image: "https://cdn.discordapp.com/attachments/1194975393971699732/1195022327944060928/image.png?ex=65b27a45&is=65a00545&hm=6f4769a1ef637a0b0ce05e1805684a397826f2718ed623126d802dc2ed65a613&",
    href: "https://www.amazon.com.br/gp/product/B0BN4MMSKF/ref=ppx_yo_dt_b_asin_title_o01_s01?ie=UTF8&psc=1&_encoding=UTF8&tag=palamardev-20&linkCode=ur2&linkId=4ae6ea4817607a32059a65e78fd0e853&camp=1789&creative=9325",
    tag: "Periféricos",
    price: "155,99",
  },
  {
    id: 9,
    name: "Processador Ryzen 5 5600G",
    image: "https://cdn.discordapp.com/attachments/1194975393971699732/1195023589422936225/image.png?ex=65b27b72&is=65a00672&hm=78c0fb5c7b0447fe3acf37407348a3bf1c17c8645d8a8f8ab95795786cd07bef&",
    href: "https://www.amazon.com.br/Processador-AMD-Ryzen-5600G-Stealth/dp/B092L9GF5N/?_encoding=UTF8&tag=palamardev-20&linkCode=ur2&linkId=526192cb7202fc55487610a84c09ec4d&camp=1789&creative=9325&th=1",
    tag: "Hardware",
    price: "815,20",
  },
  {
    id: 10,
    name: "Placa Mãe Asus TUF Gaming B550M-Plus",
    image: "https://cdn.discordapp.com/attachments/1194975393971699732/1195027322928107591/image.png?ex=65b27eec&is=65a009ec&hm=a46f51d524f8d7168013d676b3de7b65a72a15488bda6dd244727511f0bbb3e5&",
    href: "https://www.amazon.com.br/Placa-Asus-TUF-GAMING-B550M-PLUS/dp/B089HDJS79/?&_encoding=UTF8&tag=palamardev-20&linkCode=ur2&linkId=1b6d915bd6a24eb066df8c079be7f186&camp=1789&creative=9325",
    tag: "Hardware",
    price: "1.068,99",
  },
  {
    id: 11,
    name: "Placa de Vídeo RTX 3060",
    image: "https://cdn.discordapp.com/attachments/1194975393971699732/1195028751508066406/image.png?ex=65b28040&is=65a00b40&hm=136c4ecb631b71acb317f29a5532ec080eacbb4e3f9f31f3e400730a3a0833b7&",
    href: "https://www.amazon.com.br/RTX3060-1-CLICK-192BITS-Galax-36NOL7MD1VOC/dp/B092CNSSV5/?&_encoding=UTF8&tag=palamardev-20&linkCode=ur2&linkId=efe5b15f9256503aa779fba319ee4803&camp=1789&creative=9325",
    tag: "Hardware",
    price: "2.089,00",
  }
] as ProductProps[];