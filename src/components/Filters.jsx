import { useId } from "react";
import { useCategorys } from "../hooks/useCategory";
import { useFilters } from "../hooks/useFilters";

export function Filters() {
  const { categorys } = useCategorys();
  const { filters, setFilters } = useFilters();

  const CategoryNameId = useId();
  const PriorityId = useId();
  const minWeightId = useId();

  const handleChange = (event) => {
    setFilters({
      ...filters,
      minWeight: Number(event.target.value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const priority = event.target.elements["priority"].value;
    const categoryName = event.target.elements["categoryName"].value;
    const priorityif = priority === "all" ? "all" : Number(priority);

    console.log(priorityif, categoryName);

    setFilters({
      ...filters,
      Priority: priorityif,
      category: categoryName,
    });
  };
  // listo ahora en teoria no se puede repetir nombre de categoria
  return (
    <>
      <h2>Filtros</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor={CategoryNameId}>Category Name</label>
        <select name="categoryName" id={CategoryNameId}>
          <option value="all">Todos</option>
          {categorys.map((category) => {
            return (
              <option key={category.id} value={category.CategoryName}>
                {category.CategoryName}
              </option>
            );
          })}
        </select>
        <label htmlFor={PriorityId}>Prioridad</label>
        <select name="priority" id={PriorityId}>
          <option value="all">Todos</option>
          {categorys.map((category) => {
            return (
              <option key={category.id} value={category.Priority}>
                {category.Priority}
              </option>
            );
          })}
        </select>

        <button type="submit">Filtrar</button>
      </form>
      <div>
        <label htmlFor={minWeightId}>Peso minimo a partir de:</label>
        <input
          id={minWeightId}
          onChange={handleChange}
          value={filters.minWeight}
          type="range"
          min={0}
          max={1000}
        />
        <span>{filters.minWeight}KG</span>
      </div>
    </>
  );
}
