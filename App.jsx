import { CategoryOps } from "./src/components/CategoryOps";
import { CreateElement } from "./src/components/CreateElement";
import Elements from "./src/components/Elements";
import { Filters } from "./src/components/Filters";
import { Verification } from "./src/components/Verification";
import { useElements } from "./src/hooks/useElements";
import { useFilters } from "./src/hooks/useFilters";

export default function App() {
  const { elements } = useElements();
  const { filteredElements } = useFilters();
  const FilterElements = filteredElements(elements);
  // Definitivamente hacer un p en rojito en los elementos que ✅ a medias
  // tengan un category borrado sino borraria los que no tienen category
  // y eso daria mucho zzzzzzzzz
  // lo de arriba creo que se puede con los filtros toca ver
  // falta la suma de los pesos de los elementos por categoria ✅
  // y hacer los filtros ✅
  // y hacer el verificador de peso para la mision✅
  // Pulir los textos y sus requirimientos el required ese tipo de cosas ✅
  // ahora solo falta hacerle los estilos

  return (
    <>
      <header>
        <h1>Mision Espacial</h1>
        <section>
          <Filters></Filters>
        </section>
      </header>
      <main>
        <section>
          <CreateElement></CreateElement>
          <CategoryOps></CategoryOps>
        </section>
        <section>
          <Elements elements={FilterElements}></Elements>
        </section>
        <section>
          <Verification></Verification>
        </section>
      </main>
    </>
  );
}
