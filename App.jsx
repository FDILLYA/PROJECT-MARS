import Item from "antd/es/list/Item";
import { CategoryOps } from "./src/components/CategoryOps";
import { CreateElement } from "./src/components/CreateElement";
import Elements from "./src/components/Elements";
import { Filters } from "./src/components/Filters";
import { Verification } from "./src/components/Verification";
import { useCategorys } from "./src/hooks/useCategory";
import { useElements } from "./src/hooks/useElements";
import { useFilters } from "./src/hooks/useFilters";
import { Menu } from "antd";
import { useState } from "react";

export default function App() {
  const [tosee, setTosee] = useState({
    elements: true,
    categories: false,
    calculadora: false,
  });
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

  const menuItems = [
    { key: "elements", label: "Elementos" },
    { key: "categories", label: "Categorías" },
    { key: "calculadora", label: "Calculadora" },
  ];

  const handleClick = ({ key }) => {
    if (key === "elements") {
      setTosee((prevState) => ({
        ...prevState,
        elements: true,
        categories: false,
        calculadora: false,
      }));
    }
    if (key === "categories") {
      setTosee((prevState) => ({
        ...prevState,
        elements: false,
        categories: true,
        calculadora: false,
      }));
    }
    if (key === "calculadora") {
      setTosee((prevState) => ({
        ...prevState,
        elements: false,
        categories: false,
        calculadora: true,
      }));
    }
  };

  return (
    <>
      <header>
        <Menu
          onClick={handleClick}
          style={{ background: "#202b45" }}
          mode="horizontal"
          items={menuItems}
        />
        <h1>Mision Espacial Hacia Marte</h1>
        {tosee.elements && (
          <section>
            <Filters></Filters>
          </section>
        )}
      </header>
      <main>
        {tosee.elements && (
          <>
            <section>
              <CreateElement categorys={OkCategorys}></CreateElement>
            </section>
            <section>
              <Elements
                okCategorys={OkCategorys}
                elements={FilterElements}
              ></Elements>
            </section>
          </>
        )}

        {tosee.categories && (
          <section>
            <CategoryOps OkCategorys={OkCategorys}></CategoryOps>
          </section>
        )}

        {tosee.calculadora && (
          <section>
            <Verification elements={elementsWithCategory}></Verification>
          </section>
        )}
      </main>
    </>
  );
}
