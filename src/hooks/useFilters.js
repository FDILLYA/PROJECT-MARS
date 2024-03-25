import { useContext } from "react";
import { FiltersContext } from "../context/FiltersContext";

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

  const filteredElements = (elements) => {
    return elements.filter((element) => {
      return (
        (filters.category === "all" ||
          filters.category === element.category.categoryname) &&
        (filters.priority === "all" ||
          filters.priority === element.category.priority) &&
        (filters.name === "all" || filters.name === element.name) &&
        (filters.description === "all" ||
          filters.description === element.description) &&
        (filters.minWeight === 0 || filters.minWeight <= element.weight)
      );
    });
  };

  return { filters, setFilters, filteredElements };
}
