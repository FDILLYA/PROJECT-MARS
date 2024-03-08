import { createContext, useState } from "react";

export const FiltersContext = createContext();

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    name: "all",
    Priority: "all",
    description: "all",
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
