import { CategoryOps } from "./src/components/CategoryOps";
import { CreateElement } from "./src/components/CreateElement";
import Elements from "./src/components/Elements";
import { Filters } from "./src/components/Filters";
import { useElements } from "./src/hooks/useElements";
import { useFilters } from "./src/hooks/useFilters";

export default function App() {
  const { elements } = useElements();
  // hacer algo con useUpdate para actualizar los elementos el FilterLEments
  const { filteredElements } = useFilters();
  const FilterElements = filteredElements(elements);
  // o hacer un p en rojito en los elementos que tengan un category borrado
  // falta la suma de los pesos de los elementos por categoria
  // y hacer los filtros
  // y hacer el verificador de peso para la mision
  return (
    <>
      <header>
        <h1>Mision Espacial</h1>
      </header>
      <main>
        <section>
          <Filters></Filters>
        </section>
        <section>
          <CreateElement></CreateElement>
          <CategoryOps></CategoryOps>
        </section>
        <section>
          <Elements elements={FilterElements}></Elements>
        </section>
      </main>
    </>
  );
}
