import { useContext } from "react";
import { FiltersContext } from "../context/FiltersContext";

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

  const filteredElements = (elements) => {
    return elements.filter((element) => {
      return (
        (filters.name === "all" || filters.Name === element.name) &&
        (filters.Priority === "all" || filters.Priority === element.Priority) &&
        (filters.description === "all" ||
          filters.description === element.description)
      );
    });
  };

  return { filters, setFilters, filteredElements };
}
