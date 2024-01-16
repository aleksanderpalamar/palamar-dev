import { SearchContext } from "@/context/search-provider";
import { useContext } from "react";

export const useSearch = () => {
  return useContext(SearchContext);
};