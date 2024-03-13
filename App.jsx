import { CategoryOps } from "./src/components/CategoryOps";
import { CreateElement } from "./src/components/CreateElement";
import Elements from "./src/components/Elements";
import { Filters } from "./src/components/Filters";
import { Verification } from "./src/components/Verification";
import { useCategorys } from "./src/hooks/useCategory";
import { useElements } from "./src/hooks/useElements";
import { useFilters } from "./src/hooks/useFilters";

export default function App() {
  const { categorys } = useCategorys();
  const { elements } = useElements();
  const { InsertBodyCategory } = useCategorys();
  const { filteredElements } = useFilters();

  const elementsWithCategory = InsertBodyCategory(elements);
  const FilterElements = filteredElements(elementsWithCategory);
  const OkCategorys = categorys.filter(
    (category) => category.CategoryName !== "Undefined"
  );
  // Corregir el map de Prioridad
  // Hacer que category sea un find dentro de cada element
  // ahora solo falta hacerle los estilos

  return (
    <>
      <header>
        <h1>Mision Espacial Hacia Marte</h1>
        <section>
          <Filters></Filters>
        </section>
      </header>
      <main>
        <section>
          <CreateElement categorys={OkCategorys}></CreateElement>
          <CategoryOps OkCategorys={OkCategorys}></CategoryOps>
        </section>
        <section>
          <Elements
            okCategorys={OkCategorys}
            elements={FilterElements}
          ></Elements>
        </section>
        <section>
          <Verification elements={elementsWithCategory}></Verification>
        </section>
      </main>
    </>
  );
}
