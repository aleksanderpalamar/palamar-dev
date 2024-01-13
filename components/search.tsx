"use client";

import { getStore } from "@/app/_service/store";
import { useSearchParams } from "next/navigation";

export const Search = () => {  
  
  return (
    <div 
      className="flex items-center justify-center w-full h-12 px-2 bg-zinc-900 border border-zinc-700 rounded-md shadow-sm"
    >
      <input 
        type="search" 
        placeholder="Pesquise o produto através da categoria ou nome..."
        className="w-full h-full px-2 text-sm text-zinc-100 bg-transparent outline-none" 
      />
    </div>
  )
};