import { ReactNode, createContext, useState } from "react";

type SearchProviderProps = {
  children: ReactNode;
};

type SearchContextType = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchContext = createContext<SearchContextType | null>(null);

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};