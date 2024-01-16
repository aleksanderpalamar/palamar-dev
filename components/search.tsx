"use client";

import { getStore } from "@/app/_service/store";
import { useSearch } from "@/hooks/use-search";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  image: string;
  tags: string[];
  href: string;
  price: number;
  category: string;
}

export const Search = () => {
  const { searchValue, setSearchValue} = useSearch() || {};
  

  async function handleSearch(event: any) {
    if (setSearchValue) {
      setSearchValue(event.target.values);
    }
    const products = getStore().then((result) =>
      result.map((product) => ({
        ...product,
        category: "Hardware",
      }))
    );
    const filteredProducts = await products.then((result: Product[]) =>
      result.filter((product: Product) => {
        const name = product.name.toLowerCase();
        const category = product.category.toLowerCase();
        return searchValue && (name.includes(searchValue) || category.includes(searchValue));
      })
    );
    return filteredProducts;
  }

  return (
    <div className="flex items-center justify-center w-full h-12 px-2 bg-zinc-900 border border-zinc-700 rounded-md shadow-sm">
      <input
        type="search"
        placeholder="Pesquise o produto através da categoria ou nome..."
        className="w-full h-full px-2 text-sm text-zinc-100 bg-transparent outline-none"
        onChange={handleSearch}
      />
    </div>
  );
};
